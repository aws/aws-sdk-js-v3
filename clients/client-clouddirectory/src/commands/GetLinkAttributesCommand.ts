// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLinkAttributesRequest, GetLinkAttributesResponse } from "../models/models_0";
import { GetLinkAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLinkAttributesCommand}.
 */
export interface GetLinkAttributesCommandInput extends GetLinkAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetLinkAttributesCommand}.
 */
export interface GetLinkAttributesCommandOutput extends GetLinkAttributesResponse, __MetadataBearer {}

/**
 * <p>Retrieves attributes that are associated with a typed link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetLinkAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetLinkAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetLinkAttributesRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   TypedLinkSpecifier: { // TypedLinkSpecifier
 *     TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 *       SchemaArn: "STRING_VALUE", // required
 *       TypedLinkName: "STRING_VALUE", // required
 *     },
 *     SourceObjectReference: { // ObjectReference
 *       Selector: "STRING_VALUE",
 *     },
 *     TargetObjectReference: {
 *       Selector: "STRING_VALUE",
 *     },
 *     IdentityAttributeValues: [ // AttributeNameAndValueList // required
 *       { // AttributeNameAndValue
 *         AttributeName: "STRING_VALUE", // required
 *         Value: { // TypedAttributeValue Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           BooleanValue: true || false,
 *           NumberValue: "STRING_VALUE",
 *           DatetimeValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *     ],
 *   },
 *   AttributeNames: [ // AttributeNameList // required
 *     "STRING_VALUE",
 *   ],
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new GetLinkAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkAttributesResponse
 * //   Attributes: [ // AttributeKeyAndValueList
 * //     { // AttributeKeyAndValue
 * //       Key: { // AttributeKey
 * //         SchemaArn: "STRING_VALUE", // required
 * //         FacetName: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       Value: { // TypedAttributeValue Union: only one key present
 * //         StringValue: "STRING_VALUE",
 * //         BinaryValue: new Uint8Array(),
 * //         BooleanValue: true || false,
 * //         NumberValue: "STRING_VALUE",
 * //         DatetimeValue: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLinkAttributesCommandInput - {@link GetLinkAttributesCommandInput}
 * @returns {@link GetLinkAttributesCommandOutput}
 * @see {@link GetLinkAttributesCommandInput} for command's `input` shape.
 * @see {@link GetLinkAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
 *
 * @throws {@link FacetValidationException} (client fault)
 *  <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 *
 * @public
 */
export class GetLinkAttributesCommand extends $Command
  .classBuilder<
    GetLinkAttributesCommandInput,
    GetLinkAttributesCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "GetLinkAttributes", {})
  .n("CloudDirectoryClient", "GetLinkAttributesCommand")
  .sc(GetLinkAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkAttributesRequest;
      output: GetLinkAttributesResponse;
    };
    sdk: {
      input: GetLinkAttributesCommandInput;
      output: GetLinkAttributesCommandOutput;
    };
  };
}

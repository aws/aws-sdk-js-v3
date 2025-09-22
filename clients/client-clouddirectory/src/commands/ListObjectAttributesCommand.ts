// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListObjectAttributesRequest, ListObjectAttributesResponse } from "../models/models_0";
import { ListObjectAttributes } from "../schemas/schemas_4_Object";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObjectAttributesCommand}.
 */
export interface ListObjectAttributesCommandInput extends ListObjectAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectAttributesCommand}.
 */
export interface ListObjectAttributesCommandOutput extends ListObjectAttributesResponse, __MetadataBearer {}

/**
 * <p>Lists all attributes that are associated with an object.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListObjectAttributesRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 *   FacetFilter: { // SchemaFacet
 *     SchemaArn: "STRING_VALUE",
 *     FacetName: "STRING_VALUE",
 *   },
 * };
 * const command = new ListObjectAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectAttributesResponse
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObjectAttributesCommandInput - {@link ListObjectAttributesCommandInput}
 * @returns {@link ListObjectAttributesCommandOutput}
 * @see {@link ListObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link ListObjectAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>Indicates that the <code>NextToken</code> value is not valid.</p>
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
 * @example To list object attributes
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   ObjectReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TW45F26R1HTY2z-stwKBte_Q"
 *   }
 * };
 * const command = new ListObjectAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       Key: {
 *         FacetName: "INDEX",
 *         Name: "index_is_unique",
 *         SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/CloudDirectory/1.0"
 *       },
 *       Value: {
 *         BooleanValue: true
 *       }
 *     },
 *     {
 *       Key: {
 *         FacetName: "INDEX",
 *         Name: "ordered_indexed_attributes",
 *         SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/CloudDirectory/1.0"
 *       },
 *       Value: {
 *         StringValue: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1*Organization*description"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListObjectAttributesCommand extends $Command
  .classBuilder<
    ListObjectAttributesCommandInput,
    ListObjectAttributesCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "ListObjectAttributes", {})
  .n("CloudDirectoryClient", "ListObjectAttributesCommand")
  .sc(ListObjectAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectAttributesRequest;
      output: ListObjectAttributesResponse;
    };
    sdk: {
      input: ListObjectAttributesCommandInput;
      output: ListObjectAttributesCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddFacetToObjectRequest, AddFacetToObjectResponse } from "../models/models_0";
import { AddFacetToObject } from "../schemas/schemas_4_Object";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddFacetToObjectCommand}.
 */
export interface AddFacetToObjectCommandInput extends AddFacetToObjectRequest {}
/**
 * @public
 *
 * The output of {@link AddFacetToObjectCommand}.
 */
export interface AddFacetToObjectCommandOutput extends AddFacetToObjectResponse, __MetadataBearer {}

/**
 * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AddFacetToObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AddFacetToObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // AddFacetToObjectRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   SchemaFacet: { // SchemaFacet
 *     SchemaArn: "STRING_VALUE",
 *     FacetName: "STRING_VALUE",
 *   },
 *   ObjectAttributeList: [ // AttributeKeyAndValueList
 *     { // AttributeKeyAndValue
 *       Key: { // AttributeKey
 *         SchemaArn: "STRING_VALUE", // required
 *         FacetName: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *       },
 *       Value: { // TypedAttributeValue Union: only one key present
 *         StringValue: "STRING_VALUE",
 *         BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         BooleanValue: true || false,
 *         NumberValue: "STRING_VALUE",
 *         DatetimeValue: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 * };
 * const command = new AddFacetToObjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddFacetToObjectCommandInput - {@link AddFacetToObjectCommandInput}
 * @returns {@link AddFacetToObjectCommandOutput}
 * @see {@link AddFacetToObjectCommandInput} for command's `input` shape.
 * @see {@link AddFacetToObjectCommandOutput} for command's `response` shape.
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
 * @example To add a facet to an object
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   ObjectAttributeList:   [],
 *   ObjectReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWmspn1fxfQmSQaaVKSbvEiQ"
 *   },
 *   SchemaFacet: {
 *     FacetName: "node1",
 *     SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 *   }
 * };
 * const command = new AddFacetToObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddFacetToObjectCommand extends $Command
  .classBuilder<
    AddFacetToObjectCommandInput,
    AddFacetToObjectCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "AddFacetToObject", {})
  .n("CloudDirectoryClient", "AddFacetToObjectCommand")
  .sc(AddFacetToObject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddFacetToObjectRequest;
      output: {};
    };
    sdk: {
      input: AddFacetToObjectCommandInput;
      output: AddFacetToObjectCommandOutput;
    };
  };
}

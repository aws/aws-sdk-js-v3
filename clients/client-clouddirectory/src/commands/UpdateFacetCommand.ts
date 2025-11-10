// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFacetRequest, UpdateFacetResponse } from "../models/models_0";
import { UpdateFacet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFacetCommand}.
 */
export interface UpdateFacetCommandInput extends UpdateFacetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFacetCommand}.
 */
export interface UpdateFacetCommandOutput extends UpdateFacetResponse, __MetadataBearer {}

/**
 * <p>Does the following:</p>
 *          <ol>
 *             <li>
 *                <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
 *             </li>
 *             <li>
 *                <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
 *             </li>
 *             <li>
 *                <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // UpdateFacetRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   AttributeUpdates: [ // FacetAttributeUpdateList
 *     { // FacetAttributeUpdate
 *       Attribute: { // FacetAttribute
 *         Name: "STRING_VALUE", // required
 *         AttributeDefinition: { // FacetAttributeDefinition
 *           Type: "STRING" || "BINARY" || "BOOLEAN" || "NUMBER" || "DATETIME" || "VARIANT", // required
 *           DefaultValue: { // TypedAttributeValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *             BooleanValue: true || false,
 *             NumberValue: "STRING_VALUE",
 *             DatetimeValue: new Date("TIMESTAMP"),
 *           },
 *           IsImmutable: true || false,
 *           Rules: { // RuleMap
 *             "<keys>": { // Rule
 *               Type: "BINARY_LENGTH" || "NUMBER_COMPARISON" || "STRING_FROM_SET" || "STRING_LENGTH",
 *               Parameters: { // RuleParameterMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           },
 *         },
 *         AttributeReference: { // FacetAttributeReference
 *           TargetFacetName: "STRING_VALUE", // required
 *           TargetAttributeName: "STRING_VALUE", // required
 *         },
 *         RequiredBehavior: "REQUIRED_ALWAYS" || "NOT_REQUIRED",
 *       },
 *       Action: "CREATE_OR_UPDATE" || "DELETE",
 *     },
 *   ],
 *   ObjectType: "NODE" || "LEAF_NODE" || "POLICY" || "INDEX",
 * };
 * const command = new UpdateFacetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFacetCommandInput - {@link UpdateFacetCommandInput}
 * @returns {@link UpdateFacetCommandOutput}
 * @see {@link UpdateFacetCommandInput} for command's `input` shape.
 * @see {@link UpdateFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link FacetNotFoundException} (client fault)
 *  <p>The specified <a>Facet</a> could not be found.</p>
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
 * @throws {@link InvalidFacetUpdateException} (client fault)
 *  <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema
 *       exception.</p>
 *
 * @throws {@link InvalidRuleException} (client fault)
 *  <p>Occurs when any of the rule parameter keys or values are invalid.</p>
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
export class UpdateFacetCommand extends $Command
  .classBuilder<
    UpdateFacetCommandInput,
    UpdateFacetCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "UpdateFacet", {})
  .n("CloudDirectoryClient", "UpdateFacetCommand")
  .sc(UpdateFacet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFacetRequest;
      output: {};
    };
    sdk: {
      input: UpdateFacetCommandInput;
      output: UpdateFacetCommandOutput;
    };
  };
}

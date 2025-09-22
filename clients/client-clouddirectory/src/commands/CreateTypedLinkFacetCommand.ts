// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTypedLinkFacetRequest, CreateTypedLinkFacetResponse } from "../models/models_0";
import { CreateTypedLinkFacet } from "../schemas/schemas_2_Facet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTypedLinkFacetCommand}.
 */
export interface CreateTypedLinkFacetCommandInput extends CreateTypedLinkFacetRequest {}
/**
 * @public
 *
 * The output of {@link CreateTypedLinkFacetCommand}.
 */
export interface CreateTypedLinkFacetCommandOutput extends CreateTypedLinkFacetResponse, __MetadataBearer {}

/**
 * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // CreateTypedLinkFacetRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Facet: { // TypedLinkFacet
 *     Name: "STRING_VALUE", // required
 *     Attributes: [ // TypedLinkAttributeDefinitionList // required
 *       { // TypedLinkAttributeDefinition
 *         Name: "STRING_VALUE", // required
 *         Type: "STRING" || "BINARY" || "BOOLEAN" || "NUMBER" || "DATETIME" || "VARIANT", // required
 *         DefaultValue: { // TypedAttributeValue Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           BooleanValue: true || false,
 *           NumberValue: "STRING_VALUE",
 *           DatetimeValue: new Date("TIMESTAMP"),
 *         },
 *         IsImmutable: true || false,
 *         Rules: { // RuleMap
 *           "<keys>": { // Rule
 *             Type: "BINARY_LENGTH" || "NUMBER_COMPARISON" || "STRING_FROM_SET" || "STRING_LENGTH",
 *             Parameters: { // RuleParameterMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         },
 *         RequiredBehavior: "REQUIRED_ALWAYS" || "NOT_REQUIRED", // required
 *       },
 *     ],
 *     IdentityAttributeOrder: [ // AttributeNameList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTypedLinkFacetCommandInput - {@link CreateTypedLinkFacetCommandInput}
 * @returns {@link CreateTypedLinkFacetCommandOutput}
 * @see {@link CreateTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link CreateTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link FacetAlreadyExistsException} (client fault)
 *  <p>A facet with the same name already exists.</p>
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
 * @example To create a typed link facet
 * ```javascript
 * //
 * const input = {
 *   Facet: {
 *     Attributes: [
 *       {
 *         Name: "1",
 *         RequiredBehavior: "REQUIRED_ALWAYS",
 *         Type: "BINARY"
 *       }
 *     ],
 *     IdentityAttributeOrder: [
 *       "1"
 *     ],
 *     Name: "FacetExample"
 *   },
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:schema/development/typedlinkschema"
 * };
 * const command = new CreateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTypedLinkFacetCommand extends $Command
  .classBuilder<
    CreateTypedLinkFacetCommandInput,
    CreateTypedLinkFacetCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "CreateTypedLinkFacet", {})
  .n("CloudDirectoryClient", "CreateTypedLinkFacetCommand")
  .sc(CreateTypedLinkFacet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTypedLinkFacetRequest;
      output: {};
    };
    sdk: {
      input: CreateTypedLinkFacetCommandInput;
      output: CreateTypedLinkFacetCommandOutput;
    };
  };
}

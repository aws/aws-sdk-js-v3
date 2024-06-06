// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFacetRequest, CreateFacetResponse } from "../models/models_0";
import { de_CreateFacetCommand, se_CreateFacetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFacetCommand}.
 */
export interface CreateFacetCommandInput extends CreateFacetRequest {}
/**
 * @public
 *
 * The output of {@link CreateFacetCommand}.
 */
export interface CreateFacetCommandOutput extends CreateFacetResponse, __MetadataBearer {}

/**
 * <p>Creates a new <a>Facet</a> in a schema. Facet creation is allowed only
 *       in development or applied schemas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // CreateFacetRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Attributes: [ // FacetAttributeList
 *     { // FacetAttribute
 *       Name: "STRING_VALUE", // required
 *       AttributeDefinition: { // FacetAttributeDefinition
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
 *       },
 *       AttributeReference: { // FacetAttributeReference
 *         TargetFacetName: "STRING_VALUE", // required
 *         TargetAttributeName: "STRING_VALUE", // required
 *       },
 *       RequiredBehavior: "REQUIRED_ALWAYS" || "NOT_REQUIRED",
 *     },
 *   ],
 *   ObjectType: "NODE" || "LEAF_NODE" || "POLICY" || "INDEX",
 *   FacetStyle: "STATIC" || "DYNAMIC",
 * };
 * const command = new CreateFacetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateFacetCommandInput - {@link CreateFacetCommandInput}
 * @returns {@link CreateFacetCommandOutput}
 * @see {@link CreateFacetCommandInput} for command's `input` shape.
 * @see {@link CreateFacetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateFacetCommand extends $Command
  .classBuilder<
    CreateFacetCommandInput,
    CreateFacetCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudDirectory_20170111", "CreateFacet", {})
  .n("CloudDirectoryClient", "CreateFacetCommand")
  .f(void 0, void 0)
  .ser(se_CreateFacetCommand)
  .de(de_CreateFacetCommand)
  .build() {}

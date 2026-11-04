// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFacetRequest, CreateFacetResponse } from "../models/models_0";
import { CreateFacet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
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
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link FacetAlreadyExistsException} (client fault)
 *
 * A facet with the same name already exists.
 *
 * @throws {@link FacetValidationException} (client fault)
 *
 * The Facet that you provided was not well formed or could not be validated with the schema.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * Indicates that the provided ARN value is not valid.
 *
 * @throws {@link InvalidRuleException} (client fault)
 *
 * Occurs when any of the rule parameter keys or values are invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @throws {@link CloudDirectoryServiceException}
 *
 * Base exception class for all service exceptions from CloudDirectory service.
 *
 * @example To create a facet
 * ```javascript
 * //
 * const input = {
 *   Name: "node1",
 *   ObjectType: "NODE",
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 * };
 * const command = new CreateFacetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateFacetCommand extends command<CreateFacetCommandInput, CreateFacetCommandOutput>(
  _ep0,
  _mw0,
  "CreateFacet",
  CreateFacet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFacetRequest;
      output: {};
    };
    sdk: {
      input: CreateFacetCommandInput;
      output: CreateFacetCommandOutput;
    };
  };
}

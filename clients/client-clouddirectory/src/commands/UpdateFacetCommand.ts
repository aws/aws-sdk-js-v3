// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFacetRequest, UpdateFacetResponse } from "../models/models_0";
import { UpdateFacet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Does the following:
 *
 * 1. Adds new `Attributes`, `Rules`, or `ObjectTypes`.
 * 2. Updates existing `Attributes`, `Rules`, or `ObjectTypes`.
 * 3. Deletes existing `Attributes`, `Rules`, or `ObjectTypes`.
 *
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
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link FacetNotFoundException} (client fault)
 *
 * The specified Facet could not be found.
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
 * @throws {@link InvalidFacetUpdateException} (client fault)
 *
 * An attempt to modify a Facet resulted in an invalid schema exception.
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
 * @public
 */
export class UpdateFacetCommand extends command<UpdateFacetCommandInput, UpdateFacetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFacet",
  UpdateFacet$
) {
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

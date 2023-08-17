// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { UpdateFacetRequest, UpdateFacetResponse } from "../models/models_0";
import { de_UpdateFacetCommand, se_UpdateFacetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 *             BinaryValue: "BLOB_VALUE",
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
 */
export class UpdateFacetCommand extends $Command<
  UpdateFacetCommandInput,
  UpdateFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateFacetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFacetCommandInput, UpdateFacetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFacetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "UpdateFacetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateFacetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFacetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFacetCommandOutput> {
    return de_UpdateFacetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

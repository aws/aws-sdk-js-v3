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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { UpdateTypedLinkFacetRequest, UpdateTypedLinkFacetResponse } from "../models/models_0";
import { de_UpdateTypedLinkFacetCommand, se_UpdateTypedLinkFacetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTypedLinkFacetCommand}.
 */
export interface UpdateTypedLinkFacetCommandInput extends UpdateTypedLinkFacetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTypedLinkFacetCommand}.
 */
export interface UpdateTypedLinkFacetCommandOutput extends UpdateTypedLinkFacetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // UpdateTypedLinkFacetRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   AttributeUpdates: [ // TypedLinkFacetAttributeUpdateList // required
 *     { // TypedLinkFacetAttributeUpdate
 *       Attribute: { // TypedLinkAttributeDefinition
 *         Name: "STRING_VALUE", // required
 *         Type: "STRING" || "BINARY" || "BOOLEAN" || "NUMBER" || "DATETIME" || "VARIANT", // required
 *         DefaultValue: { // TypedAttributeValue Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: "BLOB_VALUE",
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
 *       Action: "CREATE_OR_UPDATE" || "DELETE", // required
 *     },
 *   ],
 *   IdentityAttributeOrder: [ // AttributeNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTypedLinkFacetCommandInput - {@link UpdateTypedLinkFacetCommandInput}
 * @returns {@link UpdateTypedLinkFacetCommandOutput}
 * @see {@link UpdateTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link UpdateTypedLinkFacetCommandOutput} for command's `response` shape.
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
export class UpdateTypedLinkFacetCommand extends $Command<
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
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
  constructor(readonly input: UpdateTypedLinkFacetCommandInput) {
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
  ): Handler<UpdateTypedLinkFacetCommandInput, UpdateTypedLinkFacetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTypedLinkFacetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "UpdateTypedLinkFacetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonCloudDirectory_20170111",
        operation: "UpdateTypedLinkFacet",
      },
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
  private serialize(input: UpdateTypedLinkFacetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTypedLinkFacetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTypedLinkFacetCommandOutput> {
    return de_UpdateTypedLinkFacetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

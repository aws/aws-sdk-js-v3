// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetPropertyValueHistoryRequest, GetPropertyValueHistoryResponse } from "../models/models_0";
import { de_GetPropertyValueHistoryCommand, se_GetPropertyValueHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetPropertyValueHistoryCommand}.
 */
export interface GetPropertyValueHistoryCommandInput extends GetPropertyValueHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetPropertyValueHistoryCommand}.
 */
export interface GetPropertyValueHistoryCommandOutput extends GetPropertyValueHistoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the history of a time series property value for a component,
 *          component type, entity, or workspace.</p>
 *          <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries,
 *          specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity
 *          quries, specify a value for <code>componentTypeId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetPropertyValueHistoryCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetPropertyValueHistoryCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetPropertyValueHistoryRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE",
 *   componentName: "STRING_VALUE",
 *   componentTypeId: "STRING_VALUE",
 *   selectedProperties: [ // SelectedPropertyList // required
 *     "STRING_VALUE",
 *   ],
 *   propertyFilters: [ // PropertyFilters
 *     { // PropertyFilter
 *       propertyName: "STRING_VALUE",
 *       operator: "STRING_VALUE",
 *       value: { // DataValue
 *         booleanValue: true || false,
 *         doubleValue: Number("double"),
 *         integerValue: Number("int"),
 *         longValue: Number("long"),
 *         stringValue: "STRING_VALUE",
 *         listValue: [ // DataValueList
 *           {
 *             booleanValue: true || false,
 *             doubleValue: Number("double"),
 *             integerValue: Number("int"),
 *             longValue: Number("long"),
 *             stringValue: "STRING_VALUE",
 *             listValue: [
 *               "<DataValue>",
 *             ],
 *             mapValue: { // DataValueMap
 *               "<keys>": "<DataValue>",
 *             },
 *             relationshipValue: { // RelationshipValue
 *               targetEntityId: "STRING_VALUE",
 *               targetComponentName: "STRING_VALUE",
 *             },
 *             expression: "STRING_VALUE",
 *           },
 *         ],
 *         mapValue: {
 *           "<keys>": "<DataValue>",
 *         },
 *         relationshipValue: {
 *           targetEntityId: "STRING_VALUE",
 *           targetComponentName: "STRING_VALUE",
 *         },
 *         expression: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   startDateTime: new Date("TIMESTAMP"),
 *   endDateTime: new Date("TIMESTAMP"),
 *   interpolation: { // InterpolationParameters
 *     interpolationType: "STRING_VALUE",
 *     intervalInSeconds: Number("long"),
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   orderByTime: "STRING_VALUE",
 *   startTime: "STRING_VALUE",
 *   endTime: "STRING_VALUE",
 * };
 * const command = new GetPropertyValueHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetPropertyValueHistoryCommandInput - {@link GetPropertyValueHistoryCommandInput}
 * @returns {@link GetPropertyValueHistoryCommandOutput}
 * @see {@link GetPropertyValueHistoryCommandInput} for command's `input` shape.
 * @see {@link GetPropertyValueHistoryCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConnectorFailureException} (client fault)
 *  <p>The connector failed.</p>
 *
 * @throws {@link ConnectorTimeoutException} (client fault)
 *  <p>The connector timed out.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 *
 */
export class GetPropertyValueHistoryCommand extends $Command<
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
  IoTTwinMakerClientResolvedConfig
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
  constructor(readonly input: GetPropertyValueHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPropertyValueHistoryCommandInput, GetPropertyValueHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPropertyValueHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "GetPropertyValueHistoryCommand";
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
  private serialize(input: GetPropertyValueHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPropertyValueHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPropertyValueHistoryCommandOutput> {
    return de_GetPropertyValueHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

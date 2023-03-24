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
import { UpdateEntityRequest, UpdateEntityResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEntityCommand,
  serializeAws_restJson1UpdateEntityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateEntityCommand}.
 */
export interface UpdateEntityCommandInput extends UpdateEntityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEntityCommand}.
 */
export interface UpdateEntityCommandOutput extends UpdateEntityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, UpdateEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, UpdateEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = {
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   entityName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   componentUpdates: {
 *     "<keys>": {
 *       updateType: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       componentTypeId: "STRING_VALUE",
 *       propertyUpdates: {
 *         "<keys>": {
 *           definition: {
 *             dataType: {
 *               type: "STRING_VALUE", // required
 *               nestedType: {
 *                 type: "STRING_VALUE", // required
 *                 nestedType: {
 *                   type: "<DataType>",
 *                   nestedType: "<DataType>",
 *                   allowedValues: [
 *                     {
 *                       booleanValue: true || false,
 *                       doubleValue: Number("double"),
 *                       integerValue: Number("int"),
 *                       longValue: Number("long"),
 *                       stringValue: "STRING_VALUE",
 *                       listValue: [
 *                         {
 *                           booleanValue: true || false,
 *                           doubleValue: Number("double"),
 *                           integerValue: Number("int"),
 *                           longValue: Number("long"),
 *                           stringValue: "STRING_VALUE",
 *                           listValue: [
 *                             "<DataValueList>",
 *                           ],
 *                           mapValue: {
 *                             "<keys>": {
 *                               booleanValue: "<DataValue>",
 *                               doubleValue: "<DataValue>",
 *                               integerValue: "<DataValue>",
 *                               longValue: "<DataValue>",
 *                               stringValue: "<DataValue>",
 *                               listValue: "<DataValue>",
 *                               mapValue: {
 *                                 "<keys>": {
 *                                   booleanValue: "<DataValue>",
 *                                   doubleValue: "<DataValue>",
 *                                   integerValue: "<DataValue>",
 *                                   longValue: "<DataValue>",
 *                                   stringValue: "<DataValue>",
 *                                   listValue: "<DataValue>",
 *                                   mapValue: "<DataValue>",
 *                                   relationshipValue: {
 *                                     targetEntityId: "STRING_VALUE",
 *                                     targetComponentName: "STRING_VALUE",
 *                                   },
 *                                   expression: "STRING_VALUE",
 *                                 },
 *                               },
 *                               relationshipValue: {
 *                                 targetEntityId: "STRING_VALUE",
 *                                 targetComponentName: "STRING_VALUE",
 *                               },
 *                               expression: "STRING_VALUE",
 *                             },
 *                           },
 *                           relationshipValue: "<DataValue>",
 *                           expression: "<DataValue>",
 *                         },
 *                       ],
 *                       mapValue: "<DataValue>",
 *                       relationshipValue: "<DataValue>",
 *                       expression: "<DataValue>",
 *                     },
 *                   ],
 *                   unitOfMeasure: "STRING_VALUE",
 *                   relationship: {
 *                     targetComponentTypeId: "STRING_VALUE",
 *                     relationshipType: "STRING_VALUE",
 *                   },
 *                 },
 *                 allowedValues: [
 *                   "<DataValueList>",
 *                 ],
 *                 unitOfMeasure: "STRING_VALUE",
 *                 relationship: {
 *                   targetComponentTypeId: "STRING_VALUE",
 *                   relationshipType: "STRING_VALUE",
 *                 },
 *               },
 *               allowedValues: "<DataType>",
 *               unitOfMeasure: "<DataType>",
 *               relationship: "<DataType>",
 *             },
 *             isRequiredInEntity: true || false,
 *             isExternalId: true || false,
 *             isStoredExternally: true || false,
 *             isTimeSeries: true || false,
 *             defaultValue: {
 *               booleanValue: "<DataValue>",
 *               doubleValue: "<DataValue>",
 *               integerValue: "<DataValue>",
 *               longValue: "<DataValue>",
 *               stringValue: "<DataValue>",
 *               listValue: "<DataValue>",
 *               mapValue: "<DataValue>",
 *               relationshipValue: "<DataValue>",
 *               expression: "<DataValue>",
 *             },
 *             configuration: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             displayName: "STRING_VALUE",
 *           },
 *           value: {
 *             booleanValue: "<DataValue>",
 *             doubleValue: "<DataValue>",
 *             integerValue: "<DataValue>",
 *             longValue: "<DataValue>",
 *             stringValue: "<DataValue>",
 *             listValue: "<DataValue>",
 *             mapValue: "<DataValue>",
 *             relationshipValue: "<DataValue>",
 *             expression: "<DataValue>",
 *           },
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *       propertyGroupUpdates: {
 *         "<keys>": {
 *           groupType: "STRING_VALUE",
 *           propertyNames: [
 *             "STRING_VALUE",
 *           ],
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   parentEntityUpdate: {
 *     updateType: "STRING_VALUE", // required
 *     parentEntityId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEntityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateEntityCommandInput - {@link UpdateEntityCommandInput}
 * @returns {@link UpdateEntityCommandOutput}
 * @see {@link UpdateEntityCommandInput} for command's `input` shape.
 * @see {@link UpdateEntityCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 *
 */
export class UpdateEntityCommand extends $Command<
  UpdateEntityCommandInput,
  UpdateEntityCommandOutput,
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
  constructor(readonly input: UpdateEntityCommandInput) {
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
  ): Handler<UpdateEntityCommandInput, UpdateEntityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateEntityCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "UpdateEntityCommand";
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
  private serialize(input: UpdateEntityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEntityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEntityCommandOutput> {
    return deserializeAws_restJson1UpdateEntityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

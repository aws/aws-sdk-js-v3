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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { UpdateEntityRequest, UpdateEntityResponse } from "../models/models_0";
import { de_UpdateEntityCommand, se_UpdateEntityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // UpdateEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   entityName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   componentUpdates: { // ComponentUpdatesMapRequest
 *     "<keys>": { // ComponentUpdateRequest
 *       updateType: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       componentTypeId: "STRING_VALUE",
 *       propertyUpdates: { // PropertyRequests
 *         "<keys>": { // PropertyRequest
 *           definition: { // PropertyDefinitionRequest
 *             dataType: { // DataType
 *               type: "STRING_VALUE", // required
 *               nestedType: {
 *                 type: "STRING_VALUE", // required
 *                 nestedType: "<DataType>",
 *                 allowedValues: [ // DataValueList
 *                   { // DataValue
 *                     booleanValue: true || false,
 *                     doubleValue: Number("double"),
 *                     integerValue: Number("int"),
 *                     longValue: Number("long"),
 *                     stringValue: "STRING_VALUE",
 *                     listValue: [
 *                       {
 *                         booleanValue: true || false,
 *                         doubleValue: Number("double"),
 *                         integerValue: Number("int"),
 *                         longValue: Number("long"),
 *                         stringValue: "STRING_VALUE",
 *                         listValue: "<DataValueList>",
 *                         mapValue: { // DataValueMap
 *                           "<keys>": "<DataValue>",
 *                         },
 *                         relationshipValue: { // RelationshipValue
 *                           targetEntityId: "STRING_VALUE",
 *                           targetComponentName: "STRING_VALUE",
 *                         },
 *                         expression: "STRING_VALUE",
 *                       },
 *                     ],
 *                     mapValue: {
 *                       "<keys>": "<DataValue>",
 *                     },
 *                     relationshipValue: {
 *                       targetEntityId: "STRING_VALUE",
 *                       targetComponentName: "STRING_VALUE",
 *                     },
 *                     expression: "STRING_VALUE",
 *                   },
 *                 ],
 *                 unitOfMeasure: "STRING_VALUE",
 *                 relationship: { // Relationship
 *                   targetComponentTypeId: "STRING_VALUE",
 *                   relationshipType: "STRING_VALUE",
 *                 },
 *               },
 *               allowedValues: "<DataValueList>",
 *               unitOfMeasure: "STRING_VALUE",
 *               relationship: {
 *                 targetComponentTypeId: "STRING_VALUE",
 *                 relationshipType: "STRING_VALUE",
 *               },
 *             },
 *             isRequiredInEntity: true || false,
 *             isExternalId: true || false,
 *             isStoredExternally: true || false,
 *             isTimeSeries: true || false,
 *             defaultValue: "<DataValue>",
 *             configuration: { // Configuration
 *               "<keys>": "STRING_VALUE",
 *             },
 *             displayName: "STRING_VALUE",
 *           },
 *           value: "<DataValue>",
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *       propertyGroupUpdates: { // ComponentPropertyGroupRequests
 *         "<keys>": { // ComponentPropertyGroupRequest
 *           groupType: "STRING_VALUE",
 *           propertyNames: [ // PropertyNames
 *             "STRING_VALUE",
 *           ],
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   parentEntityUpdate: { // ParentEntityUpdateRequest
 *     updateType: "STRING_VALUE", // required
 *     parentEntityId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEntityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEntityResponse
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
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
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "UpdateEntity",
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
  private serialize(input: UpdateEntityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEntityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEntityCommandOutput> {
    return de_UpdateEntityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

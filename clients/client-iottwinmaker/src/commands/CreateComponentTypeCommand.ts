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
import { CreateComponentTypeRequest, CreateComponentTypeResponse } from "../models/models_0";
import { de_CreateComponentTypeCommand, se_CreateComponentTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateComponentTypeCommand}.
 */
export interface CreateComponentTypeCommandInput extends CreateComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateComponentTypeCommand}.
 */
export interface CreateComponentTypeCommandOutput extends CreateComponentTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   isSingleton: true || false,
 *   componentTypeId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   propertyDefinitions: { // PropertyDefinitionsRequest
 *     "<keys>": { // PropertyDefinitionRequest
 *       dataType: { // DataType
 *         type: "STRING_VALUE", // required
 *         nestedType: {
 *           type: "STRING_VALUE", // required
 *           nestedType: "<DataType>",
 *           allowedValues: [ // DataValueList
 *             { // DataValue
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               integerValue: Number("int"),
 *               longValue: Number("long"),
 *               stringValue: "STRING_VALUE",
 *               listValue: [
 *                 {
 *                   booleanValue: true || false,
 *                   doubleValue: Number("double"),
 *                   integerValue: Number("int"),
 *                   longValue: Number("long"),
 *                   stringValue: "STRING_VALUE",
 *                   listValue: "<DataValueList>",
 *                   mapValue: { // DataValueMap
 *                     "<keys>": "<DataValue>",
 *                   },
 *                   relationshipValue: { // RelationshipValue
 *                     targetEntityId: "STRING_VALUE",
 *                     targetComponentName: "STRING_VALUE",
 *                   },
 *                   expression: "STRING_VALUE",
 *                 },
 *               ],
 *               mapValue: {
 *                 "<keys>": "<DataValue>",
 *               },
 *               relationshipValue: {
 *                 targetEntityId: "STRING_VALUE",
 *                 targetComponentName: "STRING_VALUE",
 *               },
 *               expression: "STRING_VALUE",
 *             },
 *           ],
 *           unitOfMeasure: "STRING_VALUE",
 *           relationship: { // Relationship
 *             targetComponentTypeId: "STRING_VALUE",
 *             relationshipType: "STRING_VALUE",
 *           },
 *         },
 *         allowedValues: "<DataValueList>",
 *         unitOfMeasure: "STRING_VALUE",
 *         relationship: {
 *           targetComponentTypeId: "STRING_VALUE",
 *           relationshipType: "STRING_VALUE",
 *         },
 *       },
 *       isRequiredInEntity: true || false,
 *       isExternalId: true || false,
 *       isStoredExternally: true || false,
 *       isTimeSeries: true || false,
 *       defaultValue: "<DataValue>",
 *       configuration: { // Configuration
 *         "<keys>": "STRING_VALUE",
 *       },
 *       displayName: "STRING_VALUE",
 *     },
 *   },
 *   extendsFrom: [ // ExtendsFrom
 *     "STRING_VALUE",
 *   ],
 *   functions: { // FunctionsRequest
 *     "<keys>": { // FunctionRequest
 *       requiredProperties: [ // RequiredProperties
 *         "STRING_VALUE",
 *       ],
 *       scope: "STRING_VALUE",
 *       implementedBy: { // DataConnector
 *         lambda: { // LambdaFunction
 *           arn: "STRING_VALUE", // required
 *         },
 *         isNative: true || false,
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   propertyGroups: { // PropertyGroupsRequest
 *     "<keys>": { // PropertyGroupRequest
 *       groupType: "STRING_VALUE",
 *       propertyNames: [ // PropertyNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   componentTypeName: "STRING_VALUE",
 * };
 * const command = new CreateComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateComponentTypeResponse
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateComponentTypeCommandInput - {@link CreateComponentTypeCommandInput}
 * @returns {@link CreateComponentTypeCommandOutput}
 * @see {@link CreateComponentTypeCommandInput} for command's `input` shape.
 * @see {@link CreateComponentTypeCommandOutput} for command's `response` shape.
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
export class CreateComponentTypeCommand extends $Command<
  CreateComponentTypeCommandInput,
  CreateComponentTypeCommandOutput,
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
  constructor(readonly input: CreateComponentTypeCommandInput) {
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
  ): Handler<CreateComponentTypeCommandInput, CreateComponentTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateComponentTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "CreateComponentTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "CreateComponentType",
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
  private serialize(input: CreateComponentTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateComponentTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateComponentTypeCommandOutput> {
    return de_CreateComponentTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

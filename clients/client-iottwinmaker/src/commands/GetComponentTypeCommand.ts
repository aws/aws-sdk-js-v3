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
import { GetComponentTypeRequest, GetComponentTypeResponse } from "../models/models_0";
import { de_GetComponentTypeCommand, se_GetComponentTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComponentTypeCommand}.
 */
export interface GetComponentTypeCommandInput extends GetComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentTypeCommand}.
 */
export interface GetComponentTypeCommandOutput extends GetComponentTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   componentTypeId: "STRING_VALUE", // required
 * };
 * const command = new GetComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentTypeResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   isSingleton: true || false,
 * //   componentTypeId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   propertyDefinitions: { // PropertyDefinitionsResponse
 * //     "<keys>": { // PropertyDefinitionResponse
 * //       dataType: { // DataType
 * //         type: "STRING_VALUE", // required
 * //         nestedType: {
 * //           type: "STRING_VALUE", // required
 * //           nestedType: "<DataType>",
 * //           allowedValues: [ // DataValueList
 * //             { // DataValue
 * //               booleanValue: true || false,
 * //               doubleValue: Number("double"),
 * //               integerValue: Number("int"),
 * //               longValue: Number("long"),
 * //               stringValue: "STRING_VALUE",
 * //               listValue: [
 * //                 {
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   integerValue: Number("int"),
 * //                   longValue: Number("long"),
 * //                   stringValue: "STRING_VALUE",
 * //                   listValue: "<DataValueList>",
 * //                   mapValue: { // DataValueMap
 * //                     "<keys>": "<DataValue>",
 * //                   },
 * //                   relationshipValue: { // RelationshipValue
 * //                     targetEntityId: "STRING_VALUE",
 * //                     targetComponentName: "STRING_VALUE",
 * //                   },
 * //                   expression: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               mapValue: {
 * //                 "<keys>": "<DataValue>",
 * //               },
 * //               relationshipValue: {
 * //                 targetEntityId: "STRING_VALUE",
 * //                 targetComponentName: "STRING_VALUE",
 * //               },
 * //               expression: "STRING_VALUE",
 * //             },
 * //           ],
 * //           unitOfMeasure: "STRING_VALUE",
 * //           relationship: { // Relationship
 * //             targetComponentTypeId: "STRING_VALUE",
 * //             relationshipType: "STRING_VALUE",
 * //           },
 * //         },
 * //         allowedValues: "<DataValueList>",
 * //         unitOfMeasure: "STRING_VALUE",
 * //         relationship: {
 * //           targetComponentTypeId: "STRING_VALUE",
 * //           relationshipType: "STRING_VALUE",
 * //         },
 * //       },
 * //       isTimeSeries: true || false, // required
 * //       isRequiredInEntity: true || false, // required
 * //       isExternalId: true || false, // required
 * //       isStoredExternally: true || false, // required
 * //       isImported: true || false, // required
 * //       isFinal: true || false, // required
 * //       isInherited: true || false, // required
 * //       defaultValue: "<DataValue>",
 * //       configuration: { // Configuration
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   },
 * //   extendsFrom: [ // ExtendsFrom
 * //     "STRING_VALUE",
 * //   ],
 * //   functions: { // FunctionsResponse
 * //     "<keys>": { // FunctionResponse
 * //       requiredProperties: [ // RequiredProperties
 * //         "STRING_VALUE",
 * //       ],
 * //       scope: "STRING_VALUE",
 * //       implementedBy: { // DataConnector
 * //         lambda: { // LambdaFunction
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //         isNative: true || false,
 * //       },
 * //       isInherited: true || false,
 * //     },
 * //   },
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   arn: "STRING_VALUE", // required
 * //   isAbstract: true || false,
 * //   isSchemaInitialized: true || false,
 * //   status: { // Status
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   propertyGroups: { // PropertyGroupsResponse
 * //     "<keys>": { // PropertyGroupResponse
 * //       groupType: "STRING_VALUE", // required
 * //       propertyNames: [ // PropertyNames // required
 * //         "STRING_VALUE",
 * //       ],
 * //       isInherited: true || false, // required
 * //     },
 * //   },
 * //   syncSource: "STRING_VALUE",
 * //   componentTypeName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComponentTypeCommandInput - {@link GetComponentTypeCommandInput}
 * @returns {@link GetComponentTypeCommandOutput}
 * @see {@link GetComponentTypeCommandInput} for command's `input` shape.
 * @see {@link GetComponentTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 */
export class GetComponentTypeCommand extends $Command<
  GetComponentTypeCommandInput,
  GetComponentTypeCommandOutput,
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
  constructor(readonly input: GetComponentTypeCommandInput) {
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
  ): Handler<GetComponentTypeCommandInput, GetComponentTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComponentTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "GetComponentTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "GetComponentType",
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
  private serialize(input: GetComponentTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComponentTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComponentTypeCommandOutput> {
    return de_GetComponentTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

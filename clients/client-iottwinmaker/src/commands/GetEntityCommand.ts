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
import { GetEntityRequest, GetEntityResponse } from "../models/models_0";
import { de_GetEntityCommand, se_GetEntityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEntityCommand}.
 */
export interface GetEntityCommandInput extends GetEntityRequest {}
/**
 * @public
 *
 * The output of {@link GetEntityCommand}.
 */
export interface GetEntityCommandOutput extends GetEntityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 * };
 * const command = new GetEntityCommand(input);
 * const response = await client.send(command);
 * // { // GetEntityResponse
 * //   entityId: "STRING_VALUE", // required
 * //   entityName: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // Status
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   workspaceId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   components: { // ComponentsMap
 * //     "<keys>": { // ComponentResponse
 * //       componentName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       componentTypeId: "STRING_VALUE",
 * //       status: {
 * //         state: "STRING_VALUE",
 * //         error: {
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       definedIn: "STRING_VALUE",
 * //       properties: { // PropertyResponses
 * //         "<keys>": { // PropertyResponse
 * //           definition: { // PropertyDefinitionResponse
 * //             dataType: { // DataType
 * //               type: "STRING_VALUE", // required
 * //               nestedType: {
 * //                 type: "STRING_VALUE", // required
 * //                 nestedType: "<DataType>",
 * //                 allowedValues: [ // DataValueList
 * //                   { // DataValue
 * //                     booleanValue: true || false,
 * //                     doubleValue: Number("double"),
 * //                     integerValue: Number("int"),
 * //                     longValue: Number("long"),
 * //                     stringValue: "STRING_VALUE",
 * //                     listValue: [
 * //                       {
 * //                         booleanValue: true || false,
 * //                         doubleValue: Number("double"),
 * //                         integerValue: Number("int"),
 * //                         longValue: Number("long"),
 * //                         stringValue: "STRING_VALUE",
 * //                         listValue: "<DataValueList>",
 * //                         mapValue: { // DataValueMap
 * //                           "<keys>": "<DataValue>",
 * //                         },
 * //                         relationshipValue: { // RelationshipValue
 * //                           targetEntityId: "STRING_VALUE",
 * //                           targetComponentName: "STRING_VALUE",
 * //                         },
 * //                         expression: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     mapValue: {
 * //                       "<keys>": "<DataValue>",
 * //                     },
 * //                     relationshipValue: {
 * //                       targetEntityId: "STRING_VALUE",
 * //                       targetComponentName: "STRING_VALUE",
 * //                     },
 * //                     expression: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 unitOfMeasure: "STRING_VALUE",
 * //                 relationship: { // Relationship
 * //                   targetComponentTypeId: "STRING_VALUE",
 * //                   relationshipType: "STRING_VALUE",
 * //                 },
 * //               },
 * //               allowedValues: "<DataValueList>",
 * //               unitOfMeasure: "STRING_VALUE",
 * //               relationship: {
 * //                 targetComponentTypeId: "STRING_VALUE",
 * //                 relationshipType: "STRING_VALUE",
 * //               },
 * //             },
 * //             isTimeSeries: true || false, // required
 * //             isRequiredInEntity: true || false, // required
 * //             isExternalId: true || false, // required
 * //             isStoredExternally: true || false, // required
 * //             isImported: true || false, // required
 * //             isFinal: true || false, // required
 * //             isInherited: true || false, // required
 * //             defaultValue: "<DataValue>",
 * //             configuration: { // Configuration
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             displayName: "STRING_VALUE",
 * //           },
 * //           value: "<DataValue>",
 * //         },
 * //       },
 * //       propertyGroups: { // ComponentPropertyGroupResponses
 * //         "<keys>": { // ComponentPropertyGroupResponse
 * //           groupType: "STRING_VALUE", // required
 * //           propertyNames: [ // PropertyNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           isInherited: true || false, // required
 * //         },
 * //       },
 * //       syncSource: "STRING_VALUE",
 * //     },
 * //   },
 * //   parentEntityId: "STRING_VALUE", // required
 * //   hasChildEntities: true || false, // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   syncSource: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEntityCommandInput - {@link GetEntityCommandInput}
 * @returns {@link GetEntityCommandOutput}
 * @see {@link GetEntityCommandInput} for command's `input` shape.
 * @see {@link GetEntityCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
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
export class GetEntityCommand extends $Command<
  GetEntityCommandInput,
  GetEntityCommandOutput,
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
  constructor(readonly input: GetEntityCommandInput) {
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
  ): Handler<GetEntityCommandInput, GetEntityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEntityCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "GetEntityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "GetEntity",
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
  private serialize(input: GetEntityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEntityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEntityCommandOutput> {
    return de_GetEntityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

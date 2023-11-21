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
import { ListPropertiesRequest, ListPropertiesResponse } from "../models/models_0";
import { de_ListPropertiesCommand, se_ListPropertiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPropertiesCommand}.
 */
export interface ListPropertiesCommandInput extends ListPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ListPropertiesCommand}.
 */
export interface ListPropertiesCommandOutput extends ListPropertiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API lists the properties of a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListPropertiesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListPropertiesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListPropertiesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   componentName: "STRING_VALUE",
 *   componentPath: "STRING_VALUE",
 *   entityId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // ListPropertiesResponse
 * //   propertySummaries: [ // PropertySummaries // required
 * //     { // PropertySummary
 * //       definition: { // PropertyDefinitionResponse
 * //         dataType: { // DataType
 * //           type: "STRING_VALUE", // required
 * //           nestedType: {
 * //             type: "STRING_VALUE", // required
 * //             nestedType: "<DataType>",
 * //             allowedValues: [ // DataValueList
 * //               { // DataValue
 * //                 booleanValue: true || false,
 * //                 doubleValue: Number("double"),
 * //                 integerValue: Number("int"),
 * //                 longValue: Number("long"),
 * //                 stringValue: "STRING_VALUE",
 * //                 listValue: [
 * //                   {
 * //                     booleanValue: true || false,
 * //                     doubleValue: Number("double"),
 * //                     integerValue: Number("int"),
 * //                     longValue: Number("long"),
 * //                     stringValue: "STRING_VALUE",
 * //                     listValue: "<DataValueList>",
 * //                     mapValue: { // DataValueMap
 * //                       "<keys>": "<DataValue>",
 * //                     },
 * //                     relationshipValue: { // RelationshipValue
 * //                       targetEntityId: "STRING_VALUE",
 * //                       targetComponentName: "STRING_VALUE",
 * //                     },
 * //                     expression: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 mapValue: {
 * //                   "<keys>": "<DataValue>",
 * //                 },
 * //                 relationshipValue: {
 * //                   targetEntityId: "STRING_VALUE",
 * //                   targetComponentName: "STRING_VALUE",
 * //                 },
 * //                 expression: "STRING_VALUE",
 * //               },
 * //             ],
 * //             unitOfMeasure: "STRING_VALUE",
 * //             relationship: { // Relationship
 * //               targetComponentTypeId: "STRING_VALUE",
 * //               relationshipType: "STRING_VALUE",
 * //             },
 * //           },
 * //           allowedValues: "<DataValueList>",
 * //           unitOfMeasure: "STRING_VALUE",
 * //           relationship: {
 * //             targetComponentTypeId: "STRING_VALUE",
 * //             relationshipType: "STRING_VALUE",
 * //           },
 * //         },
 * //         isTimeSeries: true || false, // required
 * //         isRequiredInEntity: true || false, // required
 * //         isExternalId: true || false, // required
 * //         isStoredExternally: true || false, // required
 * //         isImported: true || false, // required
 * //         isFinal: true || false, // required
 * //         isInherited: true || false, // required
 * //         defaultValue: "<DataValue>",
 * //         configuration: { // Configuration
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         displayName: "STRING_VALUE",
 * //       },
 * //       propertyName: "STRING_VALUE", // required
 * //       value: "<DataValue>",
 * //       areAllPropertyValuesReturned: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPropertiesCommandInput - {@link ListPropertiesCommandInput}
 * @returns {@link ListPropertiesCommandOutput}
 * @see {@link ListPropertiesCommandInput} for command's `input` shape.
 * @see {@link ListPropertiesCommandOutput} for command's `response` shape.
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
export class ListPropertiesCommand extends $Command<
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput,
  IoTTwinMakerClientResolvedConfig
> {
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
  constructor(readonly input: ListPropertiesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPropertiesCommandInput, ListPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "ListPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "ListProperties",
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
  private serialize(input: ListPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPropertiesCommandOutput> {
    return de_ListPropertiesCommand(output, context);
  }
}

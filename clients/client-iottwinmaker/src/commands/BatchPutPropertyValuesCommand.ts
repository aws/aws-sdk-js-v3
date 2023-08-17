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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { BatchPutPropertyValuesRequest, BatchPutPropertyValuesResponse } from "../models/models_0";
import { de_BatchPutPropertyValuesCommand, se_BatchPutPropertyValuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutPropertyValuesCommand}.
 */
export interface BatchPutPropertyValuesCommandInput extends BatchPutPropertyValuesRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutPropertyValuesCommand}.
 */
export interface BatchPutPropertyValuesCommandOutput extends BatchPutPropertyValuesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets values for multiple time series properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, BatchPutPropertyValuesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, BatchPutPropertyValuesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // BatchPutPropertyValuesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entries: [ // Entries // required
 *     { // PropertyValueEntry
 *       entityPropertyReference: { // EntityPropertyReference
 *         componentName: "STRING_VALUE",
 *         externalIdProperty: { // ExternalIdProperty
 *           "<keys>": "STRING_VALUE",
 *         },
 *         entityId: "STRING_VALUE",
 *         propertyName: "STRING_VALUE", // required
 *       },
 *       propertyValues: [ // PropertyValues
 *         { // PropertyValue
 *           timestamp: new Date("TIMESTAMP"),
 *           value: { // DataValue
 *             booleanValue: true || false,
 *             doubleValue: Number("double"),
 *             integerValue: Number("int"),
 *             longValue: Number("long"),
 *             stringValue: "STRING_VALUE",
 *             listValue: [ // DataValueList
 *               {
 *                 booleanValue: true || false,
 *                 doubleValue: Number("double"),
 *                 integerValue: Number("int"),
 *                 longValue: Number("long"),
 *                 stringValue: "STRING_VALUE",
 *                 listValue: [
 *                   "<DataValue>",
 *                 ],
 *                 mapValue: { // DataValueMap
 *                   "<keys>": "<DataValue>",
 *                 },
 *                 relationshipValue: { // RelationshipValue
 *                   targetEntityId: "STRING_VALUE",
 *                   targetComponentName: "STRING_VALUE",
 *                 },
 *                 expression: "STRING_VALUE",
 *               },
 *             ],
 *             mapValue: {
 *               "<keys>": "<DataValue>",
 *             },
 *             relationshipValue: {
 *               targetEntityId: "STRING_VALUE",
 *               targetComponentName: "STRING_VALUE",
 *             },
 *             expression: "STRING_VALUE",
 *           },
 *           time: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchPutPropertyValuesCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutPropertyValuesResponse
 * //   errorEntries: [ // ErrorEntries // required
 * //     { // BatchPutPropertyErrorEntry
 * //       errors: [ // Errors // required
 * //         { // BatchPutPropertyError
 * //           errorCode: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //           entry: { // PropertyValueEntry
 * //             entityPropertyReference: { // EntityPropertyReference
 * //               componentName: "STRING_VALUE",
 * //               externalIdProperty: { // ExternalIdProperty
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               entityId: "STRING_VALUE",
 * //               propertyName: "STRING_VALUE", // required
 * //             },
 * //             propertyValues: [ // PropertyValues
 * //               { // PropertyValue
 * //                 timestamp: new Date("TIMESTAMP"),
 * //                 value: { // DataValue
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   integerValue: Number("int"),
 * //                   longValue: Number("long"),
 * //                   stringValue: "STRING_VALUE",
 * //                   listValue: [ // DataValueList
 * //                     {
 * //                       booleanValue: true || false,
 * //                       doubleValue: Number("double"),
 * //                       integerValue: Number("int"),
 * //                       longValue: Number("long"),
 * //                       stringValue: "STRING_VALUE",
 * //                       listValue: [
 * //                         "<DataValue>",
 * //                       ],
 * //                       mapValue: { // DataValueMap
 * //                         "<keys>": "<DataValue>",
 * //                       },
 * //                       relationshipValue: { // RelationshipValue
 * //                         targetEntityId: "STRING_VALUE",
 * //                         targetComponentName: "STRING_VALUE",
 * //                       },
 * //                       expression: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   mapValue: {
 * //                     "<keys>": "<DataValue>",
 * //                   },
 * //                   relationshipValue: {
 * //                     targetEntityId: "STRING_VALUE",
 * //                     targetComponentName: "STRING_VALUE",
 * //                   },
 * //                   expression: "STRING_VALUE",
 * //                 },
 * //                 time: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutPropertyValuesCommandInput - {@link BatchPutPropertyValuesCommandInput}
 * @returns {@link BatchPutPropertyValuesCommandOutput}
 * @see {@link BatchPutPropertyValuesCommandInput} for command's `input` shape.
 * @see {@link BatchPutPropertyValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
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
export class BatchPutPropertyValuesCommand extends $Command<
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
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
  constructor(readonly input: BatchPutPropertyValuesCommandInput) {
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
  ): Handler<BatchPutPropertyValuesCommandInput, BatchPutPropertyValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutPropertyValuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "BatchPutPropertyValuesCommand";
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
  private serialize(input: BatchPutPropertyValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchPutPropertyValuesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutPropertyValuesCommandOutput> {
    return de_BatchPutPropertyValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

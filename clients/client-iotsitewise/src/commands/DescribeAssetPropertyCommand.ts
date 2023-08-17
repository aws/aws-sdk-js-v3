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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetPropertyRequest, DescribeAssetPropertyResponse } from "../models/models_0";
import { de_DescribeAssetPropertyCommand, se_DescribeAssetPropertyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetPropertyCommand}.
 */
export interface DescribeAssetPropertyCommandInput extends DescribeAssetPropertyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetPropertyCommand}.
 */
export interface DescribeAssetPropertyCommandOutput extends DescribeAssetPropertyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about an asset property.</p>
 *          <note>
 *             <p>When you call this operation for an attribute property, this response includes the
 *         default attribute value that you define in the asset model. If you update the default value
 *         in the model, this operation's response includes the new default value.</p>
 *          </note>
 *          <p>This operation doesn't return the value of the asset property. To get the value of an
 *       asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetPropertyRequest
 *   assetId: "STRING_VALUE", // required
 *   propertyId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetPropertyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetPropertyResponse
 * //   assetId: "STRING_VALUE", // required
 * //   assetName: "STRING_VALUE", // required
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetProperty: { // Property
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     alias: "STRING_VALUE",
 * //     notification: { // PropertyNotification
 * //       topic: "STRING_VALUE", // required
 * //       state: "ENABLED" || "DISABLED", // required
 * //     },
 * //     dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //     unit: "STRING_VALUE",
 * //     type: { // PropertyType
 * //       attribute: { // Attribute
 * //         defaultValue: "STRING_VALUE",
 * //       },
 * //       measurement: { // Measurement
 * //         processingConfig: { // MeasurementProcessingConfig
 * //           forwardingConfig: { // ForwardingConfig
 * //             state: "DISABLED" || "ENABLED", // required
 * //           },
 * //         },
 * //       },
 * //       transform: { // Transform
 * //         expression: "STRING_VALUE", // required
 * //         variables: [ // ExpressionVariables // required
 * //           { // ExpressionVariable
 * //             name: "STRING_VALUE", // required
 * //             value: { // VariableValue
 * //               propertyId: "STRING_VALUE", // required
 * //               hierarchyId: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         processingConfig: { // TransformProcessingConfig
 * //           computeLocation: "EDGE" || "CLOUD", // required
 * //           forwardingConfig: {
 * //             state: "DISABLED" || "ENABLED", // required
 * //           },
 * //         },
 * //       },
 * //       metric: { // Metric
 * //         expression: "STRING_VALUE", // required
 * //         variables: [ // required
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             value: {
 * //               propertyId: "STRING_VALUE", // required
 * //               hierarchyId: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         window: { // MetricWindow
 * //           tumbling: { // TumblingWindow
 * //             interval: "STRING_VALUE", // required
 * //             offset: "STRING_VALUE",
 * //           },
 * //         },
 * //         processingConfig: { // MetricProcessingConfig
 * //           computeLocation: "EDGE" || "CLOUD", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   compositeModel: { // CompositeModelProperty
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     assetProperty: {
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       alias: "STRING_VALUE",
 * //       notification: {
 * //         topic: "STRING_VALUE", // required
 * //         state: "ENABLED" || "DISABLED", // required
 * //       },
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //       unit: "STRING_VALUE",
 * //       type: {
 * //         attribute: {
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //         measurement: {
 * //           processingConfig: {
 * //             forwardingConfig: {
 * //               state: "DISABLED" || "ENABLED", // required
 * //             },
 * //           },
 * //         },
 * //         transform: {
 * //           expression: "STRING_VALUE", // required
 * //           variables: [ // required
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: {
 * //                 propertyId: "STRING_VALUE", // required
 * //                 hierarchyId: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           processingConfig: {
 * //             computeLocation: "EDGE" || "CLOUD", // required
 * //             forwardingConfig: {
 * //               state: "DISABLED" || "ENABLED", // required
 * //             },
 * //           },
 * //         },
 * //         metric: {
 * //           expression: "STRING_VALUE", // required
 * //           variables: [ // required
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: {
 * //                 propertyId: "STRING_VALUE", // required
 * //                 hierarchyId: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           window: {
 * //             tumbling: {
 * //               interval: "STRING_VALUE", // required
 * //               offset: "STRING_VALUE",
 * //             },
 * //           },
 * //           processingConfig: {
 * //             computeLocation: "EDGE" || "CLOUD", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     id: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssetPropertyCommandInput - {@link DescribeAssetPropertyCommandInput}
 * @returns {@link DescribeAssetPropertyCommandOutput}
 * @see {@link DescribeAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class DescribeAssetPropertyCommand extends $Command<
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: DescribeAssetPropertyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssetPropertyCommandInput, DescribeAssetPropertyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssetPropertyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeAssetPropertyCommand";
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
  private serialize(input: DescribeAssetPropertyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssetPropertyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssetPropertyCommandOutput> {
    return de_DescribeAssetPropertyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

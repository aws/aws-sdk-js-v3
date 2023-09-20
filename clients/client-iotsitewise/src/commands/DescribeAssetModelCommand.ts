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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetModelRequest, DescribeAssetModelResponse } from "../models/models_0";
import { de_DescribeAssetModelCommand, se_DescribeAssetModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetModelCommand}.
 */
export interface DescribeAssetModelCommandInput extends DescribeAssetModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetModelCommand}.
 */
export interface DescribeAssetModelCommandOutput extends DescribeAssetModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about an asset model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   excludeProperties: true || false,
 * };
 * const command = new DescribeAssetModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetModelResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetModelArn: "STRING_VALUE", // required
 * //   assetModelName: "STRING_VALUE", // required
 * //   assetModelDescription: "STRING_VALUE", // required
 * //   assetModelProperties: [ // AssetModelProperties // required
 * //     { // AssetModelProperty
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //       dataTypeSpec: "STRING_VALUE",
 * //       unit: "STRING_VALUE",
 * //       type: { // PropertyType
 * //         attribute: { // Attribute
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //         measurement: { // Measurement
 * //           processingConfig: { // MeasurementProcessingConfig
 * //             forwardingConfig: { // ForwardingConfig
 * //               state: "DISABLED" || "ENABLED", // required
 * //             },
 * //           },
 * //         },
 * //         transform: { // Transform
 * //           expression: "STRING_VALUE", // required
 * //           variables: [ // ExpressionVariables // required
 * //             { // ExpressionVariable
 * //               name: "STRING_VALUE", // required
 * //               value: { // VariableValue
 * //                 propertyId: "STRING_VALUE", // required
 * //                 hierarchyId: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           processingConfig: { // TransformProcessingConfig
 * //             computeLocation: "EDGE" || "CLOUD", // required
 * //             forwardingConfig: {
 * //               state: "DISABLED" || "ENABLED", // required
 * //             },
 * //           },
 * //         },
 * //         metric: { // Metric
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
 * //           window: { // MetricWindow
 * //             tumbling: { // TumblingWindow
 * //               interval: "STRING_VALUE", // required
 * //               offset: "STRING_VALUE",
 * //             },
 * //           },
 * //           processingConfig: { // MetricProcessingConfig
 * //             computeLocation: "EDGE" || "CLOUD", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   assetModelHierarchies: [ // AssetModelHierarchies // required
 * //     { // AssetModelHierarchy
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       childAssetModelId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   assetModelCompositeModels: [ // AssetModelCompositeModels
 * //     { // AssetModelCompositeModel
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       properties: [
 * //         {
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE", // required
 * //           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //           dataTypeSpec: "STRING_VALUE",
 * //           unit: "STRING_VALUE",
 * //           type: {
 * //             attribute: {
 * //               defaultValue: "STRING_VALUE",
 * //             },
 * //             measurement: {
 * //               processingConfig: {
 * //                 forwardingConfig: {
 * //                   state: "DISABLED" || "ENABLED", // required
 * //                 },
 * //               },
 * //             },
 * //             transform: {
 * //               expression: "STRING_VALUE", // required
 * //               variables: [ // required
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {
 * //                     propertyId: "STRING_VALUE", // required
 * //                     hierarchyId: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               processingConfig: {
 * //                 computeLocation: "EDGE" || "CLOUD", // required
 * //                 forwardingConfig: {
 * //                   state: "DISABLED" || "ENABLED", // required
 * //                 },
 * //               },
 * //             },
 * //             metric: {
 * //               expression: "STRING_VALUE", // required
 * //               variables: [ // required
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {
 * //                     propertyId: "STRING_VALUE", // required
 * //                     hierarchyId: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               window: {
 * //                 tumbling: {
 * //                   interval: "STRING_VALUE", // required
 * //                   offset: "STRING_VALUE",
 * //                 },
 * //               },
 * //               processingConfig: {
 * //                 computeLocation: "EDGE" || "CLOUD", // required
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetModelCreationDate: new Date("TIMESTAMP"), // required
 * //   assetModelLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   assetModelStatus: { // AssetModelStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "PROPAGATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssetModelCommandInput - {@link DescribeAssetModelCommandInput}
 * @returns {@link DescribeAssetModelCommandOutput}
 * @see {@link DescribeAssetModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetModelCommandOutput} for command's `response` shape.
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
export class DescribeAssetModelCommand extends $Command<
  DescribeAssetModelCommandInput,
  DescribeAssetModelCommandOutput,
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
  constructor(readonly input: DescribeAssetModelCommandInput) {
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
  ): Handler<DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssetModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeAssetModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTSiteWise",
        operation: "DescribeAssetModel",
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
  private serialize(input: DescribeAssetModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssetModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssetModelCommandOutput> {
    return de_DescribeAssetModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

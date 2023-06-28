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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetMonitoringSubscriptionRequest, GetMonitoringSubscriptionResult } from "../models/models_1";
import { de_GetMonitoringSubscriptionCommand, se_GetMonitoringSubscriptionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMonitoringSubscriptionCommand}.
 */
export interface GetMonitoringSubscriptionCommandInput extends GetMonitoringSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link GetMonitoringSubscriptionCommand}.
 */
export interface GetMonitoringSubscriptionCommandOutput extends GetMonitoringSubscriptionResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about whether additional CloudWatch metrics are enabled for the
 * 			specified CloudFront distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetMonitoringSubscriptionRequest
 *   DistributionId: "STRING_VALUE", // required
 * };
 * const command = new GetMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitoringSubscriptionResult
 * //   MonitoringSubscription: { // MonitoringSubscription
 * //     RealtimeMetricsSubscriptionConfig: { // RealtimeMetricsSubscriptionConfig
 * //       RealtimeMetricsSubscriptionStatus: "Enabled" || "Disabled", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMonitoringSubscriptionCommandInput - {@link GetMonitoringSubscriptionCommandInput}
 * @returns {@link GetMonitoringSubscriptionCommandOutput}
 * @see {@link GetMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetMonitoringSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link NoSuchMonitoringSubscription} (client fault)
 *  <p>A monitoring subscription does not exist for the specified distribution.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetMonitoringSubscriptionCommand extends $Command<
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: GetMonitoringSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMonitoringSubscriptionCommandInput, GetMonitoringSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMonitoringSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetMonitoringSubscriptionCommand";
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
  private serialize(input: GetMonitoringSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMonitoringSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMonitoringSubscriptionCommandOutput> {
    return de_GetMonitoringSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
import { DeleteMonitoringSubscriptionRequest, DeleteMonitoringSubscriptionResult } from "../models/models_1";
import {
  de_DeleteMonitoringSubscriptionCommand,
  se_DeleteMonitoringSubscriptionCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMonitoringSubscriptionCommand}.
 */
export interface DeleteMonitoringSubscriptionCommandInput extends DeleteMonitoringSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMonitoringSubscriptionCommand}.
 */
export interface DeleteMonitoringSubscriptionCommandOutput
  extends DeleteMonitoringSubscriptionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disables additional CloudWatch metrics for the specified CloudFront
 * 			distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteMonitoringSubscriptionRequest
 *   DistributionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitoringSubscriptionCommandInput - {@link DeleteMonitoringSubscriptionCommandInput}
 * @returns {@link DeleteMonitoringSubscriptionCommandOutput}
 * @see {@link DeleteMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitoringSubscriptionCommandOutput} for command's `response` shape.
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
export class DeleteMonitoringSubscriptionCommand extends $Command<
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
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
  constructor(readonly input: DeleteMonitoringSubscriptionCommandInput) {
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
  ): Handler<DeleteMonitoringSubscriptionCommandInput, DeleteMonitoringSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMonitoringSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteMonitoringSubscriptionCommand";
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
  private serialize(input: DeleteMonitoringSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMonitoringSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteMonitoringSubscriptionCommandOutput> {
    return de_DeleteMonitoringSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

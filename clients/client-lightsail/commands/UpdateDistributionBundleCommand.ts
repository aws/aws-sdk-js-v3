import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDistributionBundleRequest, UpdateDistributionBundleResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateDistributionBundleCommand,
  serializeAws_json1_1UpdateDistributionBundleCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateDistributionBundleCommandInput = UpdateDistributionBundleRequest;
export type UpdateDistributionBundleCommandOutput = UpdateDistributionBundleResult & __MetadataBearer;

/**
 * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 *          <p>Update your distribution's bundle if your distribution is going over its monthly network
 *       transfer quota and is incurring an overage fee.</p>
 *          <p>You can update your distribution's bundle only one time within your monthly AWS billing
 *       cycle. To determine if you can update your distribution's bundle, use the
 *         <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the
 *       result will indicate whether you can currently update your distribution's bundle.</p>
 */
export class UpdateDistributionBundleCommand extends $Command<
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDistributionBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDistributionBundleCommandInput, UpdateDistributionBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateDistributionBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionBundleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionBundleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDistributionBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDistributionBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDistributionBundleCommandOutput> {
    return deserializeAws_json1_1UpdateDistributionBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

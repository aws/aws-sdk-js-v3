import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetDistributionRequest, GetDistributionResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetDistributionCommand,
  serializeAws_restXmlGetDistributionCommand,
} from "../protocols/Aws_restXml";
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

export type GetDistributionCommandInput = GetDistributionRequest;
export type GetDistributionCommandOutput = GetDistributionResult & __MetadataBearer;

/**
 * <p>Get the information about a distribution.</p>
 */
export class GetDistributionCommand extends $Command<
  GetDistributionCommandInput,
  GetDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionCommandInput) {
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
  ): Handler<GetDistributionCommandInput, GetDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDistributionCommandOutput> {
    return deserializeAws_restXmlGetDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

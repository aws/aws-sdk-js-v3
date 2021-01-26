import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDistributionCommand,
  serializeAws_json1_1CreateDistributionCommand,
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

export type CreateDistributionCommandInput = CreateDistributionRequest;
export type CreateDistributionCommandOutput = CreateDistributionResult & __MetadataBearer;

/**
 * <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>A distribution is a globally distributed network of caching servers that improve the
 *       performance of your website or web application hosted on a Lightsail instance. For more
 *       information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
 */
export class CreateDistributionCommand extends $Command<
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDistributionCommandInput) {
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
  ): Handler<CreateDistributionCommandInput, CreateDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDistributionCommandOutput> {
    return deserializeAws_json1_1CreateDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { EnableAddOnRequest, EnableAddOnResult } from "../models/models_0";
import {
  deserializeAws_json1_1EnableAddOnCommand,
  serializeAws_json1_1EnableAddOnCommand,
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

export type EnableAddOnCommandInput = EnableAddOnRequest;
export type EnableAddOnCommandOutput = EnableAddOnResult & __MetadataBearer;

/**
 * <p>Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see
 *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 */
export class EnableAddOnCommand extends $Command<
  EnableAddOnCommandInput,
  EnableAddOnCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableAddOnCommandInput) {
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
  ): Handler<EnableAddOnCommandInput, EnableAddOnCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "EnableAddOnCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableAddOnRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableAddOnResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableAddOnCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableAddOnCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableAddOnCommandOutput> {
    return deserializeAws_json1_1EnableAddOnCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

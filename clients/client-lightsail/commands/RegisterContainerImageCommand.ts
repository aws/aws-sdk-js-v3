import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RegisterContainerImageRequest, RegisterContainerImageResult } from "../models/models_1";
import {
  deserializeAws_json1_1RegisterContainerImageCommand,
  serializeAws_json1_1RegisterContainerImageCommand,
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

export type RegisterContainerImageCommandInput = RegisterContainerImageRequest;
export type RegisterContainerImageCommandOutput = RegisterContainerImageResult & __MetadataBearer;

/**
 * <p>Registers a container image to your Amazon Lightsail container service.</p>
 *
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="amazon-lightsail-pushing-container-images">Pushing and
 *           managing container images on your Amazon Lightsail container services</a> in the
 *           <i>Lightsail Dev Guide</i>.</p>
 *          </note>
 */
export class RegisterContainerImageCommand extends $Command<
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterContainerImageCommandInput) {
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
  ): Handler<RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "RegisterContainerImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterContainerImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterContainerImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterContainerImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterContainerImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterContainerImageCommandOutput> {
    return deserializeAws_json1_1RegisterContainerImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

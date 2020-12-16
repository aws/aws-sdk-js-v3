import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateContainerServiceRequest, UpdateContainerServiceResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateContainerServiceCommand,
  serializeAws_json1_1UpdateContainerServiceCommand,
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

export type UpdateContainerServiceCommandInput = UpdateContainerServiceRequest;
export type UpdateContainerServiceCommandOutput = UpdateContainerServiceResult & __MetadataBearer;

/**
 * <p>Updates the configuration of your Amazon Lightsail container service, such as its power,
 *       scale, and public domain names.</p>
 */
export class UpdateContainerServiceCommand extends $Command<
  UpdateContainerServiceCommandInput,
  UpdateContainerServiceCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateContainerServiceCommandInput) {
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
  ): Handler<UpdateContainerServiceCommandInput, UpdateContainerServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateContainerServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContainerServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateContainerServiceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContainerServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateContainerServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContainerServiceCommandOutput> {
    return deserializeAws_json1_1UpdateContainerServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

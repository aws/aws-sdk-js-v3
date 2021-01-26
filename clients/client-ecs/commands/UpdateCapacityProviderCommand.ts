import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateCapacityProviderRequest, UpdateCapacityProviderResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCapacityProviderCommand,
  serializeAws_json1_1UpdateCapacityProviderCommand,
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

export type UpdateCapacityProviderCommandInput = UpdateCapacityProviderRequest;
export type UpdateCapacityProviderCommandOutput = UpdateCapacityProviderResponse & __MetadataBearer;

/**
 * <p>Modifies the parameters for a capacity provider.</p>
 */
export class UpdateCapacityProviderCommand extends $Command<
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCapacityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCapacityProviderCommandInput, UpdateCapacityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateCapacityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCapacityProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCapacityProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCapacityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCapacityProviderCommandOutput> {
    return deserializeAws_json1_1UpdateCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

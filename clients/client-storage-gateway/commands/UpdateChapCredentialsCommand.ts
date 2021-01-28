import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateChapCredentialsInput, UpdateChapCredentialsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateChapCredentialsCommand,
  serializeAws_json1_1UpdateChapCredentialsCommand,
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

export type UpdateChapCredentialsCommandInput = UpdateChapCredentialsInput;
export type UpdateChapCredentialsCommandOutput = UpdateChapCredentialsOutput & __MetadataBearer;

/**
 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
 *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
 *          added security, you might use it. This operation is supported in the volume and tape
 *          gateway types.</p>
 *
 *          <important>
 *             <p>When you update CHAP credentials, all existing connections on the target are closed
 *             and initiators must reconnect with the new credentials.</p>
 *          </important>
 */
export class UpdateChapCredentialsCommand extends $Command<
  UpdateChapCredentialsCommandInput,
  UpdateChapCredentialsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateChapCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateChapCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateChapCredentialsInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateChapCredentialsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateChapCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateChapCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChapCredentialsCommandOutput> {
    return deserializeAws_json1_1UpdateChapCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

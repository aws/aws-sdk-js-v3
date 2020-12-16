import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RevokeGrantRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RevokeGrantCommand,
  serializeAws_json1_1RevokeGrantCommand,
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

export type RevokeGrantCommandInput = RevokeGrantRequest;
export type RevokeGrantCommandOutput = __MetadataBearer;

/**
 * <p>Revokes the specified grant for the specified customer master key (CMK). You can revoke a
 *       grant to actively deny operations that depend on it.</p>
 *          <p>To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 */
export class RevokeGrantCommand extends $Command<
  RevokeGrantCommandInput,
  RevokeGrantCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeGrantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeGrantCommandInput, RevokeGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "RevokeGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeGrantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RevokeGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeGrantCommandOutput> {
    return deserializeAws_json1_1RevokeGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

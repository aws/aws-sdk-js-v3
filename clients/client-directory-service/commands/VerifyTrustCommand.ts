import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { VerifyTrustRequest, VerifyTrustResult } from "../models/models_0";
import {
  deserializeAws_json1_1VerifyTrustCommand,
  serializeAws_json1_1VerifyTrustCommand,
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

export type VerifyTrustCommandInput = VerifyTrustRequest;
export type VerifyTrustCommandOutput = VerifyTrustResult & __MetadataBearer;

/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p>
 *          <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
 */
export class VerifyTrustCommand extends $Command<
  VerifyTrustCommandInput,
  VerifyTrustCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyTrustCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyTrustCommandInput, VerifyTrustCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "VerifyTrustCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyTrustRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifyTrustResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyTrustCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1VerifyTrustCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyTrustCommandOutput> {
    return deserializeAws_json1_1VerifyTrustCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

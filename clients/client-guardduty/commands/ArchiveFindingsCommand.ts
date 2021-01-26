import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ArchiveFindingsRequest, ArchiveFindingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ArchiveFindingsCommand,
  serializeAws_restJson1ArchiveFindingsCommand,
} from "../protocols/Aws_restJson1";
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

export type ArchiveFindingsCommandInput = ArchiveFindingsRequest;
export type ArchiveFindingsCommandOutput = ArchiveFindingsResponse & __MetadataBearer;

/**
 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p>
 *          <note>
 *             <p>Only the administrator account can archive findings. Member accounts don't have permission to
 *         archive findings from their accounts.</p>
 *          </note>
 */
export class ArchiveFindingsCommand extends $Command<
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ArchiveFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "ArchiveFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ArchiveFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ArchiveFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ArchiveFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ArchiveFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ArchiveFindingsCommandOutput> {
    return deserializeAws_restJson1ArchiveFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

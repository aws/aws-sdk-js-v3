import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateFindingsRequest, UpdateFindingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateFindingsCommand,
  serializeAws_restJson1UpdateFindingsCommand,
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

export type UpdateFindingsCommandInput = UpdateFindingsRequest;
export type UpdateFindingsCommandOutput = UpdateFindingsResponse & __MetadataBearer;

/**
 * <p>
 *             <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use
 *             <code>BatchUpdateFindings</code>.</p>
 *          <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated
 *          findings that the filter attributes specify. Any member account that can view the finding
 *          also sees the update to the finding.</p>
 */
export class UpdateFindingsCommand extends $Command<
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFindingsCommandInput, UpdateFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFindingsCommandOutput> {
    return deserializeAws_restJson1UpdateFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

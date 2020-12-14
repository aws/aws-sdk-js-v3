import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { GetBlockRequest, GetBlockResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBlockCommand,
  serializeAws_restJson1GetBlockCommand,
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

export type GetBlockCommandInput = GetBlockRequest;
export type GetBlockCommandOutput = GetBlockResponse & __MetadataBearer;

/**
 * <p>Returns a block object at a specified address in a journal. Also returns a proof of the
 *          specified block for verification if <code>DigestTipAddress</code> is provided.</p>
 *          <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the
 *             <i>Amazon QLDB Developer Guide</i>.</p>
 *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
 *             <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>If no block exists with the specified address, then throws
 *             <code>InvalidParameterException</code>.</p>
 */
export class GetBlockCommand extends $Command<GetBlockCommandInput, GetBlockCommandOutput, QLDBClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBlockCommandInput, GetBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "GetBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBlockResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlockCommandOutput> {
    return deserializeAws_restJson1GetBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

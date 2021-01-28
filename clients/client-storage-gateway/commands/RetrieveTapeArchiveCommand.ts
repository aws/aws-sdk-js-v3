import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput } from "../models/models_0";
import {
  deserializeAws_json1_1RetrieveTapeArchiveCommand,
  serializeAws_json1_1RetrieveTapeArchiveCommand,
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

export type RetrieveTapeArchiveCommandInput = RetrieveTapeArchiveInput;
export type RetrieveTapeArchiveCommandOutput = RetrieveTapeArchiveOutput & __MetadataBearer;

/**
 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 *          that is, archive. This operation is only supported in the tape gateway type.</p>
 *
 *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 *          another gateway. You must archive the tape again before you can retrieve it to another
 *          gateway. This operation is only supported in the tape gateway type.</p>
 */
export class RetrieveTapeArchiveCommand extends $Command<
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetrieveTapeArchiveCommandInput) {
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
  ): Handler<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "RetrieveTapeArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetrieveTapeArchiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: RetrieveTapeArchiveOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetrieveTapeArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetrieveTapeArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveTapeArchiveCommandOutput> {
    return deserializeAws_json1_1RetrieveTapeArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

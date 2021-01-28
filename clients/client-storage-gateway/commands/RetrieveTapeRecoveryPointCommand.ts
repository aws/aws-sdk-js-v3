import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointOutput } from "../models/models_0";
import {
  deserializeAws_json1_1RetrieveTapeRecoveryPointCommand,
  serializeAws_json1_1RetrieveTapeRecoveryPointCommand,
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

export type RetrieveTapeRecoveryPointCommandInput = RetrieveTapeRecoveryPointInput;
export type RetrieveTapeRecoveryPointCommandOutput = RetrieveTapeRecoveryPointOutput & __MetadataBearer;

/**
 * <p>Retrieves the recovery point for the specified virtual tape. This operation is only
 *          supported in the tape gateway type.</p>
 *
 *          <p>A recovery point is a point in time view of a virtual tape at which all the data on the
 *          tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be
 *          recovered to a new gateway.</p>
 *
 *          <note>
 *             <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is
 *             read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
 *             for retrieving recovery points.</p>
 *          </note>
 */
export class RetrieveTapeRecoveryPointCommand extends $Command<
  RetrieveTapeRecoveryPointCommandInput,
  RetrieveTapeRecoveryPointCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetrieveTapeRecoveryPointCommandInput) {
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
  ): Handler<RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "RetrieveTapeRecoveryPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetrieveTapeRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: RetrieveTapeRecoveryPointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetrieveTapeRecoveryPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetrieveTapeRecoveryPointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RetrieveTapeRecoveryPointCommandOutput> {
    return deserializeAws_json1_1RetrieveTapeRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

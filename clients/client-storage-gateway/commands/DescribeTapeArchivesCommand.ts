import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTapeArchivesCommand,
  serializeAws_json1_1DescribeTapeArchivesCommand,
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

export type DescribeTapeArchivesCommandInput = DescribeTapeArchivesInput;
export type DescribeTapeArchivesCommandOutput = DescribeTapeArchivesOutput & __MetadataBearer;

/**
 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a
 *          description of all virtual tapes found in the VTS associated with your account.</p>
 */
export class DescribeTapeArchivesCommand extends $Command<
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTapeArchivesCommandInput) {
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
  ): Handler<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeTapeArchivesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTapeArchivesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTapeArchivesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTapeArchivesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTapeArchivesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTapeArchivesCommandOutput> {
    return deserializeAws_json1_1DescribeTapeArchivesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTapeWithBarcodeCommand,
  serializeAws_json1_1CreateTapeWithBarcodeCommand,
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

export type CreateTapeWithBarcodeCommandInput = CreateTapeWithBarcodeInput;
export type CreateTapeWithBarcodeCommandOutput = CreateTapeWithBarcodeOutput & __MetadataBearer;

/**
 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and
 *          then archive the tape. A barcode is unique and cannot be reused if it has already been used
 *          on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
 *          in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a virtual tape.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 */
export class CreateTapeWithBarcodeCommand extends $Command<
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTapeWithBarcodeCommandInput) {
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
  ): Handler<CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateTapeWithBarcodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTapeWithBarcodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTapeWithBarcodeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTapeWithBarcodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTapeWithBarcodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTapeWithBarcodeCommandOutput> {
    return deserializeAws_json1_1CreateTapeWithBarcodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

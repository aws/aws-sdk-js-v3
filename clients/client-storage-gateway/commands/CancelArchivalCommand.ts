import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CancelArchivalInput, CancelArchivalOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CancelArchivalCommand,
  serializeAws_json1_1CancelArchivalCommand,
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

export type CancelArchivalCommandInput = CancelArchivalInput;
export type CancelArchivalCommandOutput = CancelArchivalOutput & __MetadataBearer;

/**
 * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving
 *          process is initiated. This operation is only supported in the tape gateway type.</p>
 */
export class CancelArchivalCommand extends $Command<
  CancelArchivalCommandInput,
  CancelArchivalCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelArchivalCommandInput) {
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
  ): Handler<CancelArchivalCommandInput, CancelArchivalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CancelArchivalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelArchivalInput.filterSensitiveLog,
      outputFilterSensitiveLog: CancelArchivalOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelArchivalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelArchivalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelArchivalCommandOutput> {
    return deserializeAws_json1_1CancelArchivalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

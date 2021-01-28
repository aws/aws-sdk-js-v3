import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ImportPlaybackKeyPairRequest, ImportPlaybackKeyPairResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ImportPlaybackKeyPairCommand,
  serializeAws_restJson1ImportPlaybackKeyPairCommand,
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

export type ImportPlaybackKeyPairCommandInput = ImportPlaybackKeyPairRequest;
export type ImportPlaybackKeyPairCommandOutput = ImportPlaybackKeyPairResponse & __MetadataBearer;

/**
 * <p>Imports the public portion of a new key pair and returns its <code>arn</code> and
 *         <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer
 *       authorization tokens, to grant viewers access to authorized channels.</p>
 */
export class ImportPlaybackKeyPairCommand extends $Command<
  ImportPlaybackKeyPairCommandInput,
  ImportPlaybackKeyPairCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportPlaybackKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportPlaybackKeyPairCommandInput, ImportPlaybackKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "ImportPlaybackKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportPlaybackKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportPlaybackKeyPairResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportPlaybackKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportPlaybackKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportPlaybackKeyPairCommandOutput> {
    return deserializeAws_restJson1ImportPlaybackKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

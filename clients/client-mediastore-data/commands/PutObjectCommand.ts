import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { PutObjectRequest, PutObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutObjectCommand,
  serializeAws_restJson1PutObjectCommand,
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

export type PutObjectCommandInput = Omit<PutObjectRequest, "Body"> & {
  Body: PutObjectRequest["Body"] | string | Uint8Array | Buffer;
};
export type PutObjectCommandOutput = PutObjectResponse & __MetadataBearer;

/**
 * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB.</p>
 */
export class PutObjectCommand extends $Command<
  PutObjectCommandInput,
  PutObjectCommandOutput,
  MediaStoreDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutObjectCommandInput, PutObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreDataClient";
    const commandName = "PutObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectCommandOutput> {
    return deserializeAws_restJson1PutObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

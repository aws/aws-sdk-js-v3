import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { RotateIngestEndpointCredentialsRequest, RotateIngestEndpointCredentialsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RotateIngestEndpointCredentialsCommand,
  serializeAws_restJson1RotateIngestEndpointCredentialsCommand,
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

export interface RotateIngestEndpointCredentialsCommandInput extends RotateIngestEndpointCredentialsRequest {}
export interface RotateIngestEndpointCredentialsCommandOutput
  extends RotateIngestEndpointCredentialsResponse,
    __MetadataBearer {}

/**
 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateIngestEndpointCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateIngestEndpointCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateIngestEndpointCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateIngestEndpointCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateIngestEndpointCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RotateIngestEndpointCredentialsCommand extends $Command<
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RotateIngestEndpointCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateIngestEndpointCredentialsCommandInput, RotateIngestEndpointCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "RotateIngestEndpointCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateIngestEndpointCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RotateIngestEndpointCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RotateIngestEndpointCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RotateIngestEndpointCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RotateIngestEndpointCredentialsCommandOutput> {
    return deserializeAws_restJson1RotateIngestEndpointCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

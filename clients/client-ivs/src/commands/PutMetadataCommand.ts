import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { PutMetadataRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutMetadataCommand,
  serializeAws_restJson1PutMetadataCommand,
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

export interface PutMetadataCommandInput extends PutMetadataRequest {}
export interface PutMetadataCommandOutput extends __MetadataBearer {}

/**
 * <p>Inserts metadata into the active stream of the specified channel. A maximum of 5 requests
 *       per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not
 *       sufficient for your needs, we recommend batching your data into a single PutMetadata call.)
 *
 *       Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata
 *
 *         within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, PutMetadataCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, PutMetadataCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new PutMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetadataCommandInput} for command's `input` shape.
 * @see {@link PutMetadataCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutMetadataCommand extends $Command<
  PutMetadataCommandInput,
  PutMetadataCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMetadataCommandInput) {
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
  ): Handler<PutMetadataCommandInput, PutMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "PutMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetadataCommandOutput> {
    return deserializeAws_restJson1PutMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

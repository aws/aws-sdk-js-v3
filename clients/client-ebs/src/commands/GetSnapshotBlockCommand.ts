import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { GetSnapshotBlockRequest, GetSnapshotBlockResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSnapshotBlockCommand,
  serializeAws_restJson1GetSnapshotBlockCommand,
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

export interface GetSnapshotBlockCommandInput extends GetSnapshotBlockRequest {}
export interface GetSnapshotBlockCommandOutput extends GetSnapshotBlockResponse, __MetadataBearer {}

/**
 * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, GetSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, GetSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new GetSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSnapshotBlockCommand extends $Command<
  GetSnapshotBlockCommandInput,
  GetSnapshotBlockCommandOutput,
  EBSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSnapshotBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "GetSnapshotBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSnapshotBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSnapshotBlockResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSnapshotBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSnapshotBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnapshotBlockCommandOutput> {
    return deserializeAws_restJson1GetSnapshotBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

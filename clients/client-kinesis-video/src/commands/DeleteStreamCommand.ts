// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DeleteStreamInput,
  DeleteStreamInputFilterSensitiveLog,
  DeleteStreamOutput,
  DeleteStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteStreamCommand,
  serializeAws_restJson1DeleteStreamCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteStreamCommandInput extends DeleteStreamInput {}
export interface DeleteStreamCommandOutput extends DeleteStreamOutput, __MetadataBearer {}

/**
 * <p>Deletes a Kinesis video stream and the data contained in the stream. </p>
 *          <p>This method marks the stream for deletion, and makes the data in the stream
 *             inaccessible immediately.</p>
 *          <p> </p>
 *          <p> To ensure that you have the latest version of the stream before deleting it, you
 *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
 *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
 *             latest stream version, use the <code>DescribeStream</code> API. </p>
 *          <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code>
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class DeleteStreamCommand extends $Command<
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteStreamCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DeleteStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStreamCommandOutput> {
    return deserializeAws_restJson1DeleteStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

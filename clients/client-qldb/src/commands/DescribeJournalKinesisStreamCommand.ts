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

import {
  DescribeJournalKinesisStreamRequest,
  DescribeJournalKinesisStreamRequestFilterSensitiveLog,
  DescribeJournalKinesisStreamResponse,
  DescribeJournalKinesisStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJournalKinesisStreamCommand,
  serializeAws_restJson1DescribeJournalKinesisStreamCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface DescribeJournalKinesisStreamCommandInput extends DescribeJournalKinesisStreamRequest {}
export interface DescribeJournalKinesisStreamCommandOutput
  extends DescribeJournalKinesisStreamResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about a given Amazon QLDB journal stream. The output
 *          includes the Amazon Resource Name (ARN), stream name, current status, creation time, and
 *          the parameters of the original stream creation request.</p>
 *          <p>This action does not return any expired journal streams. For more information, see
 *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DescribeJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class DescribeJournalKinesisStreamCommand extends $Command<
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
  QLDBClientResolvedConfig
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

  constructor(readonly input: DescribeJournalKinesisStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJournalKinesisStreamCommandInput, DescribeJournalKinesisStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJournalKinesisStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "DescribeJournalKinesisStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJournalKinesisStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeJournalKinesisStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJournalKinesisStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJournalKinesisStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeJournalKinesisStreamCommandOutput> {
    return deserializeAws_restJson1DescribeJournalKinesisStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

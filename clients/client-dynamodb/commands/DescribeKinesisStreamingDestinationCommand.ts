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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import {
  DescribeKinesisStreamingDestinationInput,
  DescribeKinesisStreamingDestinationOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand,
  serializeAws_json1_0DescribeKinesisStreamingDestinationCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeKinesisStreamingDestinationCommandInput extends DescribeKinesisStreamingDestinationInput {}
export interface DescribeKinesisStreamingDestinationCommandOutput
  extends DescribeKinesisStreamingDestinationOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about the status of Kinesis streaming.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribeKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeKinesisStreamingDestinationCommand extends $Command<
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeKinesisStreamingDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeKinesisStreamingDestinationCommandInput, DescribeKinesisStreamingDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeKinesisStreamingDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeKinesisStreamingDestinationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeKinesisStreamingDestinationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeKinesisStreamingDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeKinesisStreamingDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeKinesisStreamingDestinationCommandOutput> {
    return deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

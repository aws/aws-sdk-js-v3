import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTableInput, DescribeTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeTableCommand,
  serializeAws_json1_0DescribeTableCommand,
} from "../protocols/Aws_json1_0";
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

export type DescribeTableCommandInput = DescribeTableInput;
export type DescribeTableCommandOutput = DescribeTableOutput & __MetadataBearer;

/**
 * <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p>
 *          <note>
 *             <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might
 *         return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually
 *         consistent query, and the metadata for your table might not be available at that moment.
 *         Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p>
 *          </note>
 */
export class DescribeTableCommand extends $Command<
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTableCommandInput) {
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
  ): Handler<DescribeTableCommandInput, DescribeTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTableOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTableCommandOutput> {
    return deserializeAws_json1_0DescribeTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

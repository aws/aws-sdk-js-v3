import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeGlobalTableInput, DescribeGlobalTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeGlobalTableCommand,
  serializeAws_json1_0DescribeGlobalTableCommand,
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

export type DescribeGlobalTableCommandInput = DescribeGlobalTableInput;
export type DescribeGlobalTableCommandOutput = DescribeGlobalTableOutput & __MetadataBearer;

/**
 * <p>Returns information about the specified global table.</p>
 *           <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.
 *                    If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead.</p>
 *          </note>
 */
export class DescribeGlobalTableCommand extends $Command<
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGlobalTableCommandInput) {
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
  ): Handler<DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeGlobalTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalTableInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalTableOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGlobalTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeGlobalTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalTableCommandOutput> {
    return deserializeAws_json1_0DescribeGlobalTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

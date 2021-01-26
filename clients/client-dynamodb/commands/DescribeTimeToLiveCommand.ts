import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeTimeToLiveCommand,
  serializeAws_json1_0DescribeTimeToLiveCommand,
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

export type DescribeTimeToLiveCommandInput = DescribeTimeToLiveInput;
export type DescribeTimeToLiveCommandOutput = DescribeTimeToLiveOutput & __MetadataBearer;

/**
 * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
 */
export class DescribeTimeToLiveCommand extends $Command<
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTimeToLiveCommandInput) {
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
  ): Handler<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeTimeToLiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTimeToLiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTimeToLiveOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTimeToLiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeTimeToLiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTimeToLiveCommandOutput> {
    return deserializeAws_json1_0DescribeTimeToLiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

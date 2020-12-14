import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { TestEventPatternRequest, TestEventPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1TestEventPatternCommand,
  serializeAws_json1_1TestEventPatternCommand,
} from "../protocols/Aws_json1_1";
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

export type TestEventPatternCommandInput = TestEventPatternRequest;
export type TestEventPatternCommandOutput = TestEventPatternResponse & __MetadataBearer;

/**
 * <p>Tests whether the specified event pattern matches the provided event.</p>
 *         <p>Most services in AWS treat : or / as the same character in Amazon Resource Names
 *             (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to
 *             use the correct ARN characters when creating event patterns so that they match the ARN
 *             syntax in the event you want to match.</p>
 */
export class TestEventPatternCommand extends $Command<
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestEventPatternCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestEventPatternCommandInput, TestEventPatternCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "TestEventPatternCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestEventPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestEventPatternResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestEventPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestEventPatternCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestEventPatternCommandOutput> {
    return deserializeAws_json1_1TestEventPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { TestAuthorizationRequest, TestAuthorizationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1TestAuthorizationCommand,
  serializeAws_restJson1TestAuthorizationCommand,
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

export type TestAuthorizationCommandInput = TestAuthorizationRequest;
export type TestAuthorizationCommandOutput = TestAuthorizationResponse & __MetadataBearer;

/**
 * <p>Tests if a specified principal is authorized to perform an AWS IoT action on a
 *          specified resource. Use this to test and debug the authorization behavior of devices that
 *          connect to the AWS IoT device gateway.</p>
 */
export class TestAuthorizationCommand extends $Command<
  TestAuthorizationCommandInput,
  TestAuthorizationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestAuthorizationCommandInput, TestAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "TestAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestAuthorizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestAuthorizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestAuthorizationCommandOutput> {
    return deserializeAws_restJson1TestAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

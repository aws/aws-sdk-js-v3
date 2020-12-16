import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { TestRepositoryTriggersInput, TestRepositoryTriggersOutput } from "../models/models_1";
import {
  deserializeAws_json1_1TestRepositoryTriggersCommand,
  serializeAws_json1_1TestRepositoryTriggersCommand,
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

export type TestRepositoryTriggersCommandInput = TestRepositoryTriggersInput;
export type TestRepositoryTriggersCommandOutput = TestRepositoryTriggersOutput & __MetadataBearer;

/**
 * <p>Tests the functionality of repository triggers by sending information to the trigger
 *             target. If real data is available in the repository, the test sends data from the last
 *             commit. If no data is available, sample data is generated.</p>
 */
export class TestRepositoryTriggersCommand extends $Command<
  TestRepositoryTriggersCommandInput,
  TestRepositoryTriggersCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestRepositoryTriggersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "TestRepositoryTriggersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestRepositoryTriggersInput.filterSensitiveLog,
      outputFilterSensitiveLog: TestRepositoryTriggersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestRepositoryTriggersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestRepositoryTriggersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestRepositoryTriggersCommandOutput> {
    return deserializeAws_json1_1TestRepositoryTriggersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

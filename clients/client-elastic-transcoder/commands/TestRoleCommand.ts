import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { TestRoleRequest, TestRoleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1TestRoleCommand,
  serializeAws_restJson1TestRoleCommand,
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

export type TestRoleCommandInput = TestRoleRequest;
export type TestRoleCommandOutput = TestRoleResponse & __MetadataBearer;

/**
 * @deprecated
 *
 * <p>The TestRole operation tests the IAM role used to create the pipeline.</p>
 *         <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using
 *             has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding
 *             process. The action attempts to assume the specified IAM role, checks read access to the
 *             input and output buckets, and tries to send a test notification to Amazon SNS topics
 *             that you specify.</p>
 */
export class TestRoleCommand extends $Command<
  TestRoleCommandInput,
  TestRoleCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRoleCommandInput, TestRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "TestRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestRoleCommandOutput> {
    return deserializeAws_restJson1TestRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

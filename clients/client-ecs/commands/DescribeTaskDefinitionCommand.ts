import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeTaskDefinitionRequest, DescribeTaskDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTaskDefinitionCommand,
  serializeAws_json1_1DescribeTaskDefinitionCommand,
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

export type DescribeTaskDefinitionCommandInput = DescribeTaskDefinitionRequest;
export type DescribeTaskDefinitionCommandOutput = DescribeTaskDefinitionResponse & __MetadataBearer;

/**
 * <p>Describes a task definition. You can specify a <code>family</code> and
 * 				<code>revision</code> to find information about a specific task definition, or you
 * 			can simply specify the family to find the latest <code>ACTIVE</code> revision in that
 * 			family.</p>
 * 		       <note>
 * 			         <p>You can only describe <code>INACTIVE</code> task definitions while an active task
 * 				or service references them.</p>
 * 		       </note>
 */
export class DescribeTaskDefinitionCommand extends $Command<
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTaskDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTaskDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTaskDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTaskDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

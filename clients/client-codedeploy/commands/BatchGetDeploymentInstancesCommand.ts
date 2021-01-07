import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentInstancesInput, BatchGetDeploymentInstancesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetDeploymentInstancesCommand,
  serializeAws_json1_1BatchGetDeploymentInstancesCommand,
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

export type BatchGetDeploymentInstancesCommandInput = BatchGetDeploymentInstancesInput;
export type BatchGetDeploymentInstancesCommandOutput = BatchGetDeploymentInstancesOutput & __MetadataBearer;

/**
 * @deprecated
 *
 * <note>
 *             <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code>
 *                 instead. </p>
 *         </note>
 *         <p> Returns an array of one or more instances associated with a deployment. This method works with
 *             EC2/On-premises and AWS Lambda compute platforms. The newer
 *                 <code>BatchGetDeploymentTargets</code> works with all compute platforms.
 *             The maximum number of instances that can be returned is 25.</p>
 */
export class BatchGetDeploymentInstancesCommand extends $Command<
  BatchGetDeploymentInstancesCommandInput,
  BatchGetDeploymentInstancesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetDeploymentInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDeploymentInstancesCommandInput, BatchGetDeploymentInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetDeploymentInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetDeploymentInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetDeploymentInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetDeploymentInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetDeploymentInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetDeploymentInstancesCommandOutput> {
    return deserializeAws_json1_1BatchGetDeploymentInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

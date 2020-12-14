import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ContinueDeploymentInput } from "../models/models_0";
import {
  deserializeAws_json1_1ContinueDeploymentCommand,
  serializeAws_json1_1ContinueDeploymentCommand,
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

export type ContinueDeploymentCommandInput = ContinueDeploymentInput;
export type ContinueDeploymentCommandOutput = __MetadataBearer;

/**
 * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in
 *             the original environment to instances in the replacement environment without waiting for
 *             a specified wait time to elapse. (Traffic rerouting, which is achieved by registering
 *             instances in the replacement environment with the load balancer, can start as soon as
 *             all instances have a status of Ready.) </p>
 */
export class ContinueDeploymentCommand extends $Command<
  ContinueDeploymentCommandInput,
  ContinueDeploymentCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ContinueDeploymentCommandInput) {
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
  ): Handler<ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ContinueDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ContinueDeploymentInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ContinueDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ContinueDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ContinueDeploymentCommandOutput> {
    return deserializeAws_json1_1ContinueDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

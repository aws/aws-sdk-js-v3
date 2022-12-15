// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateNotebookInstanceLifecycleConfigInput,
  CreateNotebookInstanceLifecycleConfigInputFilterSensitiveLog,
  CreateNotebookInstanceLifecycleConfigOutput,
  CreateNotebookInstanceLifecycleConfigOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand,
  serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateNotebookInstanceLifecycleConfigCommandInput extends CreateNotebookInstanceLifecycleConfigInput {}
export interface CreateNotebookInstanceLifecycleConfigCommandOutput
  extends CreateNotebookInstanceLifecycleConfigOutput,
    __MetadataBearer {}

/**
 * <p>Creates a lifecycle configuration that you can associate with a notebook instance. A
 *                 <i>lifecycle configuration</i> is a collection of shell scripts that
 *             run when you create or start a notebook instance.</p>
 *          <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *          <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *          <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *          <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateNotebookInstanceLifecycleConfigCommand extends $Command<
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateNotebookInstanceLifecycleConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNotebookInstanceLifecycleConfigCommandInput, CreateNotebookInstanceLifecycleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotebookInstanceLifecycleConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateNotebookInstanceLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotebookInstanceLifecycleConfigInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNotebookInstanceLifecycleConfigOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

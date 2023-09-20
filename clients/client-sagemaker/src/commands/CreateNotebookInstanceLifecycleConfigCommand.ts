// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CreateNotebookInstanceLifecycleConfigInput,
  CreateNotebookInstanceLifecycleConfigOutput,
} from "../models/models_1";
import {
  de_CreateNotebookInstanceLifecycleConfigCommand,
  se_CreateNotebookInstanceLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNotebookInstanceLifecycleConfigCommand}.
 */
export interface CreateNotebookInstanceLifecycleConfigCommandInput extends CreateNotebookInstanceLifecycleConfigInput {}
/**
 * @public
 *
 * The output of {@link CreateNotebookInstanceLifecycleConfigCommand}.
 */
export interface CreateNotebookInstanceLifecycleConfigCommandOutput
  extends CreateNotebookInstanceLifecycleConfigOutput,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreateNotebookInstanceLifecycleConfigInput
 *   NotebookInstanceLifecycleConfigName: "STRING_VALUE", // required
 *   OnCreate: [ // NotebookInstanceLifecycleConfigList
 *     { // NotebookInstanceLifecycleHook
 *       Content: "STRING_VALUE",
 *     },
 *   ],
 *   OnStart: [
 *     {
 *       Content: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotebookInstanceLifecycleConfigOutput
 * //   NotebookInstanceLifecycleConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotebookInstanceLifecycleConfigCommandInput - {@link CreateNotebookInstanceLifecycleConfigCommandInput}
 * @returns {@link CreateNotebookInstanceLifecycleConfigCommandOutput}
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateNotebookInstanceLifecycleConfig",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: CreateNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateNotebookInstanceLifecycleConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput> {
    return de_CreateNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigInputFilterSensitiveLog,
  DescribeNotebookInstanceLifecycleConfigOutput,
  DescribeNotebookInstanceLifecycleConfigOutputFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand,
  serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DescribeNotebookInstanceLifecycleConfigCommandInput
  extends DescribeNotebookInstanceLifecycleConfigInput {}
export interface DescribeNotebookInstanceLifecycleConfigCommandOutput
  extends DescribeNotebookInstanceLifecycleConfigOutput,
    __MetadataBearer {}

/**
 * <p>Returns a description of a notebook instance lifecycle configuration.</p>
 *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DescribeNotebookInstanceLifecycleConfigCommand extends $Command<
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
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

  constructor(readonly input: DescribeNotebookInstanceLifecycleConfigCommandInput) {
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
  ): Handler<
    DescribeNotebookInstanceLifecycleConfigCommandInput,
    DescribeNotebookInstanceLifecycleConfigCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeNotebookInstanceLifecycleConfigCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeNotebookInstanceLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNotebookInstanceLifecycleConfigInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeNotebookInstanceLifecycleConfigOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

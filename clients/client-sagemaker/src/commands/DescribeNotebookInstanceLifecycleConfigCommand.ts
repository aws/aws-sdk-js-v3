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
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigOutput,
} from "../models/models_2";
import {
  de_DescribeNotebookInstanceLifecycleConfigCommand,
  se_DescribeNotebookInstanceLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotebookInstanceLifecycleConfigCommand}.
 */
export interface DescribeNotebookInstanceLifecycleConfigCommandInput
  extends DescribeNotebookInstanceLifecycleConfigInput {}
/**
 * @public
 *
 * The output of {@link DescribeNotebookInstanceLifecycleConfigCommand}.
 */
export interface DescribeNotebookInstanceLifecycleConfigCommandOutput
  extends DescribeNotebookInstanceLifecycleConfigOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of a notebook instance lifecycle configuration.</p>
 *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeNotebookInstanceLifecycleConfigInput
 *   NotebookInstanceLifecycleConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotebookInstanceLifecycleConfigOutput
 * //   NotebookInstanceLifecycleConfigArn: "STRING_VALUE",
 * //   NotebookInstanceLifecycleConfigName: "STRING_VALUE",
 * //   OnCreate: [ // NotebookInstanceLifecycleConfigList
 * //     { // NotebookInstanceLifecycleHook
 * //       Content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   OnStart: [
 * //     {
 * //       Content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeNotebookInstanceLifecycleConfigCommandInput - {@link DescribeNotebookInstanceLifecycleConfigCommandInput}
 * @returns {@link DescribeNotebookInstanceLifecycleConfigCommandOutput}
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeNotebookInstanceLifecycleConfig",
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
    input: DescribeNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNotebookInstanceLifecycleConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> {
    return de_DescribeNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
} from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { StartPipelineExecutionInput, StartPipelineExecutionOutput } from "../models/models_0";
import { de_StartPipelineExecutionCommand, se_StartPipelineExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit
 *             to the source location specified as part of the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StartPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // StartPipelineExecutionInput
 *   name: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineExecutionOutput
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPipelineExecutionCommandInput - {@link StartPipelineExecutionCommandInput}
 * @returns {@link StartPipelineExecutionCommandOutput}
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class StartPipelineExecutionCommand extends $Command<
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: StartPipelineExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartPipelineExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "StartPipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartPipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartPipelineExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartPipelineExecutionCommandOutput> {
    return de_StartPipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

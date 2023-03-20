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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StopBuildBatchInput, StopBuildBatchOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopBuildBatchCommand,
  serializeAws_json1_1StopBuildBatchCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StopBuildBatchCommand}.
 */
export interface StopBuildBatchCommandInput extends StopBuildBatchInput {}
/**
 * @public
 *
 * The output of {@link StopBuildBatchCommand}.
 */
export interface StopBuildBatchCommandOutput extends StopBuildBatchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Stops a running batch build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StopBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StopBuildBatchCommandInput - {@link StopBuildBatchCommandInput}
 * @returns {@link StopBuildBatchCommandOutput}
 * @see {@link StopBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StopBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 *
 */
export class StopBuildBatchCommand extends $Command<
  StopBuildBatchCommandInput,
  StopBuildBatchCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: StopBuildBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopBuildBatchCommandInput, StopBuildBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopBuildBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "StopBuildBatchCommand";
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
  private serialize(input: StopBuildBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopBuildBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBuildBatchCommandOutput> {
    return deserializeAws_json1_1StopBuildBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

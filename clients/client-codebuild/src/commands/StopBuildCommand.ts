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
import {
  StopBuildInput,
  StopBuildInputFilterSensitiveLog,
  StopBuildOutput,
  StopBuildOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1StopBuildCommand, serializeAws_json1_1StopBuildCommand } from "../protocols/Aws_json1_1";

export interface StopBuildCommandInput extends StopBuildInput {}
export interface StopBuildCommandOutput extends StopBuildOutput, __MetadataBearer {}

/**
 * <p>Attempts to stop running a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StopBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBuildCommandInput} for command's `input` shape.
 * @see {@link StopBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 */
export class StopBuildCommand extends $Command<
  StopBuildCommandInput,
  StopBuildCommandOutput,
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

  constructor(readonly input: StopBuildCommandInput) {
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
  ): Handler<StopBuildCommandInput, StopBuildCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopBuildCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "StopBuildCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopBuildInputFilterSensitiveLog,
      outputFilterSensitiveLog: StopBuildOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopBuildCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopBuildCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBuildCommandOutput> {
    return deserializeAws_json1_1StopBuildCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

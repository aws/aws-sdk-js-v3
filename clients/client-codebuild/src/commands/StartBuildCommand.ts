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
import { StartBuildInput, StartBuildOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartBuildCommand,
  serializeAws_json1_1StartBuildCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartBuildCommand}.
 */
export interface StartBuildCommandInput extends StartBuildInput {}
/**
 * @public
 *
 * The output of {@link StartBuildCommand}.
 */
export interface StartBuildCommandOutput extends StartBuildOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts running a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StartBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartBuildCommandInput - {@link StartBuildCommandInput}
 * @returns {@link StartBuildCommandOutput}
 * @see {@link StartBuildCommandInput} for command's `input` shape.
 * @see {@link StartBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 *
 */
export class StartBuildCommand extends $Command<
  StartBuildCommandInput,
  StartBuildCommandOutput,
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
  constructor(readonly input: StartBuildCommandInput) {
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
  ): Handler<StartBuildCommandInput, StartBuildCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartBuildCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "StartBuildCommand";
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
  private serialize(input: StartBuildCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartBuildCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBuildCommandOutput> {
    return deserializeAws_json1_1StartBuildCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

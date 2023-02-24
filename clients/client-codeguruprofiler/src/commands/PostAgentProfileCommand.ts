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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import {
  PostAgentProfileRequest,
  PostAgentProfileRequestFilterSensitiveLog,
  PostAgentProfileResponse,
  PostAgentProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PostAgentProfileCommand,
  serializeAws_restJson1PostAgentProfileCommand,
} from "../protocols/Aws_restJson1";

export interface PostAgentProfileCommandInput extends PostAgentProfileRequest {}
export interface PostAgentProfileCommandOutput extends PostAgentProfileResponse, __MetadataBearer {}

/**
 * <p>
 *          Submits profiling data to an aggregated profile of a profiling group. To get an
 *          aggregated profile that is created with this profiling data, use
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
 *                <code>GetProfile</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PostAgentProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PostAgentProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new PostAgentProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostAgentProfileCommandInput} for command's `input` shape.
 * @see {@link PostAgentProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class PostAgentProfileCommand extends $Command<
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput,
  CodeGuruProfilerClientResolvedConfig
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

  constructor(readonly input: PostAgentProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostAgentProfileCommandInput, PostAgentProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PostAgentProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "PostAgentProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostAgentProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PostAgentProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostAgentProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PostAgentProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostAgentProfileCommandOutput> {
    return deserializeAws_restJson1PostAgentProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

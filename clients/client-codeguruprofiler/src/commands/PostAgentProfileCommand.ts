// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { PostAgentProfileRequest, PostAgentProfileResponse } from "../models/models_0";
import { de_PostAgentProfileCommand, se_PostAgentProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type PostAgentProfileCommandInputType = Omit<PostAgentProfileRequest, "agentProfile"> & {
  agentProfile: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PostAgentProfileCommand}.
 */
export interface PostAgentProfileCommandInput extends PostAgentProfileCommandInputType {}
/**
 * @public
 *
 * The output of {@link PostAgentProfileCommand}.
 */
export interface PostAgentProfileCommandOutput extends PostAgentProfileResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // PostAgentProfileRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   agentProfile: "BLOB_VALUE", // required
 *   profileToken: "STRING_VALUE",
 *   contentType: "STRING_VALUE", // required
 * };
 * const command = new PostAgentProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PostAgentProfileCommandInput - {@link PostAgentProfileCommandInput}
 * @returns {@link PostAgentProfileCommandOutput}
 * @see {@link PostAgentProfileCommandInput} for command's `input` shape.
 * @see {@link PostAgentProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeGuruProfiler",
        operation: "PostAgentProfile",
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
  private serialize(input: PostAgentProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PostAgentProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostAgentProfileCommandOutput> {
    return de_PostAgentProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

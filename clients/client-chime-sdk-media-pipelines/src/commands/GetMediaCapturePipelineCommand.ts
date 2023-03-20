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
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  GetMediaCapturePipelineRequest,
  GetMediaCapturePipelineResponse,
  GetMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMediaCapturePipelineCommand,
  serializeAws_restJson1GetMediaCapturePipelineCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetMediaCapturePipelineCommand}.
 */
export interface GetMediaCapturePipelineCommandInput extends GetMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaCapturePipelineCommand}.
 */
export interface GetMediaCapturePipelineCommandOutput extends GetMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an existing media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetMediaCapturePipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetMediaCapturePipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new GetMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetMediaCapturePipelineCommandInput - {@link GetMediaCapturePipelineCommandInput}
 * @returns {@link GetMediaCapturePipelineCommandOutput}
 * @see {@link GetMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link GetMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 *
 */
export class GetMediaCapturePipelineCommand extends $Command<
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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
  constructor(readonly input: GetMediaCapturePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMediaCapturePipelineCommandInput, GetMediaCapturePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMediaCapturePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "GetMediaCapturePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMediaCapturePipelineResponseFilterSensitiveLog,
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
  private serialize(input: GetMediaCapturePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMediaCapturePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMediaCapturePipelineCommandOutput> {
    return deserializeAws_restJson1GetMediaCapturePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

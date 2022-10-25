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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetMediaCapturePipelineRequest,
  GetMediaCapturePipelineRequestFilterSensitiveLog,
  GetMediaCapturePipelineResponse,
  GetMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMediaCapturePipelineCommand,
  serializeAws_restJson1GetMediaCapturePipelineCommand,
} from "../protocols/Aws_restJson1";

export interface GetMediaCapturePipelineCommandInput extends GetMediaCapturePipelineRequest {}
export interface GetMediaCapturePipelineCommandOutput extends GetMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Gets an existing media capture pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetMediaCapturePipelineCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetMediaCapturePipelineCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link GetMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class GetMediaCapturePipelineCommand extends $Command<
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
  ChimeClientResolvedConfig
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
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMediaCapturePipelineCommandInput, GetMediaCapturePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMediaCapturePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetMediaCapturePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMediaCapturePipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMediaCapturePipelineResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMediaCapturePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMediaCapturePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMediaCapturePipelineCommandOutput> {
    return deserializeAws_restJson1GetMediaCapturePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

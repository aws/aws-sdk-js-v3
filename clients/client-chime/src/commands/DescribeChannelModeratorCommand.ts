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
  DescribeChannelModeratorRequest,
  DescribeChannelModeratorRequestFilterSensitiveLog,
  DescribeChannelModeratorResponse,
  DescribeChannelModeratorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeChannelModeratorCommand,
  serializeAws_restJson1DescribeChannelModeratorCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeChannelModeratorCommandInput extends DescribeChannelModeratorRequest {}
export interface DescribeChannelModeratorCommandOutput extends DescribeChannelModeratorResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of a single ChannelModerator.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeChannelModeratorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeChannelModeratorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeChannelModeratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelModeratorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DescribeChannelModeratorCommand extends $Command<
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
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

  constructor(readonly input: DescribeChannelModeratorCommandInput) {
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
  ): Handler<DescribeChannelModeratorCommandInput, DescribeChannelModeratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChannelModeratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeChannelModeratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChannelModeratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelModeratorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeChannelModeratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeChannelModeratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChannelModeratorCommandOutput> {
    return deserializeAws_restJson1DescribeChannelModeratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

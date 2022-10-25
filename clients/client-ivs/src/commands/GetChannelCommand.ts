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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  GetChannelRequest,
  GetChannelRequestFilterSensitiveLog,
  GetChannelResponse,
  GetChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetChannelCommand,
  serializeAws_restJson1GetChannelCommand,
} from "../protocols/Aws_restJson1";

export interface GetChannelCommandInput extends GetChannelRequest {}
export interface GetChannelCommandOutput extends GetChannelResponse, __MetadataBearer {}

/**
 * <p>Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelCommandInput} for command's `input` shape.
 * @see {@link GetChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 */
export class GetChannelCommand extends $Command<
  GetChannelCommandInput,
  GetChannelCommandOutput,
  IvsClientResolvedConfig
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

  constructor(readonly input: GetChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetChannelCommandInput, GetChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetChannelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "GetChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetChannelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChannelCommandOutput> {
    return deserializeAws_restJson1GetChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

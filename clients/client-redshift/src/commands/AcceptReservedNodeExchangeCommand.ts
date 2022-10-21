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
  AcceptReservedNodeExchangeInputMessage,
  AcceptReservedNodeExchangeInputMessageFilterSensitiveLog,
  AcceptReservedNodeExchangeOutputMessage,
  AcceptReservedNodeExchangeOutputMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAcceptReservedNodeExchangeCommand,
  serializeAws_queryAcceptReservedNodeExchangeCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface AcceptReservedNodeExchangeCommandInput extends AcceptReservedNodeExchangeInputMessage {}
export interface AcceptReservedNodeExchangeCommandOutput
  extends AcceptReservedNodeExchangeOutputMessage,
    __MetadataBearer {}

/**
 * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 *             configuration (term, payment type, or number of nodes) and no additional costs.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AcceptReservedNodeExchangeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AcceptReservedNodeExchangeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AcceptReservedNodeExchangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptReservedNodeExchangeCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedNodeExchangeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class AcceptReservedNodeExchangeCommand extends $Command<
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: AcceptReservedNodeExchangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptReservedNodeExchangeCommandInput, AcceptReservedNodeExchangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptReservedNodeExchangeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AcceptReservedNodeExchangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptReservedNodeExchangeInputMessageFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptReservedNodeExchangeOutputMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptReservedNodeExchangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAcceptReservedNodeExchangeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptReservedNodeExchangeCommandOutput> {
    return deserializeAws_queryAcceptReservedNodeExchangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

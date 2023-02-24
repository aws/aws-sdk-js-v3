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
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsInputMessageFilterSensitiveLog,
  GetReservedNodeExchangeOfferingsOutputMessage,
  GetReservedNodeExchangeOfferingsOutputMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryGetReservedNodeExchangeOfferingsCommand,
  serializeAws_queryGetReservedNodeExchangeOfferingsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface GetReservedNodeExchangeOfferingsCommandInput extends GetReservedNodeExchangeOfferingsInputMessage {}
export interface GetReservedNodeExchangeOfferingsCommandOutput
  extends GetReservedNodeExchangeOfferingsOutputMessage,
    __MetadataBearer {}

/**
 * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 *             and usage price of the given DC1 reserved node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new GetReservedNodeExchangeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservedNodeExchangeOfferingsCommandInput} for command's `input` shape.
 * @see {@link GetReservedNodeExchangeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class GetReservedNodeExchangeOfferingsCommand extends $Command<
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
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

  constructor(readonly input: GetReservedNodeExchangeOfferingsCommandInput) {
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
  ): Handler<GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservedNodeExchangeOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "GetReservedNodeExchangeOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReservedNodeExchangeOfferingsInputMessageFilterSensitiveLog,
      outputFilterSensitiveLog: GetReservedNodeExchangeOfferingsOutputMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetReservedNodeExchangeOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetReservedNodeExchangeOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput> {
    return deserializeAws_queryGetReservedNodeExchangeOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

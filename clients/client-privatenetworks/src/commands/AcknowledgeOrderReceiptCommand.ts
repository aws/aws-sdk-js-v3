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
  AcknowledgeOrderReceiptRequest,
  AcknowledgeOrderReceiptRequestFilterSensitiveLog,
  AcknowledgeOrderReceiptResponse,
  AcknowledgeOrderReceiptResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1AcknowledgeOrderReceiptCommand,
  serializeAws_restJson1AcknowledgeOrderReceiptCommand,
} from "../protocols/Aws_restJson1";

export interface AcknowledgeOrderReceiptCommandInput extends AcknowledgeOrderReceiptRequest {}
export interface AcknowledgeOrderReceiptCommandOutput extends AcknowledgeOrderReceiptResponse, __MetadataBearer {}

/**
 * <p>Acknowledges that the specified network order was received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, AcknowledgeOrderReceiptCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, AcknowledgeOrderReceiptCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new AcknowledgeOrderReceiptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeOrderReceiptCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeOrderReceiptCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class AcknowledgeOrderReceiptCommand extends $Command<
  AcknowledgeOrderReceiptCommandInput,
  AcknowledgeOrderReceiptCommandOutput,
  PrivateNetworksClientResolvedConfig
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

  constructor(readonly input: AcknowledgeOrderReceiptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcknowledgeOrderReceiptCommandInput, AcknowledgeOrderReceiptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcknowledgeOrderReceiptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "AcknowledgeOrderReceiptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcknowledgeOrderReceiptRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcknowledgeOrderReceiptResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcknowledgeOrderReceiptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcknowledgeOrderReceiptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeOrderReceiptCommandOutput> {
    return deserializeAws_restJson1AcknowledgeOrderReceiptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

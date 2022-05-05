// smithy-typescript generated code
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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmCustomerAgreementRequest, ConfirmCustomerAgreementResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmCustomerAgreementCommand,
  serializeAws_json1_1ConfirmCustomerAgreementCommand,
} from "../protocols/Aws_json1_1";

export interface ConfirmCustomerAgreementCommandInput extends ConfirmCustomerAgreementRequest {}
export interface ConfirmCustomerAgreementCommandOutput extends ConfirmCustomerAgreementResponse, __MetadataBearer {}

/**
 * <p>
 *       The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmCustomerAgreementCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmCustomerAgreementCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmCustomerAgreementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmCustomerAgreementCommandInput} for command's `input` shape.
 * @see {@link ConfirmCustomerAgreementCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class ConfirmCustomerAgreementCommand extends $Command<
  ConfirmCustomerAgreementCommandInput,
  ConfirmCustomerAgreementCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmCustomerAgreementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmCustomerAgreementCommandInput, ConfirmCustomerAgreementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmCustomerAgreementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmCustomerAgreementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmCustomerAgreementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmCustomerAgreementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmCustomerAgreementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmCustomerAgreementCommandOutput> {
    return deserializeAws_json1_1ConfirmCustomerAgreementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

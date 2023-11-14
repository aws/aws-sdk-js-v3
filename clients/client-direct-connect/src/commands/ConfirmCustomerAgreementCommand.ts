// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmCustomerAgreementRequest, ConfirmCustomerAgreementResponse } from "../models/models_0";
import { de_ConfirmCustomerAgreementCommand, se_ConfirmCustomerAgreementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ConfirmCustomerAgreementCommand}.
 */
export interface ConfirmCustomerAgreementCommandInput extends ConfirmCustomerAgreementRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmCustomerAgreementCommand}.
 */
export interface ConfirmCustomerAgreementCommandOutput extends ConfirmCustomerAgreementResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmCustomerAgreementCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmCustomerAgreementCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmCustomerAgreementRequest
 *   agreementName: "STRING_VALUE",
 * };
 * const command = new ConfirmCustomerAgreementCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmCustomerAgreementResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfirmCustomerAgreementCommandInput - {@link ConfirmCustomerAgreementCommandInput}
 * @returns {@link ConfirmCustomerAgreementCommandOutput}
 * @see {@link ConfirmCustomerAgreementCommandInput} for command's `input` shape.
 * @see {@link ConfirmCustomerAgreementCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class ConfirmCustomerAgreementCommand extends $Command<
  ConfirmCustomerAgreementCommandInput,
  ConfirmCustomerAgreementCommandOutput,
  DirectConnectClientResolvedConfig
> {
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
  constructor(readonly input: ConfirmCustomerAgreementCommandInput) {
    super();
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmCustomerAgreementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmCustomerAgreementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "ConfirmCustomerAgreement",
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
  private serialize(input: ConfirmCustomerAgreementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ConfirmCustomerAgreementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmCustomerAgreementCommandOutput> {
    return de_ConfirmCustomerAgreementCommand(output, context);
  }
}

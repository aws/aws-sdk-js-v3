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
} from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DisassociateMacSecKeyRequest, DisassociateMacSecKeyResponse } from "../models/models_0";
import { de_DisassociateMacSecKeyCommand, se_DisassociateMacSecKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMacSecKeyCommand}.
 */
export interface DisassociateMacSecKeyCommandInput extends DisassociateMacSecKeyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMacSecKeyCommand}.
 */
export interface DisassociateMacSecKeyCommandOutput extends DisassociateMacSecKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DisassociateMacSecKeyRequest
 *   connectionId: "STRING_VALUE", // required
 *   secretARN: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateMacSecKeyResponse
 * //   connectionId: "STRING_VALUE",
 * //   macSecKeys: [ // MacSecKeyList
 * //     { // MacSecKey
 * //       secretARN: "STRING_VALUE",
 * //       ckn: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       startOn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateMacSecKeyCommandInput - {@link DisassociateMacSecKeyCommandInput}
 * @returns {@link DisassociateMacSecKeyCommandOutput}
 * @see {@link DisassociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateMacSecKeyCommandOutput} for command's `response` shape.
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
export class DisassociateMacSecKeyCommand extends $Command<
  DisassociateMacSecKeyCommandInput,
  DisassociateMacSecKeyCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DisassociateMacSecKeyCommandInput) {
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
  ): Handler<DisassociateMacSecKeyCommandInput, DisassociateMacSecKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateMacSecKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DisassociateMacSecKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DisassociateMacSecKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateMacSecKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateMacSecKeyCommandOutput> {
    return de_DisassociateMacSecKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

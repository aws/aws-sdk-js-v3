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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateMemberAccountRequest } from "../models/models_0";
import { de_DisassociateMemberAccountCommand, se_DisassociateMemberAccountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMemberAccountCommand}.
 */
export interface DisassociateMemberAccountCommandInput extends DisassociateMemberAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMemberAccountCommand}.
 */
export interface DisassociateMemberAccountCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>(Discontinued) Removes the specified member account from Amazon Macie
 *       Classic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const input = { // DisassociateMemberAccountRequest
 *   memberAccountId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMemberAccountCommandInput - {@link DisassociateMemberAccountCommandInput}
 * @returns {@link DisassociateMemberAccountCommandOutput}
 * @see {@link DisassociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>(Discontinued) Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>(Discontinued) The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link MacieServiceException}
 * <p>Base exception class for all service exceptions from Macie service.</p>
 *
 */
export class DisassociateMemberAccountCommand extends $Command<
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
  MacieClientResolvedConfig
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
  constructor(readonly input: DisassociateMemberAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateMemberAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "DisassociateMemberAccountCommand";
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
  private serialize(input: DisassociateMemberAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateMemberAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMemberAccountCommandOutput> {
    return de_DisassociateMemberAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

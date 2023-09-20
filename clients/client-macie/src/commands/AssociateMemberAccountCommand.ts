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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { AssociateMemberAccountRequest } from "../models/models_0";
import { de_AssociateMemberAccountCommand, se_AssociateMemberAccountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateMemberAccountCommand}.
 */
export interface AssociateMemberAccountCommandInput extends AssociateMemberAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMemberAccountCommand}.
 */
export interface AssociateMemberAccountCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const input = { // AssociateMemberAccountRequest
 *   memberAccountId: "STRING_VALUE", // required
 * };
 * const command = new AssociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateMemberAccountCommandInput - {@link AssociateMemberAccountCommandInput}
 * @returns {@link AssociateMemberAccountCommandOutput}
 * @see {@link AssociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>(Discontinued) Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>(Discontinued) The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>(Discontinued) The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account quotas. The error code describes the quota exceeded.</p>
 *
 * @throws {@link MacieServiceException}
 * <p>Base exception class for all service exceptions from Macie service.</p>
 *
 */
export class AssociateMemberAccountCommand extends $Command<
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput,
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
  constructor(readonly input: AssociateMemberAccountCommandInput) {
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
  ): Handler<AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateMemberAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "AssociateMemberAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MacieService",
        operation: "AssociateMemberAccount",
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
  private serialize(input: AssociateMemberAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateMemberAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateMemberAccountCommandOutput> {
    return de_AssociateMemberAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

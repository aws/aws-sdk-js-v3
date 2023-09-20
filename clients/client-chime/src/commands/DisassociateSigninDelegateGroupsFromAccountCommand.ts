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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DisassociateSigninDelegateGroupsFromAccountRequest,
  DisassociateSigninDelegateGroupsFromAccountResponse,
} from "../models/models_0";
import {
  de_DisassociateSigninDelegateGroupsFromAccountCommand,
  se_DisassociateSigninDelegateGroupsFromAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSigninDelegateGroupsFromAccountCommand}.
 */
export interface DisassociateSigninDelegateGroupsFromAccountCommandInput
  extends DisassociateSigninDelegateGroupsFromAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSigninDelegateGroupsFromAccountCommand}.
 */
export interface DisassociateSigninDelegateGroupsFromAccountCommandOutput
  extends DisassociateSigninDelegateGroupsFromAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DisassociateSigninDelegateGroupsFromAccountRequest
 *   AccountId: "STRING_VALUE", // required
 *   GroupNames: [ // NonEmptyStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateSigninDelegateGroupsFromAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSigninDelegateGroupsFromAccountCommandInput - {@link DisassociateSigninDelegateGroupsFromAccountCommandInput}
 * @returns {@link DisassociateSigninDelegateGroupsFromAccountCommandOutput}
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class DisassociateSigninDelegateGroupsFromAccountCommand extends $Command<
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DisassociateSigninDelegateGroupsFromAccountCommandInput) {
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
  ): Handler<
    DisassociateSigninDelegateGroupsFromAccountCommandInput,
    DisassociateSigninDelegateGroupsFromAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateSigninDelegateGroupsFromAccountCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DisassociateSigninDelegateGroupsFromAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "DisassociateSigninDelegateGroupsFromAccount",
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
  private serialize(
    input: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateSigninDelegateGroupsFromAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> {
    return de_DisassociateSigninDelegateGroupsFromAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

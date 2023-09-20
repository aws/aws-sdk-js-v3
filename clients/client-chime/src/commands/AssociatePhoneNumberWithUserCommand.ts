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
  AssociatePhoneNumberWithUserRequest,
  AssociatePhoneNumberWithUserRequestFilterSensitiveLog,
  AssociatePhoneNumberWithUserResponse,
} from "../models/models_0";
import {
  de_AssociatePhoneNumberWithUserCommand,
  se_AssociatePhoneNumberWithUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociatePhoneNumberWithUserCommand}.
 */
export interface AssociatePhoneNumberWithUserCommandInput extends AssociatePhoneNumberWithUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePhoneNumberWithUserCommand}.
 */
export interface AssociatePhoneNumberWithUserCommandOutput
  extends AssociatePhoneNumberWithUserResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a phone number with the specified Amazon Chime user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociatePhoneNumberWithUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociatePhoneNumberWithUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // AssociatePhoneNumberWithUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   E164PhoneNumber: "STRING_VALUE", // required
 * };
 * const command = new AssociatePhoneNumberWithUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociatePhoneNumberWithUserCommandInput - {@link AssociatePhoneNumberWithUserCommandInput}
 * @returns {@link AssociatePhoneNumberWithUserCommandOutput}
 * @see {@link AssociatePhoneNumberWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberWithUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation.</p>
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
export class AssociatePhoneNumberWithUserCommand extends $Command<
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
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
  constructor(readonly input: AssociatePhoneNumberWithUserCommandInput) {
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
  ): Handler<AssociatePhoneNumberWithUserCommandInput, AssociatePhoneNumberWithUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociatePhoneNumberWithUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "AssociatePhoneNumberWithUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePhoneNumberWithUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "AssociatePhoneNumberWithUser",
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
  private serialize(input: AssociatePhoneNumberWithUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociatePhoneNumberWithUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePhoneNumberWithUserCommandOutput> {
    return de_AssociatePhoneNumberWithUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

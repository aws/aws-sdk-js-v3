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
  InviteUsersRequest,
  InviteUsersRequestFilterSensitiveLog,
  InviteUsersResponse,
  InviteUsersResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_InviteUsersCommand, se_InviteUsersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InviteUsersCommand}.
 */
export interface InviteUsersCommandInput extends InviteUsersRequest {}
/**
 * @public
 *
 * The output of {@link InviteUsersCommand}.
 */
export interface InviteUsersCommandOutput extends InviteUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
 *                 <code>Team</code> account. Only <code>Team</code> account types are currently
 *             supported for this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, InviteUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, InviteUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // InviteUsersRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserEmailList: [ // UserEmailList // required
 *     "STRING_VALUE",
 *   ],
 *   UserType: "PrivateUser" || "SharedDevice",
 * };
 * const command = new InviteUsersCommand(input);
 * const response = await client.send(command);
 * // { // InviteUsersResponse
 * //   Invites: [ // InviteList
 * //     { // Invite
 * //       InviteId: "STRING_VALUE",
 * //       Status: "Pending" || "Accepted" || "Failed",
 * //       EmailAddress: "STRING_VALUE",
 * //       EmailStatus: "NotSent" || "Sent" || "Failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param InviteUsersCommandInput - {@link InviteUsersCommandInput}
 * @returns {@link InviteUsersCommandOutput}
 * @see {@link InviteUsersCommandInput} for command's `input` shape.
 * @see {@link InviteUsersCommandOutput} for command's `response` shape.
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
export class InviteUsersCommand extends $Command<
  InviteUsersCommandInput,
  InviteUsersCommandOutput,
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
  constructor(readonly input: InviteUsersCommandInput) {
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
  ): Handler<InviteUsersCommandInput, InviteUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InviteUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "InviteUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InviteUsersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InviteUsersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "InviteUsers",
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
  private serialize(input: InviteUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InviteUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InviteUsersCommandOutput> {
    return de_InviteUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

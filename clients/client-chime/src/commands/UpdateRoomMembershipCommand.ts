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
  UpdateRoomMembershipRequest,
  UpdateRoomMembershipResponse,
  UpdateRoomMembershipResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_UpdateRoomMembershipCommand, se_UpdateRoomMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoomMembershipCommand}.
 */
export interface UpdateRoomMembershipCommandInput extends UpdateRoomMembershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoomMembershipCommand}.
 */
export interface UpdateRoomMembershipCommandOutput extends UpdateRoomMembershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
 *             Enterprise account. The member role designates whether the member is a chat room
 *             administrator or a general chat room member. The member role can be updated only for
 *             user IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // UpdateRoomMembershipRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   Role: "Administrator" || "Member",
 * };
 * const command = new UpdateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoomMembershipResponse
 * //   RoomMembership: { // RoomMembership
 * //     RoomId: "STRING_VALUE",
 * //     Member: { // Member
 * //       MemberId: "STRING_VALUE",
 * //       MemberType: "User" || "Bot" || "Webhook",
 * //       Email: "STRING_VALUE",
 * //       FullName: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //     Role: "Administrator" || "Member",
 * //     InvitedBy: "STRING_VALUE",
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRoomMembershipCommandInput - {@link UpdateRoomMembershipCommandInput}
 * @returns {@link UpdateRoomMembershipCommandOutput}
 * @see {@link UpdateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomMembershipCommandOutput} for command's `response` shape.
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
export class UpdateRoomMembershipCommand extends $Command<
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
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
  constructor(readonly input: UpdateRoomMembershipCommandInput) {
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
  ): Handler<UpdateRoomMembershipCommandInput, UpdateRoomMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRoomMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateRoomMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateRoomMembershipResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "UpdateRoomMembership",
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
  private serialize(input: UpdateRoomMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRoomMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoomMembershipCommandOutput> {
    return de_UpdateRoomMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

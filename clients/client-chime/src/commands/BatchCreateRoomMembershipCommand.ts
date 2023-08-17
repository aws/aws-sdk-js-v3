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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchCreateRoomMembershipRequest, BatchCreateRoomMembershipResponse } from "../models/models_0";
import { de_BatchCreateRoomMembershipCommand, se_BatchCreateRoomMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateRoomMembershipCommand}.
 */
export interface BatchCreateRoomMembershipCommandInput extends BatchCreateRoomMembershipRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateRoomMembershipCommand}.
 */
export interface BatchCreateRoomMembershipCommandOutput extends BatchCreateRoomMembershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a
 *     chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // BatchCreateRoomMembershipRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MembershipItemList: [ // MembershipItemList // required
 *     { // MembershipItem
 *       MemberId: "STRING_VALUE",
 *       Role: "Administrator" || "Member",
 *     },
 *   ],
 * };
 * const command = new BatchCreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateRoomMembershipResponse
 * //   Errors: [ // MemberErrorList
 * //     { // MemberError
 * //       MemberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateRoomMembershipCommandInput - {@link BatchCreateRoomMembershipCommandInput}
 * @returns {@link BatchCreateRoomMembershipCommandOutput}
 * @see {@link BatchCreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRoomMembershipCommandOutput} for command's `response` shape.
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
export class BatchCreateRoomMembershipCommand extends $Command<
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
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
  constructor(readonly input: BatchCreateRoomMembershipCommandInput) {
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
  ): Handler<BatchCreateRoomMembershipCommandInput, BatchCreateRoomMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateRoomMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchCreateRoomMembershipCommand";
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
  private serialize(input: BatchCreateRoomMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchCreateRoomMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchCreateRoomMembershipCommandOutput> {
    return de_BatchCreateRoomMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

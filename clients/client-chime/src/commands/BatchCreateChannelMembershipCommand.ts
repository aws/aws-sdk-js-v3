// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  BatchCreateChannelMembershipRequest,
  BatchCreateChannelMembershipResponse,
  BatchCreateChannelMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_BatchCreateChannelMembershipCommand,
  se_BatchCreateChannelMembershipCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchCreateChannelMembershipCommand}.
 */
export interface BatchCreateChannelMembershipCommandInput extends BatchCreateChannelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateChannelMembershipCommand}.
 */
export interface BatchCreateChannelMembershipCommandOutput
  extends BatchCreateChannelMembershipResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds a specified number of users to a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // BatchCreateChannelMembershipRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   Type: "DEFAULT" || "HIDDEN",
 *   MemberArns: [ // MemberArns // required
 *     "STRING_VALUE",
 *   ],
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new BatchCreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateChannelMembershipResponse
 * //   BatchChannelMemberships: { // BatchChannelMemberships
 * //     InvitedBy: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     Type: "DEFAULT" || "HIDDEN",
 * //     Members: [ // Members
 * //       {
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ChannelArn: "STRING_VALUE",
 * //   },
 * //   Errors: [ // BatchCreateChannelMembershipErrors
 * //     { // BatchCreateChannelMembershipError
 * //       MemberArn: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateChannelMembershipCommandInput - {@link BatchCreateChannelMembershipCommandInput}
 * @returns {@link BatchCreateChannelMembershipCommandOutput}
 * @see {@link BatchCreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class BatchCreateChannelMembershipCommand extends $Command<
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
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
  constructor(readonly input: BatchCreateChannelMembershipCommandInput) {
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
  ): Handler<BatchCreateChannelMembershipCommandInput, BatchCreateChannelMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateChannelMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchCreateChannelMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: BatchCreateChannelMembershipResponseFilterSensitiveLog,
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
  private serialize(input: BatchCreateChannelMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchCreateChannelMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchCreateChannelMembershipCommandOutput> {
    return de_BatchCreateChannelMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

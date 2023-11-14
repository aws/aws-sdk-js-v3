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

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  ListChannelMembershipsForAppInstanceUserRequest,
  ListChannelMembershipsForAppInstanceUserRequestFilterSensitiveLog,
  ListChannelMembershipsForAppInstanceUserResponse,
  ListChannelMembershipsForAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListChannelMembershipsForAppInstanceUserCommand,
  se_ListChannelMembershipsForAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListChannelMembershipsForAppInstanceUserCommand}.
 */
export interface ListChannelMembershipsForAppInstanceUserCommandInput
  extends ListChannelMembershipsForAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelMembershipsForAppInstanceUserCommand}.
 */
export interface ListChannelMembershipsForAppInstanceUserCommandOutput
  extends ListChannelMembershipsForAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Lists all channels that an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> is a part of.
 *          Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelMembershipsForAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new ListChannelMembershipsForAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelMembershipsForAppInstanceUserResponse
 * //   ChannelMemberships: [ // ChannelMembershipForAppInstanceUserSummaryList
 * //     { // ChannelMembershipForAppInstanceUserSummary
 * //       ChannelSummary: { // ChannelSummary
 * //         Name: "STRING_VALUE",
 * //         ChannelArn: "STRING_VALUE",
 * //         Mode: "UNRESTRICTED" || "RESTRICTED",
 * //         Privacy: "PUBLIC" || "PRIVATE",
 * //         Metadata: "STRING_VALUE",
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       AppInstanceUserMembershipSummary: { // AppInstanceUserMembershipSummary
 * //         Type: "DEFAULT" || "HIDDEN",
 * //         ReadMarkerTimestamp: new Date("TIMESTAMP"),
 * //         SubChannelId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelMembershipsForAppInstanceUserCommandInput - {@link ListChannelMembershipsForAppInstanceUserCommandInput}
 * @returns {@link ListChannelMembershipsForAppInstanceUserCommandOutput}
 * @see {@link ListChannelMembershipsForAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link ListChannelMembershipsForAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
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
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 */
export class ListChannelMembershipsForAppInstanceUserCommand extends $Command<
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
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
  constructor(readonly input: ListChannelMembershipsForAppInstanceUserCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListChannelMembershipsForAppInstanceUserCommandInput,
    ListChannelMembershipsForAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListChannelMembershipsForAppInstanceUserCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListChannelMembershipsForAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelMembershipsForAppInstanceUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMembershipsForAppInstanceUserResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "ListChannelMembershipsForAppInstanceUser",
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
    input: ListChannelMembershipsForAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListChannelMembershipsForAppInstanceUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> {
    return de_ListChannelMembershipsForAppInstanceUserCommand(output, context);
  }
}

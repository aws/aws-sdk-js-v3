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
import {
  DescribeChannelMembershipForAppInstanceUserRequest,
  DescribeChannelMembershipForAppInstanceUserResponse,
  DescribeChannelMembershipForAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeChannelMembershipForAppInstanceUserCommand,
  se_DescribeChannelMembershipForAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelMembershipForAppInstanceUserCommand}.
 */
export interface DescribeChannelMembershipForAppInstanceUserCommandInput
  extends DescribeChannelMembershipForAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelMembershipForAppInstanceUserCommand}.
 */
export interface DescribeChannelMembershipForAppInstanceUserCommandOutput
  extends DescribeChannelMembershipForAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p> Returns the details of a channel based on the membership of the specified
 *             <code>AppInstanceUser</code>.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembershipForAppInstanceUser.html">DescribeChannelMembershipForAppInstanceUser</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeChannelMembershipForAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeChannelMembershipForAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DescribeChannelMembershipForAppInstanceUserRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new DescribeChannelMembershipForAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelMembershipForAppInstanceUserResponse
 * //   ChannelMembership: { // ChannelMembershipForAppInstanceUserSummary
 * //     ChannelSummary: { // ChannelSummary
 * //       Name: "STRING_VALUE",
 * //       ChannelArn: "STRING_VALUE",
 * //       Mode: "UNRESTRICTED" || "RESTRICTED",
 * //       Privacy: "PUBLIC" || "PRIVATE",
 * //       Metadata: "STRING_VALUE",
 * //       LastMessageTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     AppInstanceUserMembershipSummary: { // AppInstanceUserMembershipSummary
 * //       Type: "DEFAULT" || "HIDDEN",
 * //       ReadMarkerTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelMembershipForAppInstanceUserCommandInput - {@link DescribeChannelMembershipForAppInstanceUserCommandInput}
 * @returns {@link DescribeChannelMembershipForAppInstanceUserCommandOutput}
 * @see {@link DescribeChannelMembershipForAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelMembershipForAppInstanceUserCommandOutput} for command's `response` shape.
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
export class DescribeChannelMembershipForAppInstanceUserCommand extends $Command<
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
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
  constructor(readonly input: DescribeChannelMembershipForAppInstanceUserCommandInput) {
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
    DescribeChannelMembershipForAppInstanceUserCommandInput,
    DescribeChannelMembershipForAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeChannelMembershipForAppInstanceUserCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeChannelMembershipForAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeChannelMembershipForAppInstanceUserResponseFilterSensitiveLog,
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
    input: DescribeChannelMembershipForAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeChannelMembershipForAppInstanceUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> {
    return de_DescribeChannelMembershipForAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

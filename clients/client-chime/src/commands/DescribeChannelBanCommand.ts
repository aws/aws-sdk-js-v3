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
  DescribeChannelBanRequest,
  DescribeChannelBanResponse,
  DescribeChannelBanResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeChannelBanCommand, se_DescribeChannelBanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeChannelBanCommand}.
 */
export interface DescribeChannelBanCommandInput extends DescribeChannelBanRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelBanCommand}.
 */
export interface DescribeChannelBanCommandOutput extends DescribeChannelBanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the full details of a channel ban.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeChannelBanCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeChannelBanCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DescribeChannelBanRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new DescribeChannelBanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelBanResponse
 * //   ChannelBan: { // ChannelBan
 * //     Member: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     ChannelArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     CreatedBy: {
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelBanRequest - {@link DescribeChannelBanRequest}
 * @returns {@link DescribeChannelBanResponse}
 * @see {@link DescribeChannelBanCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelBanCommandOutput} for command's `response` shape.
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
export class DescribeChannelBanCommand extends $Command<
  DescribeChannelBanCommandInput,
  DescribeChannelBanCommandOutput,
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
  constructor(readonly input: DescribeChannelBanCommandInput) {
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
  ): Handler<DescribeChannelBanCommandInput, DescribeChannelBanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChannelBanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeChannelBanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeChannelBanResponseFilterSensitiveLog,
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
  private serialize(input: DescribeChannelBanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeChannelBanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChannelBanCommandOutput> {
    return de_DescribeChannelBanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

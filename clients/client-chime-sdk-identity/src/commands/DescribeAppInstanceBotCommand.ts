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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import {
  DescribeAppInstanceBotRequest,
  DescribeAppInstanceBotResponse,
  DescribeAppInstanceBotResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppInstanceBotCommand, se_DescribeAppInstanceBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceBotCommand}.
 */
export interface DescribeAppInstanceBotCommandInput extends DescribeAppInstanceBotRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceBotCommand}.
 */
export interface DescribeAppInstanceBotCommandOutput extends DescribeAppInstanceBotResponse, __MetadataBearer {}

/**
 * @public
 * <p>The <code>AppInstanceBot's</code> information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceBotCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceBotCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceBotRequest
 *   AppInstanceBotArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceBotCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceBotResponse
 * //   AppInstanceBot: { // AppInstanceBot
 * //     AppInstanceBotArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Configuration: { // Configuration
 * //       Lex: { // LexConfiguration
 * //         RespondsTo: "STANDARD_MESSAGES",
 * //         InvokedBy: { // InvokedBy
 * //           StandardMessages: "AUTO" || "ALL" || "MENTIONS" || "NONE", // required
 * //           TargetedMessages: "ALL" || "NONE", // required
 * //         },
 * //         LexBotAliasArn: "STRING_VALUE", // required
 * //         LocaleId: "STRING_VALUE", // required
 * //         WelcomeIntent: "STRING_VALUE",
 * //       },
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Metadata: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceBotCommandInput - {@link DescribeAppInstanceBotCommandInput}
 * @returns {@link DescribeAppInstanceBotCommandOutput}
 * @see {@link DescribeAppInstanceBotCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceBotCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
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
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 */
export class DescribeAppInstanceBotCommand extends $Command<
  DescribeAppInstanceBotCommandInput,
  DescribeAppInstanceBotCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
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
  constructor(readonly input: DescribeAppInstanceBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppInstanceBotCommandInput, DescribeAppInstanceBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppInstanceBotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "DescribeAppInstanceBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeAppInstanceBotResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeIdentityService",
        operation: "DescribeAppInstanceBot",
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
  private serialize(input: DescribeAppInstanceBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppInstanceBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppInstanceBotCommandOutput> {
    return de_DescribeAppInstanceBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  CreateAppInstanceBotRequest,
  CreateAppInstanceBotRequestFilterSensitiveLog,
  CreateAppInstanceBotResponse,
} from "../models/models_0";
import { de_CreateAppInstanceBotCommand, se_CreateAppInstanceBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppInstanceBotCommand}.
 */
export interface CreateAppInstanceBotCommandInput extends CreateAppInstanceBotRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppInstanceBotCommand}.
 */
export interface CreateAppInstanceBotCommandOutput extends CreateAppInstanceBotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a bot under an Amazon Chime <code>AppInstance</code>. The request consists of a
 *          unique <code>Configuration</code> and <code>Name</code> for that bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceBotCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, CreateAppInstanceBotCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // CreateAppInstanceBotRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Configuration: { // Configuration
 *     Lex: { // LexConfiguration
 *       RespondsTo: "STANDARD_MESSAGES",
 *       InvokedBy: { // InvokedBy
 *         StandardMessages: "AUTO" || "ALL" || "MENTIONS" || "NONE", // required
 *         TargetedMessages: "ALL" || "NONE", // required
 *       },
 *       LexBotAliasArn: "STRING_VALUE", // required
 *       LocaleId: "STRING_VALUE", // required
 *       WelcomeIntent: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateAppInstanceBotCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppInstanceBotResponse
 * //   AppInstanceBotArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppInstanceBotCommandInput - {@link CreateAppInstanceBotCommandInput}
 * @returns {@link CreateAppInstanceBotCommandOutput}
 * @see {@link CreateAppInstanceBotCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceBotCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class CreateAppInstanceBotCommand extends $Command<
  CreateAppInstanceBotCommandInput,
  CreateAppInstanceBotCommandOutput,
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
  constructor(readonly input: CreateAppInstanceBotCommandInput) {
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
  ): Handler<CreateAppInstanceBotCommandInput, CreateAppInstanceBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppInstanceBotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "CreateAppInstanceBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppInstanceBotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeIdentityService",
        operation: "CreateAppInstanceBot",
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
  private serialize(input: CreateAppInstanceBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppInstanceBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppInstanceBotCommandOutput> {
    return de_CreateAppInstanceBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

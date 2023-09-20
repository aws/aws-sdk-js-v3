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
import { PutChannelExpirationSettingsRequest, PutChannelExpirationSettingsResponse } from "../models/models_0";
import {
  de_PutChannelExpirationSettingsCommand,
  se_PutChannelExpirationSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutChannelExpirationSettingsCommand}.
 */
export interface PutChannelExpirationSettingsCommandInput extends PutChannelExpirationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutChannelExpirationSettingsCommand}.
 */
export interface PutChannelExpirationSettingsCommandOutput
  extends PutChannelExpirationSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets the number of days before the channel is automatically deleted.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>A background process deletes expired channels within 6 hours of expiration.
 *             Actual deletion times may vary.</p>
 *                </li>
 *                <li>
 *                   <p>Expired channels that have not yet been deleted appear as active, and you can update
 *             their expiration settings. The system honors the new settings.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, PutChannelExpirationSettingsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, PutChannelExpirationSettingsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // PutChannelExpirationSettingsRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE",
 *   ExpirationSettings: { // ExpirationSettings
 *     ExpirationDays: Number("int"), // required
 *     ExpirationCriterion: "CREATED_TIMESTAMP" || "LAST_MESSAGE_TIMESTAMP", // required
 *   },
 * };
 * const command = new PutChannelExpirationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutChannelExpirationSettingsResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   ExpirationSettings: { // ExpirationSettings
 * //     ExpirationDays: Number("int"), // required
 * //     ExpirationCriterion: "CREATED_TIMESTAMP" || "LAST_MESSAGE_TIMESTAMP", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutChannelExpirationSettingsCommandInput - {@link PutChannelExpirationSettingsCommandInput}
 * @returns {@link PutChannelExpirationSettingsCommandOutput}
 * @see {@link PutChannelExpirationSettingsCommandInput} for command's `input` shape.
 * @see {@link PutChannelExpirationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
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
export class PutChannelExpirationSettingsCommand extends $Command<
  PutChannelExpirationSettingsCommandInput,
  PutChannelExpirationSettingsCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
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
  constructor(readonly input: PutChannelExpirationSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutChannelExpirationSettingsCommandInput, PutChannelExpirationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutChannelExpirationSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "PutChannelExpirationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "PutChannelExpirationSettings",
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
  private serialize(input: PutChannelExpirationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutChannelExpirationSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutChannelExpirationSettingsCommandOutput> {
    return de_PutChannelExpirationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

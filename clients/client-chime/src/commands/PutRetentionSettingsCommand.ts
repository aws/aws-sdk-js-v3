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
import { PutRetentionSettingsRequest, PutRetentionSettingsResponse } from "../models/models_1";
import { de_PutRetentionSettingsCommand, se_PutRetentionSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionSettingsCommand}.
 */
export interface PutRetentionSettingsCommandInput extends PutRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionSettingsCommand}.
 */
export interface PutRetentionSettingsCommandOutput extends PutRetentionSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 *          <p>
 * To turn off existing retention settings, remove the number of days from the corresponding
 * <b>RetentionDays</b>
 * field in the
 * <b>RetentionSettings</b>
 * object. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutRetentionSettingsRequest
 *   AccountId: "STRING_VALUE", // required
 *   RetentionSettings: { // RetentionSettings
 *     RoomRetentionSettings: { // RoomRetentionSettings
 *       RetentionDays: Number("int"),
 *     },
 *     ConversationRetentionSettings: { // ConversationRetentionSettings
 *       RetentionDays: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutRetentionSettingsResponse
 * //   RetentionSettings: { // RetentionSettings
 * //     RoomRetentionSettings: { // RoomRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //     ConversationRetentionSettings: { // ConversationRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //   },
 * //   InitiateDeletionTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutRetentionSettingsCommandInput - {@link PutRetentionSettingsCommandInput}
 * @returns {@link PutRetentionSettingsCommandOutput}
 * @see {@link PutRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
export class PutRetentionSettingsCommand extends $Command<
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
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
  constructor(readonly input: PutRetentionSettingsCommandInput) {
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
  ): Handler<PutRetentionSettingsCommandInput, PutRetentionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRetentionSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutRetentionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "PutRetentionSettings",
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
  private serialize(input: PutRetentionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRetentionSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRetentionSettingsCommandOutput> {
    return de_PutRetentionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

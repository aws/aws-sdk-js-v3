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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { StartImportRequest, StartImportRequestFilterSensitiveLog, StartImportResponse } from "../models/models_1";
import { de_StartImportCommand, se_StartImportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartImportCommand}.
 */
export interface StartImportCommandInput extends StartImportRequest {}
/**
 * @public
 *
 * The output of {@link StartImportCommand}.
 */
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts importing a bot, bot locale, or custom vocabulary from a zip
 *          archive that you uploaded to an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartImportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartImportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // StartImportRequest
 *   importId: "STRING_VALUE", // required
 *   resourceSpecification: { // ImportResourceSpecification
 *     botImportSpecification: { // BotImportSpecification
 *       botName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       dataPrivacy: { // DataPrivacy
 *         childDirected: true || false, // required
 *       },
 *       idleSessionTTLInSeconds: Number("int"),
 *       botTags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       testBotAliasTags: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     botLocaleImportSpecification: { // BotLocaleImportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *       nluIntentConfidenceThreshold: Number("double"),
 *       voiceSettings: { // VoiceSettings
 *         voiceId: "STRING_VALUE", // required
 *         engine: "standard" || "neural",
 *       },
 *     },
 *     customVocabularyImportSpecification: { // CustomVocabularyImportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *     testSetImportResourceSpecification: { // TestSetImportResourceSpecification
 *       testSetName: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       roleArn: "STRING_VALUE", // required
 *       storageLocation: { // TestSetStorageLocation
 *         s3BucketName: "STRING_VALUE", // required
 *         s3Path: "STRING_VALUE", // required
 *         kmsKeyArn: "STRING_VALUE",
 *       },
 *       importInputLocation: { // TestSetImportInputLocation
 *         s3BucketName: "STRING_VALUE", // required
 *         s3Path: "STRING_VALUE", // required
 *       },
 *       modality: "Text" || "Audio", // required
 *       testSetTags: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   mergeStrategy: "Overwrite" || "FailOnConflict" || "Append", // required
 *   filePassword: "STRING_VALUE",
 * };
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * // { // StartImportResponse
 * //   importId: "STRING_VALUE",
 * //   resourceSpecification: { // ImportResourceSpecification
 * //     botImportSpecification: { // BotImportSpecification
 * //       botName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       dataPrivacy: { // DataPrivacy
 * //         childDirected: true || false, // required
 * //       },
 * //       idleSessionTTLInSeconds: Number("int"),
 * //       botTags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       testBotAliasTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     botLocaleImportSpecification: { // BotLocaleImportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //       nluIntentConfidenceThreshold: Number("double"),
 * //       voiceSettings: { // VoiceSettings
 * //         voiceId: "STRING_VALUE", // required
 * //         engine: "standard" || "neural",
 * //       },
 * //     },
 * //     customVocabularyImportSpecification: { // CustomVocabularyImportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     testSetImportResourceSpecification: { // TestSetImportResourceSpecification
 * //       testSetName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE", // required
 * //       storageLocation: { // TestSetStorageLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       importInputLocation: { // TestSetImportInputLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //       },
 * //       modality: "Text" || "Audio", // required
 * //       testSetTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   mergeStrategy: "Overwrite" || "FailOnConflict" || "Append",
 * //   importStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartImportCommandInput - {@link StartImportCommandInput}
 * @returns {@link StartImportCommandOutput}
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class StartImportCommand extends $Command<
  StartImportCommandInput,
  StartImportCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: StartImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartImportCommandInput, StartImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartImportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "StartImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartImportRequestFilterSensitiveLog,
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
  private serialize(input: StartImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImportCommandOutput> {
    return de_StartImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

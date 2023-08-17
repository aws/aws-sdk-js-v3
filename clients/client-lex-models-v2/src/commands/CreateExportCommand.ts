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
import { CreateExportRequest, CreateExportRequestFilterSensitiveLog, CreateExportResponse } from "../models/models_0";
import { de_CreateExportCommand, se_CreateExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateExportCommand}.
 */
export interface CreateExportCommandInput extends CreateExportRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportCommand}.
 */
export interface CreateExportCommandOutput extends CreateExportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a zip archive containing the contents of a bot or a bot
 *          locale. The archive contains a directory structure that contains JSON
 *          files that define the bot.</p>
 *          <p>You can create an archive that contains the complete definition of a
 *          bot, or you can specify that the archive contain only the definition of
 *          a single bot locale.</p>
 *          <p>For more information about exporting bots, and about the structure
 *          of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and
 *             exporting bots </a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateExportRequest
 *   resourceSpecification: { // ExportResourceSpecification
 *     botExportSpecification: { // BotExportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *     },
 *     botLocaleExportSpecification: { // BotLocaleExportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *     customVocabularyExportSpecification: { // CustomVocabularyExportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *     testSetExportSpecification: { // TestSetExportSpecification
 *       testSetId: "STRING_VALUE", // required
 *     },
 *   },
 *   fileFormat: "LexJson" || "TSV" || "CSV", // required
 *   filePassword: "STRING_VALUE",
 * };
 * const command = new CreateExportCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportResponse
 * //   exportId: "STRING_VALUE",
 * //   resourceSpecification: { // ExportResourceSpecification
 * //     botExportSpecification: { // BotExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //     },
 * //     botLocaleExportSpecification: { // BotLocaleExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     customVocabularyExportSpecification: { // CustomVocabularyExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     testSetExportSpecification: { // TestSetExportSpecification
 * //       testSetId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   fileFormat: "LexJson" || "TSV" || "CSV",
 * //   exportStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateExportCommandInput - {@link CreateExportCommandInput}
 * @returns {@link CreateExportCommandOutput}
 * @see {@link CreateExportCommandInput} for command's `input` shape.
 * @see {@link CreateExportCommandOutput} for command's `response` shape.
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
export class CreateExportCommand extends $Command<
  CreateExportCommandInput,
  CreateExportCommandOutput,
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
  constructor(readonly input: CreateExportCommandInput) {
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
  ): Handler<CreateExportCommandInput, CreateExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateExportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExportRequestFilterSensitiveLog,
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
  private serialize(input: CreateExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExportCommandOutput> {
    return de_CreateExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

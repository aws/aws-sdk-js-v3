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
  ImportTerminologyRequest,
  ImportTerminologyRequestFilterSensitiveLog,
  ImportTerminologyResponse,
} from "../models/models_0";
import { de_ImportTerminologyCommand, se_ImportTerminologyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportTerminologyCommand}.
 */
export interface ImportTerminologyCommandInput extends ImportTerminologyRequest {}
/**
 * @public
 *
 * The output of {@link ImportTerminologyCommand}.
 */
export interface ImportTerminologyCommandOutput extends ImportTerminologyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a custom terminology, depending on whether one already exists for the
 *       given terminology name. Importing a terminology with the same name as an existing one will
 *       merge the terminologies based on the chosen merge strategy. The only supported merge strategy
 *       is OVERWRITE, where the imported terminology overwrites the existing terminology of the same
 *       name.</p>
 *          <p>If you import a terminology that overwrites an existing one, the new terminology takes up
 *       to 10 minutes to fully propagate. After that, translations have access to the new
 *       terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ImportTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ImportTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // ImportTerminologyRequest
 *   Name: "STRING_VALUE", // required
 *   MergeStrategy: "OVERWRITE", // required
 *   Description: "STRING_VALUE",
 *   TerminologyData: { // TerminologyData
 *     File: "BLOB_VALUE", // required
 *     Format: "CSV" || "TMX" || "TSV", // required
 *     Directionality: "UNI" || "MULTI",
 *   },
 *   EncryptionKey: { // EncryptionKey
 *     Type: "KMS", // required
 *     Id: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportTerminologyCommand(input);
 * const response = await client.send(command);
 * // { // ImportTerminologyResponse
 * //   TerminologyProperties: { // TerminologyProperties
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     SourceLanguageCode: "STRING_VALUE",
 * //     TargetLanguageCodes: [ // LanguageCodeStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     EncryptionKey: { // EncryptionKey
 * //       Type: "KMS", // required
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //     SizeBytes: Number("int"),
 * //     TermCount: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     Directionality: "UNI" || "MULTI",
 * //     Message: "STRING_VALUE",
 * //     SkippedTermCount: Number("int"),
 * //     Format: "CSV" || "TMX" || "TSV",
 * //   },
 * //   AuxiliaryDataLocation: { // TerminologyDataLocation
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportTerminologyCommandInput - {@link ImportTerminologyCommandInput}
 * @returns {@link ImportTerminologyCommandOutput}
 * @see {@link ImportTerminologyCommandInput} for command's `input` shape.
 * @see {@link ImportTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have added too many tags to this resource. The maximum is 50 tags.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class ImportTerminologyCommand extends $Command<
  ImportTerminologyCommandInput,
  ImportTerminologyCommandOutput,
  TranslateClientResolvedConfig
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
  constructor(readonly input: ImportTerminologyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportTerminologyCommandInput, ImportTerminologyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportTerminologyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ImportTerminologyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportTerminologyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSShineFrontendService_20170701",
        operation: "ImportTerminology",
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
  private serialize(input: ImportTerminologyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportTerminologyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportTerminologyCommandOutput> {
    return de_ImportTerminologyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

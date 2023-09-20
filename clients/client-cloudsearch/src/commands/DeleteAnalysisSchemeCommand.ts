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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteAnalysisSchemeRequest, DeleteAnalysisSchemeResponse } from "../models/models_0";
import { de_DeleteAnalysisSchemeCommand, se_DeleteAnalysisSchemeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnalysisSchemeCommand}.
 */
export interface DeleteAnalysisSchemeCommandInput extends DeleteAnalysisSchemeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnalysisSchemeCommand}.
 */
export interface DeleteAnalysisSchemeCommandOutput extends DeleteAnalysisSchemeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DeleteAnalysisSchemeRequest
 *   DomainName: "STRING_VALUE", // required
 *   AnalysisSchemeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnalysisSchemeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnalysisSchemeResponse
 * //   AnalysisScheme: { // AnalysisSchemeStatus
 * //     Options: { // AnalysisScheme
 * //       AnalysisSchemeName: "STRING_VALUE", // required
 * //       AnalysisSchemeLanguage: "ar" || "bg" || "ca" || "cs" || "da" || "de" || "el" || "en" || "es" || "eu" || "fa" || "fi" || "fr" || "ga" || "gl" || "he" || "hi" || "hu" || "hy" || "id" || "it" || "ja" || "ko" || "lv" || "mul" || "nl" || "no" || "pt" || "ro" || "ru" || "sv" || "th" || "tr" || "zh-Hans" || "zh-Hant", // required
 * //       AnalysisOptions: { // AnalysisOptions
 * //         Synonyms: "STRING_VALUE",
 * //         Stopwords: "STRING_VALUE",
 * //         StemmingDictionary: "STRING_VALUE",
 * //         JapaneseTokenizationDictionary: "STRING_VALUE",
 * //         AlgorithmicStemming: "none" || "minimal" || "light" || "full",
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAnalysisSchemeCommandInput - {@link DeleteAnalysisSchemeCommandInput}
 * @returns {@link DeleteAnalysisSchemeCommandOutput}
 * @see {@link DeleteAnalysisSchemeCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisSchemeCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DeleteAnalysisSchemeCommand extends $Command<
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput,
  CloudSearchClientResolvedConfig
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
  constructor(readonly input: DeleteAnalysisSchemeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAnalysisSchemeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DeleteAnalysisSchemeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "A9SearchCloudConfigService2013",
        operation: "DeleteAnalysisScheme",
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
  private serialize(input: DeleteAnalysisSchemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAnalysisSchemeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnalysisSchemeCommandOutput> {
    return de_DeleteAnalysisSchemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

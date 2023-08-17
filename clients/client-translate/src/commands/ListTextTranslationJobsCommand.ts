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

import { ListTextTranslationJobsRequest, ListTextTranslationJobsResponse } from "../models/models_0";
import { de_ListTextTranslationJobsCommand, se_ListTextTranslationJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTextTranslationJobsCommand}.
 */
export interface ListTextTranslationJobsCommandInput extends ListTextTranslationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTextTranslationJobsCommand}.
 */
export interface ListTextTranslationJobsCommandOutput extends ListTextTranslationJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the batch translation jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTextTranslationJobsCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTextTranslationJobsCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // ListTextTranslationJobsRequest
 *   Filter: { // TextTranslationJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmittedBeforeTime: new Date("TIMESTAMP"),
 *     SubmittedAfterTime: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTextTranslationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTextTranslationJobsResponse
 * //   TextTranslationJobPropertiesList: [ // TextTranslationJobPropertiesList
 * //     { // TextTranslationJobProperties
 * //       JobId: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       JobDetails: { // JobDetails
 * //         TranslatedDocumentsCount: Number("int"),
 * //         DocumentsWithErrorsCount: Number("int"),
 * //         InputDocumentsCount: Number("int"),
 * //       },
 * //       SourceLanguageCode: "STRING_VALUE",
 * //       TargetLanguageCodes: [ // TargetLanguageCodeStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       TerminologyNames: [ // ResourceNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       ParallelDataNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Message: "STRING_VALUE",
 * //       SubmittedTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         ContentType: "STRING_VALUE", // required
 * //       },
 * //       OutputDataConfig: { // OutputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         EncryptionKey: { // EncryptionKey
 * //           Type: "KMS", // required
 * //           Id: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       Settings: { // TranslationSettings
 * //         Formality: "FORMAL" || "INFORMAL",
 * //         Profanity: "MASK",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTextTranslationJobsCommandInput - {@link ListTextTranslationJobsCommandInput}
 * @returns {@link ListTextTranslationJobsCommandOutput}
 * @see {@link ListTextTranslationJobsCommandInput} for command's `input` shape.
 * @see {@link ListTextTranslationJobsCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is not valid. Specify a different filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class ListTextTranslationJobsCommand extends $Command<
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
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
  constructor(readonly input: ListTextTranslationJobsCommandInput) {
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
  ): Handler<ListTextTranslationJobsCommandInput, ListTextTranslationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTextTranslationJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListTextTranslationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListTextTranslationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTextTranslationJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTextTranslationJobsCommandOutput> {
    return de_ListTextTranslationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

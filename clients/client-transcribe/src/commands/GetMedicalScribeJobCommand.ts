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

import { GetMedicalScribeJobRequest, GetMedicalScribeJobResponse } from "../models/models_0";
import { de_GetMedicalScribeJobCommand, se_GetMedicalScribeJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMedicalScribeJobCommand}.
 */
export interface GetMedicalScribeJobCommandInput extends GetMedicalScribeJobRequest {}
/**
 * @public
 *
 * The output of {@link GetMedicalScribeJobCommand}.
 */
export interface GetMedicalScribeJobCommandOutput extends GetMedicalScribeJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about the specified Medical Scribe job.</p>
 *          <p>To view the status of the specified medical transcription job, check the
 *                 <code>MedicalScribeJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished. You can find the results at the location specified in
 *                 <code>MedicalScribeOutput</code>.
 *                 If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your Medical Scribe job
 *             failed.</p>
 *          <p>To get a list of your Medical Scribe jobs, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetMedicalScribeJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetMedicalScribeJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // GetMedicalScribeJobRequest
 *   MedicalScribeJobName: "STRING_VALUE", // required
 * };
 * const command = new GetMedicalScribeJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMedicalScribeJobResponse
 * //   MedicalScribeJob: { // MedicalScribeJob
 * //     MedicalScribeJobName: "STRING_VALUE",
 * //     MedicalScribeJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "en-US",
 * //     Media: { // Media
 * //       MediaFileUri: "STRING_VALUE",
 * //       RedactedMediaFileUri: "STRING_VALUE",
 * //     },
 * //     MedicalScribeOutput: { // MedicalScribeOutput
 * //       TranscriptFileUri: "STRING_VALUE", // required
 * //       ClinicalDocumentUri: "STRING_VALUE", // required
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     FailureReason: "STRING_VALUE",
 * //     Settings: { // MedicalScribeSettings
 * //       ShowSpeakerLabels: true || false,
 * //       MaxSpeakerLabels: Number("int"),
 * //       ChannelIdentification: true || false,
 * //       VocabularyName: "STRING_VALUE",
 * //       VocabularyFilterName: "STRING_VALUE",
 * //       VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     ChannelDefinitions: [ // MedicalScribeChannelDefinitions
 * //       { // MedicalScribeChannelDefinition
 * //         ChannelId: Number("int"), // required
 * //         ParticipantRole: "PATIENT" || "CLINICIAN", // required
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMedicalScribeJobCommandInput - {@link GetMedicalScribeJobCommandInput}
 * @returns {@link GetMedicalScribeJobCommandOutput}
 * @see {@link GetMedicalScribeJobCommandInput} for command's `input` shape.
 * @see {@link GetMedicalScribeJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 */
export class GetMedicalScribeJobCommand extends $Command<
  GetMedicalScribeJobCommandInput,
  GetMedicalScribeJobCommandOutput,
  TranscribeClientResolvedConfig
> {
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
  constructor(readonly input: GetMedicalScribeJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMedicalScribeJobCommandInput, GetMedicalScribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMedicalScribeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetMedicalScribeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "GetMedicalScribeJob",
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
  private serialize(input: GetMedicalScribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMedicalScribeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMedicalScribeJobCommandOutput> {
    return de_GetMedicalScribeJobCommand(output, context);
  }
}

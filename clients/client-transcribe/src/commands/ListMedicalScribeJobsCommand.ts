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

import { ListMedicalScribeJobsRequest, ListMedicalScribeJobsResponse } from "../models/models_0";
import { de_ListMedicalScribeJobsCommand, se_ListMedicalScribeJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMedicalScribeJobsCommand}.
 */
export interface ListMedicalScribeJobsCommandInput extends ListMedicalScribeJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMedicalScribeJobsCommand}.
 */
export interface ListMedicalScribeJobsCommandOutput extends ListMedicalScribeJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of Medical Scribe jobs that match the specified criteria. If no
 *             criteria are specified, all Medical Scribe jobs are returned.</p>
 *          <p>To get detailed information about a specific Medical Scribe job, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalScribeJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalScribeJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // ListMedicalScribeJobsRequest
 *   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   JobNameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMedicalScribeJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMedicalScribeJobsResponse
 * //   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   NextToken: "STRING_VALUE",
 * //   MedicalScribeJobSummaries: [ // MedicalScribeJobSummaries
 * //     { // MedicalScribeJobSummary
 * //       MedicalScribeJobName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "en-US",
 * //       MedicalScribeJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMedicalScribeJobsCommandInput - {@link ListMedicalScribeJobsCommandInput}
 * @returns {@link ListMedicalScribeJobsCommandOutput}
 * @see {@link ListMedicalScribeJobsCommandInput} for command's `input` shape.
 * @see {@link ListMedicalScribeJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 */
export class ListMedicalScribeJobsCommand extends $Command<
  ListMedicalScribeJobsCommandInput,
  ListMedicalScribeJobsCommandOutput,
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
  constructor(readonly input: ListMedicalScribeJobsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMedicalScribeJobsCommandInput, ListMedicalScribeJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMedicalScribeJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListMedicalScribeJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "ListMedicalScribeJobs",
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
  private serialize(input: ListMedicalScribeJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMedicalScribeJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMedicalScribeJobsCommandOutput> {
    return de_ListMedicalScribeJobsCommand(output, context);
  }
}

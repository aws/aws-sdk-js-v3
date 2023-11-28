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

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { ListIngestionJobsRequest, ListIngestionJobsResponse } from "../models/models_0";
import { de_ListIngestionJobsCommand, se_ListIngestionJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIngestionJobsCommand}.
 */
export interface ListIngestionJobsCommandInput extends ListIngestionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionJobsCommand}.
 */
export interface ListIngestionJobsCommandOutput extends ListIngestionJobsResponse, __MetadataBearer {}

/**
 * @public
 * List ingestion jobs
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListIngestionJobsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListIngestionJobsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListIngestionJobsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   filters: [ // IngestionJobFilters
 *     { // IngestionJobFilter
 *       attribute: "STATUS", // required
 *       operator: "EQ", // required
 *       values: [ // IngestionJobFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   sortBy: { // IngestionJobSortBy
 *     attribute: "STATUS" || "STARTED_AT", // required
 *     order: "ASCENDING" || "DESCENDING", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIngestionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionJobsResponse
 * //   ingestionJobSummaries: [ // IngestionJobSummaries // required
 * //     { // IngestionJobSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       dataSourceId: "STRING_VALUE", // required
 * //       ingestionJobId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       statistics: { // IngestionJobStatistics
 * //         numberOfDocumentsScanned: Number("long"),
 * //         numberOfNewDocumentsIndexed: Number("long"),
 * //         numberOfModifiedDocumentsIndexed: Number("long"),
 * //         numberOfDocumentsDeleted: Number("long"),
 * //         numberOfDocumentsFailed: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestionJobsCommandInput - {@link ListIngestionJobsCommandInput}
 * @returns {@link ListIngestionJobsCommandOutput}
 * @see {@link ListIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class ListIngestionJobsCommand extends $Command<
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput,
  BedrockAgentClientResolvedConfig
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
  constructor(readonly input: ListIngestionJobsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIngestionJobsCommandInput, ListIngestionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIngestionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "ListIngestionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "ListIngestionJobs",
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
  private serialize(input: ListIngestionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIngestionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIngestionJobsCommandOutput> {
    return de_ListIngestionJobsCommand(output, context);
  }
}

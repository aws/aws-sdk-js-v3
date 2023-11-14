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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput } from "../models/models_0";
import { de_BatchGetQueryExecutionCommand, se_BatchGetQueryExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetQueryExecutionCommand}.
 */
export interface BatchGetQueryExecutionCommandInput extends BatchGetQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link BatchGetQueryExecutionCommand}.
 */
export interface BatchGetQueryExecutionCommandOutput extends BatchGetQueryExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of a single query execution or a list of up to 50 query
 *             executions, which you provide as an array of query execution ID strings. Requires you to
 *             have access to the workgroup in which the queries ran. To get a list of query execution
 *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
 *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
 *             about named queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // BatchGetQueryExecutionInput
 *   QueryExecutionIds: [ // QueryExecutionIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetQueryExecutionOutput
 * //   QueryExecutions: [ // QueryExecutionList
 * //     { // QueryExecution
 * //       QueryExecutionId: "STRING_VALUE",
 * //       Query: "STRING_VALUE",
 * //       StatementType: "DDL" || "DML" || "UTILITY",
 * //       ResultConfiguration: { // ResultConfiguration
 * //         OutputLocation: "STRING_VALUE",
 * //         EncryptionConfiguration: { // EncryptionConfiguration
 * //           EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //           KmsKey: "STRING_VALUE",
 * //         },
 * //         ExpectedBucketOwner: "STRING_VALUE",
 * //         AclConfiguration: { // AclConfiguration
 * //           S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 * //         },
 * //       },
 * //       ResultReuseConfiguration: { // ResultReuseConfiguration
 * //         ResultReuseByAgeConfiguration: { // ResultReuseByAgeConfiguration
 * //           Enabled: true || false, // required
 * //           MaxAgeInMinutes: Number("int"),
 * //         },
 * //       },
 * //       QueryExecutionContext: { // QueryExecutionContext
 * //         Database: "STRING_VALUE",
 * //         Catalog: "STRING_VALUE",
 * //       },
 * //       Status: { // QueryExecutionStatus
 * //         State: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 * //         StateChangeReason: "STRING_VALUE",
 * //         SubmissionDateTime: new Date("TIMESTAMP"),
 * //         CompletionDateTime: new Date("TIMESTAMP"),
 * //         AthenaError: { // AthenaError
 * //           ErrorCategory: Number("int"),
 * //           ErrorType: Number("int"),
 * //           Retryable: true || false,
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       Statistics: { // QueryExecutionStatistics
 * //         EngineExecutionTimeInMillis: Number("long"),
 * //         DataScannedInBytes: Number("long"),
 * //         DataManifestLocation: "STRING_VALUE",
 * //         TotalExecutionTimeInMillis: Number("long"),
 * //         QueryQueueTimeInMillis: Number("long"),
 * //         QueryPlanningTimeInMillis: Number("long"),
 * //         ServiceProcessingTimeInMillis: Number("long"),
 * //         ResultReuseInformation: { // ResultReuseInformation
 * //           ReusedPreviousResult: true || false, // required
 * //         },
 * //       },
 * //       WorkGroup: "STRING_VALUE",
 * //       EngineVersion: { // EngineVersion
 * //         SelectedEngineVersion: "STRING_VALUE",
 * //         EffectiveEngineVersion: "STRING_VALUE",
 * //       },
 * //       ExecutionParameters: [ // ExecutionParameters
 * //         "STRING_VALUE",
 * //       ],
 * //       SubstatementType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedQueryExecutionIds: [ // UnprocessedQueryExecutionIdList
 * //     { // UnprocessedQueryExecutionId
 * //       QueryExecutionId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetQueryExecutionCommandInput - {@link BatchGetQueryExecutionCommandInput}
 * @returns {@link BatchGetQueryExecutionCommandOutput}
 * @see {@link BatchGetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link BatchGetQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class BatchGetQueryExecutionCommand extends $Command<
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: BatchGetQueryExecutionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetQueryExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "BatchGetQueryExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "BatchGetQueryExecution",
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
  private serialize(input: BatchGetQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetQueryExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetQueryExecutionCommandOutput> {
    return de_BatchGetQueryExecutionCommand(output, context);
  }
}

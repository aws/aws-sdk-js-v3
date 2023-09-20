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
import { GetQueryResultsInput, GetQueryResultsOutput } from "../models/models_0";
import { de_GetQueryResultsCommand, se_GetQueryResultsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandInput extends GetQueryResultsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Streams the results of a single query execution specified by
 *                 <code>QueryExecutionId</code> from the Athena query results location in
 *                 Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and
 *                 output files</a> in the <i>Amazon Athena User Guide</i>.
 *             This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p>
 *          <p>To stream query results successfully, the IAM principal with permission to call
 *                 <code>GetQueryResults</code> also must have permissions to the Amazon S3
 *             <code>GetObject</code> action for the Athena query results location.</p>
 *          <important>
 *             <p>IAM principals with permission to the Amazon S3
 *                 <code>GetObject</code> action for the query results location are able to retrieve
 *                 query results from Amazon S3 even if permission to the
 *                     <code>GetQueryResults</code> action is denied. To restrict user or role access,
 *                 ensure that Amazon S3 permissions to the Athena query location
 *                 are denied.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryResultsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryResultsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetQueryResultsInput
 *   QueryExecutionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsOutput
 * //   UpdateCount: Number("long"),
 * //   ResultSet: { // ResultSet
 * //     Rows: [ // RowList
 * //       { // Row
 * //         Data: [ // datumList
 * //           { // Datum
 * //             VarCharValue: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ResultSetMetadata: { // ResultSetMetadata
 * //       ColumnInfo: [ // ColumnInfoList
 * //         { // ColumnInfo
 * //           CatalogName: "STRING_VALUE",
 * //           SchemaName: "STRING_VALUE",
 * //           TableName: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //           Label: "STRING_VALUE",
 * //           Type: "STRING_VALUE", // required
 * //           Precision: Number("int"),
 * //           Scale: Number("int"),
 * //           Nullable: "NOT_NULL" || "NULLABLE" || "UNKNOWN",
 * //           CaseSensitive: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsCommandInput - {@link GetQueryResultsCommandInput}
 * @returns {@link GetQueryResultsCommandOutput}
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetQueryResultsCommand extends $Command<
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetQueryResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryResultsCommandInput, GetQueryResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetQueryResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "GetQueryResults",
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
  private serialize(input: GetQueryResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQueryResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryResultsCommandOutput> {
    return de_GetQueryResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetQueryResultsRequest, GetQueryResultsResponse } from "../models/models_0";
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
export interface GetQueryResultsCommandInput extends GetQueryResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets event data results of a query. You must specify the <code>QueryID</code> value
 *          returned by the <code>StartQuery</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetQueryResultsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetQueryResultsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // GetQueryResultsRequest
 *   EventDataStore: "STRING_VALUE",
 *   QueryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxQueryResults: Number("int"),
 * };
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsResponse
 * //   QueryStatus: "QUEUED" || "RUNNING" || "FINISHED" || "FAILED" || "CANCELLED" || "TIMED_OUT",
 * //   QueryStatistics: { // QueryStatistics
 * //     ResultsCount: Number("int"),
 * //     TotalResultsCount: Number("int"),
 * //     BytesScanned: Number("long"),
 * //   },
 * //   QueryResultRows: [ // QueryResultRows
 * //     [ // QueryResultRow
 * //       { // QueryResultColumn
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     ],
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsCommandInput - {@link GetQueryResultsCommandInput}
 * @returns {@link GetQueryResultsCommandOutput}
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>This exception is thrown if the limit specified is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link QueryIdNotFoundException} (client fault)
 *  <p>The query ID does not exist or does not map to a query.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class GetQueryResultsCommand extends $Command<
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
  CloudTrailClientResolvedConfig
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
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryResultsCommandInput, GetQueryResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetQueryResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
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

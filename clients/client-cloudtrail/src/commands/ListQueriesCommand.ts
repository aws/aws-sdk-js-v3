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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListQueriesRequest, ListQueriesResponse } from "../models/models_0";
import { de_ListQueriesCommand, se_ListQueriesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListQueriesCommand}.
 */
export interface ListQueriesCommandInput extends ListQueriesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueriesCommand}.
 */
export interface ListQueriesCommandOutput extends ListQueriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of queries and query statuses for the past seven days. You must specify
 *          an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results,
 *          you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and
 *             <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for
 *             <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>,
 *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
 *             <code>CANCELLED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListQueriesCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListQueriesCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // ListQueriesRequest
 *   EventDataStore: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   QueryStatus: "QUEUED" || "RUNNING" || "FINISHED" || "FAILED" || "CANCELLED" || "TIMED_OUT",
 * };
 * const command = new ListQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueriesResponse
 * //   Queries: [ // Queries
 * //     { // Query
 * //       QueryId: "STRING_VALUE",
 * //       QueryStatus: "QUEUED" || "RUNNING" || "FINISHED" || "FAILED" || "CANCELLED" || "TIMED_OUT",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueriesCommandInput - {@link ListQueriesCommandInput}
 * @returns {@link ListQueriesCommandOutput}
 * @see {@link ListQueriesCommandInput} for command's `input` shape.
 * @see {@link ListQueriesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidDateRangeException} (client fault)
 *  <p>A date range for the query was specified that is not valid. Be sure that the start time
 *          is chronologically before the end time. For more information about writing a query, see
 *             <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User Guide</i>.</p>
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
 * @throws {@link InvalidQueryStatusException} (client fault)
 *  <p>The query status is not valid for the operation.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class ListQueriesCommand extends $Command<
  ListQueriesCommandInput,
  ListQueriesCommandOutput,
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
  constructor(readonly input: ListQueriesCommandInput) {
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
  ): Handler<ListQueriesCommandInput, ListQueriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListQueriesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "ListQueriesCommand";
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
  private serialize(input: ListQueriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListQueriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueriesCommandOutput> {
    return de_ListQueriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

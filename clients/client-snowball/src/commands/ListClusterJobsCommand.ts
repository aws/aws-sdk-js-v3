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

import { ListClusterJobsRequest, ListClusterJobsResult } from "../models/models_0";
import { de_ListClusterJobsCommand, se_ListClusterJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClusterJobsCommand}.
 */
export interface ListClusterJobsCommandInput extends ListClusterJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterJobsCommand}.
 */
export interface ListClusterJobsCommandOutput extends ListClusterJobsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
 *       state, a job's ID, and other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClusterJobsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClusterJobsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // ListClusterJobsRequest
 *   ClusterId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterJobsResult
 * //   JobListEntries: [ // JobListEntryList
 * //     { // JobListEntry
 * //       JobId: "STRING_VALUE",
 * //       JobState: "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //       IsMaster: true || false,
 * //       JobType: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //       SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterJobsCommandInput - {@link ListClusterJobsCommandInput}
 * @returns {@link ListClusterJobsCommandOutput}
 * @see {@link ListClusterJobsCommandInput} for command's `input` shape.
 * @see {@link ListClusterJobsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To get a list of jobs in a cluster that you've created for AWS Snowball
 * ```javascript
 * // Returns an array of JobListEntry objects of the specified length. Each JobListEntry object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
 * const input = {
 *   "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JobListEntries": [
 *     {
 *       "CreationDate": "1480475524.0",
 *       "Description": "MyClustrer-node-001",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-002",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440001",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-003",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440002",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-004",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440003",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-005",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440004",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-jobs-in-a-cluster-that-youve-created-for-aws-snowball-1482863105773
 * ```
 *
 */
export class ListClusterJobsCommand extends $Command<
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: ListClusterJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterJobsCommandInput, ListClusterJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClusterJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListClusterJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "ListClusterJobs",
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
  private serialize(input: ListClusterJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClusterJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterJobsCommandOutput> {
    return de_ListClusterJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

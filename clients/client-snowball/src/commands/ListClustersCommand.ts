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

import { ListClustersRequest, ListClustersResult } from "../models/models_0";
import { de_ListClustersCommand, se_ListClustersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each
 *         <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other
 *       important status information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClustersCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClustersCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // ListClustersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersResult
 * //   ClusterListEntries: [ // ClusterListEntryList
 * //     { // ClusterListEntry
 * //       ClusterId: "STRING_VALUE",
 * //       ClusterState: "AwaitingQuorum" || "Pending" || "InUse" || "Complete" || "Cancelled",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To get a list of clusters that you've created for AWS Snowball
 * ```javascript
 * // Returns an array of ClusterListEntry objects of the specified length. Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.
 * const input = {};
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ClusterListEntries": [
 *     {
 *       "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
 *       "ClusterState": "Pending",
 *       "CreationDate": "1480475517.0",
 *       "Description": "MyCluster"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-clusters-that-youve-created-for-aws-snowball-1482862223003
 * ```
 *
 */
export class ListClustersCommand extends $Command<
  ListClustersCommandInput,
  ListClustersCommandOutput,
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
  constructor(readonly input: ListClustersCommandInput) {
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
  ): Handler<ListClustersCommandInput, ListClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListClustersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "ListClusters",
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
  private serialize(input: ListClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClustersCommandOutput> {
    return de_ListClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

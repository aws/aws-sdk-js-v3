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

import { DBClusterBacktrackMessage, DescribeDBClusterBacktracksMessage } from "../models/models_0";
import { de_DescribeDBClusterBacktracksCommand, se_DescribeDBClusterBacktracksCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterBacktracksCommand}.
 */
export interface DescribeDBClusterBacktracksCommandInput extends DescribeDBClusterBacktracksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterBacktracksCommand}.
 */
export interface DescribeDBClusterBacktracksCommandOutput extends DBClusterBacktrackMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about backtracks for a DB cluster.</p>
 *          <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterBacktracksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterBacktracksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterBacktracksMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   BacktrackIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBClusterBacktracksCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterBacktrackMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterBacktracks: [ // DBClusterBacktrackList
 * //     { // DBClusterBacktrack
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       BacktrackIdentifier: "STRING_VALUE",
 * //       BacktrackTo: new Date("TIMESTAMP"),
 * //       BacktrackedFrom: new Date("TIMESTAMP"),
 * //       BacktrackRequestCreationTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterBacktracksCommandInput - {@link DescribeDBClusterBacktracksCommandInput}
 * @returns {@link DescribeDBClusterBacktracksCommandOutput}
 * @see {@link DescribeDBClusterBacktracksCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterBacktracksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterBacktrackNotFoundFault} (client fault)
 *  <p>
 *             <code>BacktrackIdentifier</code> doesn't refer to an existing backtrack.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe backtracks for a DB cluster
 * ```javascript
 * // The following example retrieves details about the specified DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "mydbcluster"
 * };
 * const command = new DescribeDBClusterBacktracksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterBacktracks": [
 *     {
 *       "BacktrackIdentifier": "2f5f5294-0dd2-44c9-9f50-EXAMPLE",
 *       "BacktrackRequestCreationTime": "2021-02-12T14:36:18.819Z",
 *       "BacktrackTo": "2021-02-12T04:59:22Z",
 *       "BacktrackedFrom": "2021-02-12T14:37:31.640Z",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Status": "COMPLETED"
 *     },
 *     {
 *       "BacktrackIdentifier": "3c7a6421-af2a-4ea3-ae95-EXAMPLE",
 *       "BacktrackRequestCreationTime": "2021-02-12T00:07:53.487Z",
 *       "BacktrackTo": "2021-02-11T22:53:46Z",
 *       "BacktrackedFrom": "2021-02-12T00:09:27.006Z",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Status": "COMPLETED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-backtracks-for-a-db-cluster-1680212191454
 * ```
 *
 */
export class DescribeDBClusterBacktracksCommand extends $Command<
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeDBClusterBacktracksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterBacktracksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterBacktracksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterBacktracks",
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
  private serialize(input: DescribeDBClusterBacktracksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClusterBacktracksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterBacktracksCommandOutput> {
    return de_DescribeDBClusterBacktracksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

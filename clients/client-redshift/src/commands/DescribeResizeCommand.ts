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

import { ResizeProgressMessage } from "../models/models_0";
import { DescribeResizeMessage } from "../models/models_1";
import { de_DescribeResizeCommand, se_DescribeResizeCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeResizeCommand}.
 */
export interface DescribeResizeCommandInput extends DescribeResizeMessage {}
/**
 * @public
 *
 * The output of {@link DescribeResizeCommand}.
 */
export interface DescribeResizeCommandOutput extends ResizeProgressMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the last resize operation for the specified cluster. If
 *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
 *                 404</code> error is returned. If a resize operation was initiated and completed, the
 *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
 *          <p>A resize operation can be requested using <a>ModifyCluster</a> and
 *             specifying a different number or type of nodes for the cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeResizeMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeResizeCommand(input);
 * const response = await client.send(command);
 * // { // ResizeProgressMessage
 * //   TargetNodeType: "STRING_VALUE",
 * //   TargetNumberOfNodes: Number("int"),
 * //   TargetClusterType: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   ImportTablesCompleted: [ // ImportTablesCompleted
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportTablesInProgress: [ // ImportTablesInProgress
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportTablesNotStarted: [ // ImportTablesNotStarted
 * //     "STRING_VALUE",
 * //   ],
 * //   AvgResizeRateInMegaBytesPerSecond: Number("double"),
 * //   TotalResizeDataInMegaBytes: Number("long"),
 * //   ProgressInMegaBytes: Number("long"),
 * //   ElapsedTimeInSeconds: Number("long"),
 * //   EstimatedTimeToCompletionInSeconds: Number("long"),
 * //   ResizeType: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   TargetEncryptionType: "STRING_VALUE",
 * //   DataTransferProgressPercent: Number("double"),
 * // };
 *
 * ```
 *
 * @param DescribeResizeCommandInput - {@link DescribeResizeCommandInput}
 * @returns {@link DescribeResizeCommandOutput}
 * @see {@link DescribeResizeCommandInput} for command's `input` shape.
 * @see {@link DescribeResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ResizeNotFoundFault} (client fault)
 *  <p>A resize operation for the specified cluster is not found.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeResizeCommand extends $Command<
  DescribeResizeCommandInput,
  DescribeResizeCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeResizeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResizeCommandInput, DescribeResizeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeResizeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeResizeCommand";
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
  private serialize(input: DescribeResizeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeResizeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeResizeCommandOutput> {
    return de_DescribeResizeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

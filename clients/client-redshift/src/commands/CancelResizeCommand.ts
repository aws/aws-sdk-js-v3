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

import { CancelResizeMessage, ResizeProgressMessage } from "../models/models_0";
import { de_CancelResizeCommand, se_CancelResizeCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelResizeCommand}.
 */
export interface CancelResizeCommandInput extends CancelResizeMessage {}
/**
 * @public
 *
 * The output of {@link CancelResizeCommand}.
 */
export interface CancelResizeCommandOutput extends ResizeProgressMessage, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a resize operation for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CancelResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CancelResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CancelResizeMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelResizeCommand(input);
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
 * @param CancelResizeCommandInput - {@link CancelResizeCommandInput}
 * @returns {@link CancelResizeCommandOutput}
 * @see {@link CancelResizeCommandInput} for command's `input` shape.
 * @see {@link CancelResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link ResizeNotFoundFault} (client fault)
 *  <p>A resize operation for the specified cluster is not found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class CancelResizeCommand extends $Command<
  CancelResizeCommandInput,
  CancelResizeCommandOutput,
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
  constructor(readonly input: CancelResizeCommandInput) {
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
  ): Handler<CancelResizeCommandInput, CancelResizeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelResizeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CancelResizeCommand";
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
  private serialize(input: CancelResizeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelResizeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelResizeCommandOutput> {
    return de_CancelResizeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

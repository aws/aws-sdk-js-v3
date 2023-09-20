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

import { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/models_0";
import { de_BacktrackDBClusterCommand, se_BacktrackDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BacktrackDBClusterCommand}.
 */
export interface BacktrackDBClusterCommandInput extends BacktrackDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link BacktrackDBClusterCommand}.
 */
export interface BacktrackDBClusterCommandOutput extends DBClusterBacktrack, __MetadataBearer {}

/**
 * @public
 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
 *          <p>For more information on backtracking, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
 *                 Backtracking an Aurora DB Cluster</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action applies only to Aurora MySQL DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, BacktrackDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, BacktrackDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // BacktrackDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   BacktrackTo: new Date("TIMESTAMP"), // required
 *   Force: true || false,
 *   UseEarliestTimeOnPointInTimeUnavailable: true || false,
 * };
 * const command = new BacktrackDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterBacktrack
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   BacktrackIdentifier: "STRING_VALUE",
 * //   BacktrackTo: new Date("TIMESTAMP"),
 * //   BacktrackedFrom: new Date("TIMESTAMP"),
 * //   BacktrackRequestCreationTime: new Date("TIMESTAMP"),
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BacktrackDBClusterCommandInput - {@link BacktrackDBClusterCommandInput}
 * @returns {@link BacktrackDBClusterCommandOutput}
 * @see {@link BacktrackDBClusterCommandInput} for command's `input` shape.
 * @see {@link BacktrackDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class BacktrackDBClusterCommand extends $Command<
  BacktrackDBClusterCommandInput,
  BacktrackDBClusterCommandOutput,
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
  constructor(readonly input: BacktrackDBClusterCommandInput) {
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
  ): Handler<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BacktrackDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "BacktrackDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "BacktrackDBCluster",
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
  private serialize(input: BacktrackDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BacktrackDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BacktrackDBClusterCommandOutput> {
    return de_BacktrackDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

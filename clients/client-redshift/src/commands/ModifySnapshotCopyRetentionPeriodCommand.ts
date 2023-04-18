// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ModifySnapshotCopyRetentionPeriodMessage, ModifySnapshotCopyRetentionPeriodResult } from "../models/models_1";
import {
  de_ModifySnapshotCopyRetentionPeriodCommand,
  se_ModifySnapshotCopyRetentionPeriodCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link ModifySnapshotCopyRetentionPeriodCommand}.
 */
export interface ModifySnapshotCopyRetentionPeriodCommandInput extends ModifySnapshotCopyRetentionPeriodMessage {}
/**
 * @public
 *
 * The output of {@link ModifySnapshotCopyRetentionPeriodCommand}.
 */
export interface ModifySnapshotCopyRetentionPeriodCommandOutput
  extends ModifySnapshotCopyRetentionPeriodResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after
 *             they are copied from the source Amazon Web Services Region. By default, this operation only changes the
 *             retention period of copied automated snapshots. The retention periods for both new and
 *             existing copied automated snapshots are updated with the new retention period. You can
 *             set the manual option to change only the retention periods of copied manual snapshots.
 *             If you set this option, only newly copied manual snapshots have the new retention
 *             period. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifySnapshotCopyRetentionPeriodMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   RetentionPeriod: Number("int"), // required
 *   Manual: true || false,
 * };
 * const command = new ModifySnapshotCopyRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifySnapshotCopyRetentionPeriodCommandInput - {@link ModifySnapshotCopyRetentionPeriodCommandInput}
 * @returns {@link ModifySnapshotCopyRetentionPeriodCommandOutput}
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 * @throws {@link SnapshotCopyDisabledFault} (client fault)
 *  <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 *
 */
export class ModifySnapshotCopyRetentionPeriodCommand extends $Command<
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
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
  constructor(readonly input: ModifySnapshotCopyRetentionPeriodCommandInput) {
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
  ): Handler<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySnapshotCopyRetentionPeriodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifySnapshotCopyRetentionPeriodCommand";
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
  private serialize(
    input: ModifySnapshotCopyRetentionPeriodCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifySnapshotCopyRetentionPeriodCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> {
    return de_ModifySnapshotCopyRetentionPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

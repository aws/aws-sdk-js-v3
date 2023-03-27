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

import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_1";
import {
  deserializeAws_queryModifyDBClusterSnapshotAttributeCommand,
  serializeAws_queryModifyDBClusterSnapshotAttributeCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link ModifyDBClusterSnapshotAttributeCommand}.
 */
export interface ModifyDBClusterSnapshotAttributeCommandInput extends ModifyDBClusterSnapshotAttributeMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterSnapshotAttributeCommand}.
 */
export interface ModifyDBClusterSnapshotAttributeCommandOutput
  extends ModifyDBClusterSnapshotAttributeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify
 *                 <code>restore</code> as the <code>AttributeName</code> and use the
 *                 <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are
 *             authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to
 *             make the manual DB cluster snapshot public, which means that it can be copied or
 *             restored by all Amazon Web Services accounts.</p>
 *          <note>
 *             <p>Don't add the <code>all</code> value for any manual DB cluster snapshots
 *                 that contain private information that you don't want available to all Amazon Web Services
 *                 accounts.</p>
 *          </note>
 *          <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by
 *             specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code>
 *             parameter. You can't use <code>all</code> as a value for that parameter in this
 *             case.</p>
 *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster
 *             snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are
 *             returned as values for the <code>restore</code> attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBClusterSnapshotAttributeMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   ValuesToAdd: [ // AttributeValueList
 *     "STRING_VALUE",
 *   ],
 *   ValuesToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyDBClusterSnapshotAttributeCommandInput - {@link ModifyDBClusterSnapshotAttributeCommandInput}
 * @returns {@link ModifyDBClusterSnapshotAttributeCommandOutput}
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 *
 *
 * @example To add or remove access to a manual DB cluster snapshot
 * ```javascript
 * // The following example gives two AWS accounts access to a manual DB cluster snapshot and ensures that the DB cluster snapshot is private by removing the value "all".
 * const input = {
 *   "AttributeName": "restore",
 *   "DBClusterSnapshotIdentifier": "manual-cluster-snapshot1",
 *   "ValuesToAdd": [
 *     "123451234512",
 *     "123456789012"
 *   ],
 *   "ValuesToRemove": [
 *     "all"
 *   ]
 * };
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterSnapshotAttributesResult": {}
 * }
 * *\/
 * // example id: to-add-or-remove-access-to-a-manual-db-cluster-snapshot-1473889426431
 * ```
 *
 */
export class ModifyDBClusterSnapshotAttributeCommand extends $Command<
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
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
  constructor(readonly input: ModifyDBClusterSnapshotAttributeCommandInput) {
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
  ): Handler<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBClusterSnapshotAttributeCommand";
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
    input: ModifyDBClusterSnapshotAttributeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterSnapshotAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> {
    return deserializeAws_queryModifyDBClusterSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

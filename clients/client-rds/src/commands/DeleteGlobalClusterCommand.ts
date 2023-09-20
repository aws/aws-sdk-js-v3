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

import { DeleteGlobalClusterMessage, DeleteGlobalClusterResult } from "../models/models_0";
import { de_DeleteGlobalClusterCommand, se_DeleteGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlobalClusterCommand}.
 */
export interface DeleteGlobalClusterCommandInput extends DeleteGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link DeleteGlobalClusterCommand}.
 */
export interface DeleteGlobalClusterCommandOutput extends DeleteGlobalClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or
 *         destroyed first.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGlobalClusterResult
 * //   GlobalCluster: { // GlobalCluster
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalClusterResourceId: "STRING_VALUE",
 * //     GlobalClusterArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     DeletionProtection: true || false,
 * //     GlobalClusterMembers: [ // GlobalClusterMemberList
 * //       { // GlobalClusterMember
 * //         DBClusterArn: "STRING_VALUE",
 * //         Readers: [ // ReadersArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         IsWriter: true || false,
 * //         GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //         SynchronizationStatus: "connected" || "pending-resync",
 * //       },
 * //     ],
 * //     FailoverState: { // FailoverState
 * //       Status: "pending" || "failing-over" || "cancelling",
 * //       FromDbClusterArn: "STRING_VALUE",
 * //       ToDbClusterArn: "STRING_VALUE",
 * //       IsDataLossAllowed: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteGlobalClusterCommandInput - {@link DeleteGlobalClusterCommandInput}
 * @returns {@link DeleteGlobalClusterCommandOutput}
 * @see {@link DeleteGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To delete a global DB cluster
 * ```javascript
 * // The following example deletes an Aurora MySQL-compatible global DB cluster.
 * const input = {
 *   "GlobalClusterIdentifier": "myglobalcluster"
 * };
 * const command = new DeleteGlobalClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GlobalCluster": {
 *     "DeletionProtection": false,
 *     "Engine": "aurora-mysql",
 *     "EngineVersion": "5.7.mysql_aurora.2.07.2",
 *     "GlobalClusterArn": "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *     "GlobalClusterIdentifier": "myglobalcluster",
 *     "GlobalClusterMembers": [],
 *     "GlobalClusterResourceId": "cluster-f0e523bfe07aabb",
 *     "Status": "available",
 *     "StorageEncrypted": false
 *   }
 * }
 * *\/
 * // example id: to-delete-a-global-db-cluster-1680128523630
 * ```
 *
 */
export class DeleteGlobalClusterCommand extends $Command<
  DeleteGlobalClusterCommandInput,
  DeleteGlobalClusterCommandOutput,
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
  constructor(readonly input: DeleteGlobalClusterCommandInput) {
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
  ): Handler<DeleteGlobalClusterCommandInput, DeleteGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DeleteGlobalCluster",
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
  private serialize(input: DeleteGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGlobalClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGlobalClusterCommandOutput> {
    return de_DeleteGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

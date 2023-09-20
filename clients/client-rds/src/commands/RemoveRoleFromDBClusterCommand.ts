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

import { RemoveRoleFromDBClusterMessage } from "../models/models_1";
import { de_RemoveRoleFromDBClusterCommand, se_RemoveRoleFromDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveRoleFromDBClusterCommand}.
 */
export interface RemoveRoleFromDBClusterCommandInput extends RemoveRoleFromDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link RemoveRoleFromDBClusterCommand}.
 */
export interface RemoveRoleFromDBClusterCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a
 *             DB cluster.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveRoleFromDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveRoleFromDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RemoveRoleFromDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE",
 * };
 * const command = new RemoveRoleFromDBClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveRoleFromDBClusterCommandInput - {@link RemoveRoleFromDBClusterCommandInput}
 * @returns {@link RemoveRoleFromDBClusterCommandOutput}
 * @see {@link RemoveRoleFromDBClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterRoleNotFoundFault} (client fault)
 *  <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To disassociate an Identity and Access Management (IAM) role from a DB cluster
 * ```javascript
 * // The following example removes a role from a DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "mydbcluster",
 *   "RoleArn": "arn:aws:iam::123456789012:role/RDSLoadFromS3"
 * };
 * const command = new RemoveRoleFromDBClusterCommand(input);
 * await client.send(command);
 * // example id: to-disassociate-an-identity-and-access-management-iam-role-from-a-db-cluster-1680072359521
 * ```
 *
 */
export class RemoveRoleFromDBClusterCommand extends $Command<
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
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
  constructor(readonly input: RemoveRoleFromDBClusterCommandInput) {
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
  ): Handler<RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveRoleFromDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RemoveRoleFromDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "RemoveRoleFromDBCluster",
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
  private serialize(input: RemoveRoleFromDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveRoleFromDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveRoleFromDBClusterCommandOutput> {
    return de_RemoveRoleFromDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

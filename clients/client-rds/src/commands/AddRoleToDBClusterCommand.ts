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

import { AddRoleToDBClusterMessage } from "../models/models_0";
import { de_AddRoleToDBClusterCommand, se_AddRoleToDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddRoleToDBClusterCommand}.
 */
export interface AddRoleToDBClusterCommandInput extends AddRoleToDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link AddRoleToDBClusterCommand}.
 */
export interface AddRoleToDBClusterCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates an Identity and Access Management (IAM) role with a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // AddRoleToDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE",
 * };
 * const command = new AddRoleToDBClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRoleToDBClusterCommandInput - {@link AddRoleToDBClusterCommandInput}
 * @returns {@link AddRoleToDBClusterCommandOutput}
 * @see {@link AddRoleToDBClusterCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterRoleAlreadyExistsFault} (client fault)
 *  <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 *
 * @throws {@link DBClusterRoleQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To associate an AWS Identity and Access Management (IAM) role with a DB cluster
 * ```javascript
 * // The following example associates a role with a DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "mydbcluster",
 *   "RoleArn": "arn:aws:iam::123456789012:role/RDSLoadFromS3"
 * };
 * const command = new AddRoleToDBClusterCommand(input);
 * await client.send(command);
 * // example id: to-associate-an-aws-identity-and-access-management-iam-role-with-a-db-cluster-1679691203006
 * ```
 *
 */
export class AddRoleToDBClusterCommand extends $Command<
  AddRoleToDBClusterCommandInput,
  AddRoleToDBClusterCommandOutput,
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
  constructor(readonly input: AddRoleToDBClusterCommandInput) {
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
  ): Handler<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddRoleToDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AddRoleToDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "AddRoleToDBCluster",
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
  private serialize(input: AddRoleToDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddRoleToDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddRoleToDBClusterCommandOutput> {
    return de_AddRoleToDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

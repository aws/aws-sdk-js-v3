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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  ModifyDBClusterMessage,
  ModifyDBClusterMessageFilterSensitiveLog,
  ModifyDBClusterResult,
  ModifyDBClusterResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyDBClusterCommand,
  serializeAws_queryModifyDBClusterCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ModifyDBClusterCommand}.
 */
export interface ModifyDBClusterCommandInput extends ModifyDBClusterMessage {}
/**
 * The output of {@link ModifyDBClusterCommand}.
 */
export interface ModifyDBClusterCommandOutput extends ModifyDBClusterResult, __MetadataBearer {}

/**
 * <p>Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database
 *             configuration parameters by specifying these parameters and the new values in the
 *             request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing cluster parameter group. </p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *  <p>The state of the security group doesn't allow deletion.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The subnet group can't be deleted because it's in use.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
 *
 *
 */
export class ModifyDBClusterCommand extends $Command<
  ModifyDBClusterCommandInput,
  ModifyDBClusterCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: ModifyDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "ModifyDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBClusterCommandOutput> {
    return deserializeAws_queryModifyDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

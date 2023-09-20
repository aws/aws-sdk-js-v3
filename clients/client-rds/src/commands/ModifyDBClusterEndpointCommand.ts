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

import { DBClusterEndpoint } from "../models/models_0";
import { ModifyDBClusterEndpointMessage } from "../models/models_1";
import { de_ModifyDBClusterEndpointCommand, se_ModifyDBClusterEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterEndpointCommand}.
 */
export interface ModifyDBClusterEndpointCommandInput extends ModifyDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterEndpointCommand}.
 */
export interface ModifyDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBClusterEndpointMessage
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 *   EndpointType: "STRING_VALUE",
 *   StaticMembers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ExcludedMembers: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterEndpoint
 * //   DBClusterEndpointIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //   Endpoint: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   EndpointType: "STRING_VALUE",
 * //   CustomEndpointType: "STRING_VALUE",
 * //   StaticMembers: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ExcludedMembers: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DBClusterEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyDBClusterEndpointCommandInput - {@link ModifyDBClusterEndpointCommandInput}
 * @returns {@link ModifyDBClusterEndpointCommandOutput}
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointNotFoundFault} (client fault)
 *  <p>The specified custom endpoint doesn't exist.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBClusterEndpointStateFault} (client fault)
 *  <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To modify a custom DB cluster endpoint
 * ```javascript
 * // The following example modifies the specified custom DB cluster endpoint.
 * const input = {
 *   "DBClusterEndpointIdentifier": "mycustomendpoint",
 *   "StaticMembers": [
 *     "dbinstance1",
 *     "dbinstance2",
 *     "dbinstance3"
 *   ]
 * };
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomEndpointType": "READER",
 *   "DBClusterEndpointArn": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:mycustomendpoint",
 *   "DBClusterEndpointIdentifier": "mycustomendpoint",
 *   "DBClusterEndpointResourceIdentifier": "cluster-endpoint-ANPAJ4AE5446DAEXAMPLE",
 *   "DBClusterIdentifier": "mydbcluster",
 *   "Endpoint": "mycustomendpoint.cluster-custom-cnpexample.us-east-1.rds.amazonaws.com",
 *   "EndpointType": "CUSTOM",
 *   "ExcludedMembers": [],
 *   "StaticMembers": [
 *     "dbinstance1",
 *     "dbinstance2",
 *     "dbinstance3"
 *   ],
 *   "Status": "modifying"
 * }
 * *\/
 * // example id: to-modify-a-custom-db-cluster-endpoint-1680307652958
 * ```
 *
 */
export class ModifyDBClusterEndpointCommand extends $Command<
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
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
  constructor(readonly input: ModifyDBClusterEndpointCommandInput) {
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
  ): Handler<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBClusterEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBClusterEndpoint",
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
  private serialize(input: ModifyDBClusterEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBClusterEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBClusterEndpointCommandOutput> {
    return de_ModifyDBClusterEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

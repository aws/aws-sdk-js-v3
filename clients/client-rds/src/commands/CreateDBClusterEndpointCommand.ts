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

import { CreateDBClusterEndpointMessage, DBClusterEndpoint } from "../models/models_0";
import { de_CreateDBClusterEndpointCommand, se_CreateDBClusterEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBClusterEndpointCommand}.
 */
export interface CreateDBClusterEndpointCommandInput extends CreateDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterEndpointCommand}.
 */
export interface CreateDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action applies only to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBClusterEndpointMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 *   EndpointType: "STRING_VALUE", // required
 *   StaticMembers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ExcludedMembers: [
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterEndpointCommand(input);
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
 * @param CreateDBClusterEndpointCommandInput - {@link CreateDBClusterEndpointCommandInput}
 * @returns {@link CreateDBClusterEndpointCommandOutput}
 * @see {@link CreateDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointAlreadyExistsFault} (client fault)
 *  <p>The specified custom endpoint can't be created because it already exists.</p>
 *
 * @throws {@link DBClusterEndpointQuotaExceededFault} (client fault)
 *  <p>The cluster already has the maximum number of custom endpoints.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
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
 * @example To create a custom DB cluster endpoint
 * ```javascript
 * // The following example creates a custom DB cluster endpoint and associate it with the specified Aurora DB cluster.
 * const input = {
 *   "DBClusterEndpointIdentifier": "mycustomendpoint",
 *   "DBClusterIdentifier": "mydbcluster",
 *   "EndpointType": "reader",
 *   "StaticMembers": [
 *     "dbinstance1",
 *     "dbinstance2"
 *   ]
 * };
 * const command = new CreateDBClusterEndpointCommand(input);
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
 *     "dbinstance2"
 *   ],
 *   "Status": "creating"
 * }
 * *\/
 * // example id: to-create-a-custom-db-cluster-endpoint-1679701608522
 * ```
 *
 */
export class CreateDBClusterEndpointCommand extends $Command<
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
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
  constructor(readonly input: CreateDBClusterEndpointCommandInput) {
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
  ): Handler<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBClusterEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBClusterEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CreateDBClusterEndpoint",
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
  private serialize(input: CreateDBClusterEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBClusterEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBClusterEndpointCommandOutput> {
    return de_CreateDBClusterEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

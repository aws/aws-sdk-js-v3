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

import { ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult } from "../models/models_1";
import { de_ModifyDBSubnetGroupCommand, se_ModifyDBSubnetGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandInput extends ModifyDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandOutput extends ModifyDBSubnetGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSubnetGroupResult
 * //   DBSubnetGroup: { // DBSubnetGroup
 * //     DBSubnetGroupName: "STRING_VALUE",
 * //     DBSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetOutpost: { // Outpost
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSubnetGroupArn: "STRING_VALUE",
 * //     SupportedNetworkTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBSubnetGroupCommandInput - {@link ModifyDBSubnetGroupCommandInput}
 * @returns {@link ModifyDBSubnetGroupCommandOutput}
 * @see {@link ModifyDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>The DB subnet is already in use in the Availability Zone.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To modify a DB subnet group
 * ```javascript
 * // The following example adds a subnet with the ID subnet-08e41f9e230222222 to the DB subnet group named mysubnetgroup. To keep the existing subnets in the subnet group, include their IDs as values in the --subnet-ids option. Make sure to have subnets with at least two different Availability Zones in the DB subnet group.
 * const input = {
 *   "DBSubnetGroupDescription": "",
 *   "DBSubnetGroupName": "mysubnetgroup",
 *   "SubnetIds": [
 *     "subnet-0a1dc4e1a6f123456",
 *     "subnet-070dd7ecb3aaaaaaa",
 *     "subnet-00f5b198bc0abcdef",
 *     "subnet-08e41f9e230222222"
 *   ]
 * };
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSubnetGroup": {
 *     "DBSubnetGroupArn": "arn:aws:rds:us-west-2:123456789012:subgrp:mysubnetgroup",
 *     "DBSubnetGroupDescription": "test DB subnet group",
 *     "DBSubnetGroupName": "mysubnetgroup",
 *     "SubnetGroupStatus": "Complete",
 *     "Subnets": [
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-west-2a"
 *         },
 *         "SubnetIdentifier": "subnet-08e41f9e230222222",
 *         "SubnetStatus": "Active"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-west-2b"
 *         },
 *         "SubnetIdentifier": "subnet-070dd7ecb3aaaaaaa",
 *         "SubnetStatus": "Active"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-west-2d"
 *         },
 *         "SubnetIdentifier": "subnet-00f5b198bc0abcdef",
 *         "SubnetStatus": "Active"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-west-2b"
 *         },
 *         "SubnetIdentifier": "subnet-0a1dc4e1a6f123456",
 *         "SubnetStatus": "Active"
 *       }
 *     ],
 *     "VpcId": "vpc-0f08e7610a1b2c3d4"
 *   }
 * }
 * *\/
 * // example id: to-modify-a-db-subnet-group-1680383300785
 * ```
 *
 */
export class ModifyDBSubnetGroupCommand extends $Command<
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
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
  constructor(readonly input: ModifyDBSubnetGroupCommandInput) {
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
  ): Handler<ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBSubnetGroup",
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
  private serialize(input: ModifyDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBSubnetGroupCommandOutput> {
    return de_ModifyDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

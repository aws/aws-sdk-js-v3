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

import { CreateDBSubnetGroupMessage, CreateDBSubnetGroupResult } from "../models/models_0";
import { de_CreateDBSubnetGroupCommand, se_CreateDBSubnetGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandInput extends CreateDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandOutput extends CreateDBSubnetGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE", // required
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBSubnetGroupResult
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
 * @param CreateDBSubnetGroupCommandInput - {@link CreateDBSubnetGroupCommandInput}
 * @returns {@link CreateDBSubnetGroupCommandOutput}
 * @see {@link CreateDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupAlreadyExistsFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.</p>
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB subnet
 *             groups.</p>
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To create a DB subnet group
 * ```javascript
 * // The following example creates a DB subnet group called mysubnetgroup using existing subnets.
 * const input = {
 *   "DBSubnetGroupDescription": "test DB subnet group",
 *   "DBSubnetGroupName": "mysubnetgroup",
 *   "SubnetIds": [
 *     "subnet-0a1dc4e1a6f123456",
 *     "subnet-070dd7ecb3aaaaaaa",
 *     "subnet-00f5b198bc0abcdef"
 *   ]
 * };
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSubnetGroup": {
 *     "DBSubnetGroupArn": "arn:aws:rds:us-west-2:0123456789012:subgrp:mysubnetgroup",
 *     "DBSubnetGroupDescription": "test DB subnet group",
 *     "DBSubnetGroupName": "mysubnetgroup",
 *     "SubnetGroupStatus": "Complete",
 *     "Subnets": [
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
 * // example id: to-create-a-db-subnet-group-1679942682822
 * ```
 *
 */
export class CreateDBSubnetGroupCommand extends $Command<
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
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
  constructor(readonly input: CreateDBSubnetGroupCommandInput) {
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
  ): Handler<CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CreateDBSubnetGroup",
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
  private serialize(input: CreateDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBSubnetGroupCommandOutput> {
    return de_CreateDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

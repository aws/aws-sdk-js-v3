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
} from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheSubnetGroupMessage, CreateCacheSubnetGroupResult } from "../models/models_0";
import { de_CreateCacheSubnetGroupCommand, se_CreateCacheSubnetGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCacheSubnetGroupCommand}.
 */
export interface CreateCacheSubnetGroupCommandInput extends CreateCacheSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheSubnetGroupCommand}.
 */
export interface CreateCacheSubnetGroupCommandOutput extends CreateCacheSubnetGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new cache subnet group.</p>
 *          <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheSubnetGroupMessage
 *   CacheSubnetGroupName: "STRING_VALUE", // required
 *   CacheSubnetGroupDescription: "STRING_VALUE", // required
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
 * const command = new CreateCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheSubnetGroupResult
 * //   CacheSubnetGroup: { // CacheSubnetGroup
 * //     CacheSubnetGroupName: "STRING_VALUE",
 * //     CacheSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetOutpost: { // SubnetOutpost
 * //           SubnetOutpostArn: "STRING_VALUE",
 * //         },
 * //         SupportedNetworkTypes: [ // NetworkTypeList
 * //           "ipv4" || "ipv6" || "dual_stack",
 * //         ],
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //     SupportedNetworkTypes: [
 * //       "ipv4" || "ipv6" || "dual_stack",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCacheSubnetGroupCommandInput - {@link CreateCacheSubnetGroupCommandInput}
 * @returns {@link CreateCacheSubnetGroupCommandOutput}
 * @see {@link CreateCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSubnetGroupAlreadyExistsFault} (client fault)
 *  <p>The requested cache subnet group name is already in use by an existing cache subnet group.</p>
 *
 * @throws {@link CacheSubnetGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache subnet groups.</p>
 *
 * @throws {@link CacheSubnetQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>An invalid subnet identifier was specified.</p>
 *
 * @throws {@link SubnetNotAllowedFault} (client fault)
 *  <p>At least one subnet ID does not match the other subnet IDs. This mismatch typically occurs when a
 *             user sets one subnet ID to a regional Availability Zone and a different one to an outpost. Or when a user sets the subnet ID to an Outpost when not subscribed on this service.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example CreateCacheSubnet
 * ```javascript
 * // Creates a new cache subnet group.
 * const input = {
 *   "CacheSubnetGroupDescription": "Sample subnet group",
 *   "CacheSubnetGroupName": "my-sn-grp2",
 *   "SubnetIds": [
 *     "subnet-6f28c982",
 *     "subnet-bcd382f3",
 *     "subnet-845b3e7c0"
 *   ]
 * };
 * const command = new CreateCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheSubnetGroup": {
 *     "CacheSubnetGroupDescription": "My subnet group.",
 *     "CacheSubnetGroupName": "my-sn-grp",
 *     "Subnets": [
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1a"
 *         },
 *         "SubnetIdentifier": "subnet-6f28c982"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1c"
 *         },
 *         "SubnetIdentifier": "subnet-bcd382f3"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1b"
 *         },
 *         "SubnetIdentifier": "subnet-845b3e7c0"
 *       }
 *     ],
 *     "VpcId": "vpc-91280df6"
 *   }
 * }
 * *\/
 * // example id: createcachesubnet-1483042274558
 * ```
 *
 */
export class CreateCacheSubnetGroupCommand extends $Command<
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: CreateCacheSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCacheSubnetGroupCommandInput, CreateCacheSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCacheSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheSubnetGroupCommand";
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
  private serialize(input: CreateCacheSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCacheSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheSubnetGroupCommandOutput> {
    return de_CreateCacheSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

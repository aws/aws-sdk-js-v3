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
import { ModifyCacheSubnetGroupMessage, ModifyCacheSubnetGroupResult } from "../models/models_0";
import { de_ModifyCacheSubnetGroupCommand, se_ModifyCacheSubnetGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyCacheSubnetGroupCommand}.
 */
export interface ModifyCacheSubnetGroupCommandInput extends ModifyCacheSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCacheSubnetGroupCommand}.
 */
export interface ModifyCacheSubnetGroupCommandOutput extends ModifyCacheSubnetGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing cache subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyCacheSubnetGroupMessage
 *   CacheSubnetGroupName: "STRING_VALUE", // required
 *   CacheSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCacheSubnetGroupResult
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
 * @param ModifyCacheSubnetGroupCommandInput - {@link ModifyCacheSubnetGroupCommandInput}
 * @returns {@link ModifyCacheSubnetGroupCommandOutput}
 * @see {@link ModifyCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *  <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
 *
 * @throws {@link CacheSubnetQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>An invalid subnet identifier was specified.</p>
 *
 * @throws {@link SubnetInUse} (client fault)
 *  <p>The requested subnet is being used by another cache subnet group.</p>
 *
 * @throws {@link SubnetNotAllowedFault} (client fault)
 *  <p>At least one subnet ID does not match the other subnet IDs. This mismatch typically occurs when a
 *             user sets one subnet ID to a regional Availability Zone and a different one to an outpost. Or when a user sets the subnet ID to an Outpost when not subscribed on this service.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example ModifyCacheSubnetGroup
 * ```javascript
 * // Modifies an existing ElastiCache subnet group.
 * const input = {
 *   "CacheSubnetGroupName": "my-sn-grp",
 *   "SubnetIds": [
 *     "subnet-bcde2345"
 *   ]
 * };
 * const command = new ModifyCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheSubnetGroup": {
 *     "CacheSubnetGroupDescription": "My subnet group.",
 *     "CacheSubnetGroupName": "my-sn-grp",
 *     "Subnets": [
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1c"
 *         },
 *         "SubnetIdentifier": "subnet-a1b2c3d4"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1e"
 *         },
 *         "SubnetIdentifier": "subnet-1a2b3c4d"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1e"
 *         },
 *         "SubnetIdentifier": "subnet-bcde2345"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1c"
 *         },
 *         "SubnetIdentifier": "subnet-1234abcd"
 *       },
 *       {
 *         "SubnetAvailabilityZone": {
 *           "Name": "us-east-1b"
 *         },
 *         "SubnetIdentifier": "subnet-abcd1234"
 *       }
 *     ],
 *     "VpcId": "vpc-91280df6"
 *   }
 * }
 * *\/
 * // example id: modifycachesubnetgroup-1483043446226
 * ```
 *
 */
export class ModifyCacheSubnetGroupCommand extends $Command<
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput,
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
  constructor(readonly input: ModifyCacheSubnetGroupCommandInput) {
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
  ): Handler<ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCacheSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyCacheSubnetGroupCommand";
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
  private serialize(input: ModifyCacheSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyCacheSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyCacheSubnetGroupCommandOutput> {
    return de_ModifyCacheSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

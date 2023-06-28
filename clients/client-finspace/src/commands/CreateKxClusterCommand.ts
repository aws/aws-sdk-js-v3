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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { CreateKxClusterRequest, CreateKxClusterResponse } from "../models/models_0";
import { de_CreateKxClusterCommand, se_CreateKxClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateKxClusterCommand}.
 */
export interface CreateKxClusterCommandInput extends CreateKxClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxClusterCommand}.
 */
export interface CreateKxClusterCommandOutput extends CreateKxClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new kdb cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxClusterCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxClusterCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxClusterRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clusterType: "HDB" || "RDB" || "GATEWAY", // required
 *   databases: [ // KxDatabaseConfigurations
 *     { // KxDatabaseConfiguration
 *       databaseName: "STRING_VALUE", // required
 *       cacheConfigurations: [ // KxDatabaseCacheConfigurations
 *         { // KxDatabaseCacheConfiguration
 *           cacheType: "STRING_VALUE", // required
 *           dbPaths: [ // DbPaths // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       changesetId: "STRING_VALUE",
 *     },
 *   ],
 *   cacheStorageConfigurations: [ // KxCacheStorageConfigurations
 *     { // KxCacheStorageConfiguration
 *       type: "STRING_VALUE", // required
 *       size: Number("int"), // required
 *     },
 *   ],
 *   autoScalingConfiguration: { // AutoScalingConfiguration
 *     minNodeCount: Number("int"),
 *     maxNodeCount: Number("int"),
 *     autoScalingMetric: "CPU_UTILIZATION_PERCENTAGE",
 *     metricTarget: Number("double"),
 *     scaleInCooldownSeconds: Number("double"),
 *     scaleOutCooldownSeconds: Number("double"),
 *   },
 *   clusterDescription: "STRING_VALUE",
 *   capacityConfiguration: { // CapacityConfiguration
 *     nodeType: "STRING_VALUE",
 *     nodeCount: Number("int"),
 *   },
 *   releaseLabel: "STRING_VALUE", // required
 *   vpcConfiguration: { // VpcConfiguration
 *     vpcId: "STRING_VALUE",
 *     securityGroupIds: [ // SecurityGroupIdList
 *       "STRING_VALUE",
 *     ],
 *     subnetIds: [ // SubnetIdList
 *       "STRING_VALUE",
 *     ],
 *     ipAddressType: "IP_V4",
 *   },
 *   initializationScript: "STRING_VALUE",
 *   commandLineArguments: [ // KxCommandLineArguments
 *     { // KxCommandLineArgument
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   code: { // CodeConfiguration
 *     s3Bucket: "STRING_VALUE",
 *     s3Key: "STRING_VALUE",
 *     s3ObjectVersion: "STRING_VALUE",
 *   },
 *   executionRole: "STRING_VALUE",
 *   savedownStorageConfiguration: { // KxSavedownStorageConfiguration
 *     type: "SDS01", // required
 *     size: Number("int"), // required
 *   },
 *   azMode: "SINGLE" || "MULTI", // required
 *   availabilityZoneId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKxClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxClusterResponse
 * //   environmentId: "STRING_VALUE",
 * //   status: "PENDING" || "CREATING" || "CREATE_FAILED" || "RUNNING" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   statusReason: "STRING_VALUE",
 * //   clusterName: "STRING_VALUE",
 * //   clusterType: "HDB" || "RDB" || "GATEWAY",
 * //   databases: [ // KxDatabaseConfigurations
 * //     { // KxDatabaseConfiguration
 * //       databaseName: "STRING_VALUE", // required
 * //       cacheConfigurations: [ // KxDatabaseCacheConfigurations
 * //         { // KxDatabaseCacheConfiguration
 * //           cacheType: "STRING_VALUE", // required
 * //           dbPaths: [ // DbPaths // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       changesetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   cacheStorageConfigurations: [ // KxCacheStorageConfigurations
 * //     { // KxCacheStorageConfiguration
 * //       type: "STRING_VALUE", // required
 * //       size: Number("int"), // required
 * //     },
 * //   ],
 * //   autoScalingConfiguration: { // AutoScalingConfiguration
 * //     minNodeCount: Number("int"),
 * //     maxNodeCount: Number("int"),
 * //     autoScalingMetric: "CPU_UTILIZATION_PERCENTAGE",
 * //     metricTarget: Number("double"),
 * //     scaleInCooldownSeconds: Number("double"),
 * //     scaleOutCooldownSeconds: Number("double"),
 * //   },
 * //   clusterDescription: "STRING_VALUE",
 * //   capacityConfiguration: { // CapacityConfiguration
 * //     nodeType: "STRING_VALUE",
 * //     nodeCount: Number("int"),
 * //   },
 * //   releaseLabel: "STRING_VALUE",
 * //   vpcConfiguration: { // VpcConfiguration
 * //     vpcId: "STRING_VALUE",
 * //     securityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ipAddressType: "IP_V4",
 * //   },
 * //   initializationScript: "STRING_VALUE",
 * //   commandLineArguments: [ // KxCommandLineArguments
 * //     { // KxCommandLineArgument
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   code: { // CodeConfiguration
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Key: "STRING_VALUE",
 * //     s3ObjectVersion: "STRING_VALUE",
 * //   },
 * //   executionRole: "STRING_VALUE",
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   savedownStorageConfiguration: { // KxSavedownStorageConfiguration
 * //     type: "SDS01", // required
 * //     size: Number("int"), // required
 * //   },
 * //   azMode: "SINGLE" || "MULTI",
 * //   availabilityZoneId: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateKxClusterCommandInput - {@link CreateKxClusterCommandInput}
 * @returns {@link CreateKxClusterCommandOutput}
 * @see {@link CreateKxClusterCommandInput} for command's `input` shape.
 * @see {@link CreateKxClusterCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class CreateKxClusterCommand extends $Command<
  CreateKxClusterCommandInput,
  CreateKxClusterCommandOutput,
  FinspaceClientResolvedConfig
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
  constructor(readonly input: CreateKxClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateKxClusterCommandInput, CreateKxClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKxClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "CreateKxClusterCommand";
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
  private serialize(input: CreateKxClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateKxClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKxClusterCommandOutput> {
    return de_CreateKxClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

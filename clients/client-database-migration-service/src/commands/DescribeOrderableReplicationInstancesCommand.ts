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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeOrderableReplicationInstancesMessage,
  DescribeOrderableReplicationInstancesResponse,
} from "../models/models_0";
import {
  de_DescribeOrderableReplicationInstancesCommand,
  se_DescribeOrderableReplicationInstancesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrderableReplicationInstancesCommand}.
 */
export interface DescribeOrderableReplicationInstancesCommandInput
  extends DescribeOrderableReplicationInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOrderableReplicationInstancesCommand}.
 */
export interface DescribeOrderableReplicationInstancesCommandOutput
  extends DescribeOrderableReplicationInstancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the replication instance types that can be created in the
 *          specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeOrderableReplicationInstancesMessage
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrderableReplicationInstancesResponse
 * //   OrderableReplicationInstances: [ // OrderableReplicationInstanceList
 * //     { // OrderableReplicationInstance
 * //       EngineVersion: "STRING_VALUE",
 * //       ReplicationInstanceClass: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       MinAllocatedStorage: Number("int"),
 * //       MaxAllocatedStorage: Number("int"),
 * //       DefaultAllocatedStorage: Number("int"),
 * //       IncludedAllocatedStorage: Number("int"),
 * //       AvailabilityZones: [ // AvailabilityZonesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReleaseStatus: "beta" || "prod",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrderableReplicationInstancesCommandInput - {@link DescribeOrderableReplicationInstancesCommandInput}
 * @returns {@link DescribeOrderableReplicationInstancesCommandOutput}
 * @see {@link DescribeOrderableReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe orderable replication instances
 * ```javascript
 * // Returns information about the replication instance types that can be created in the specified region.
 * const input = {
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "OrderableReplicationInstances": []
 * }
 * *\/
 * // example id: describe-orderable-replication-instances-1481755123669
 * ```
 *
 */
export class DescribeOrderableReplicationInstancesCommand extends $Command<
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: DescribeOrderableReplicationInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrderableReplicationInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeOrderableReplicationInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeOrderableReplicationInstances",
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
  private serialize(
    input: DescribeOrderableReplicationInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeOrderableReplicationInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput> {
    return de_DescribeOrderableReplicationInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

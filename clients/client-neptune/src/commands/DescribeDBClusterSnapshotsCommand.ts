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

import { DBClusterSnapshotMessage, DescribeDBClusterSnapshotsMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DescribeDBClusterSnapshotsCommand, se_DescribeDBClusterSnapshotsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterSnapshotsCommand}.
 */
export interface DescribeDBClusterSnapshotsCommandInput extends DescribeDBClusterSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterSnapshotsCommand}.
 */
export interface DescribeDBClusterSnapshotsCommandOutput extends DBClusterSnapshotMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about DB cluster snapshots. This API action supports
 *       pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterSnapshotsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterSnapshotsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // DescribeDBClusterSnapshotsMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   DBClusterSnapshotIdentifier: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   IncludeShared: true || false,
 *   IncludePublic: true || false,
 * };
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterSnapshotMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterSnapshots: [ // DBClusterSnapshotList
 * //     { // DBClusterSnapshot
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       Engine: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       VpcId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DBClusterSnapshotArn: "STRING_VALUE",
 * //       SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterSnapshotsCommandInput - {@link DescribeDBClusterSnapshotsCommandInput}
 * @returns {@link DescribeDBClusterSnapshotsCommandOutput}
 * @see {@link DescribeDBClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class DescribeDBClusterSnapshotsCommand extends $Command<
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: DescribeDBClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterSnapshots",
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
  private serialize(input: DescribeDBClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClusterSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterSnapshotsCommandOutput> {
    return de_DescribeDBClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

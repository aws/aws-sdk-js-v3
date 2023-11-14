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

import { DBSnapshotTenantDatabasesMessage, DescribeDBSnapshotTenantDatabasesMessage } from "../models/models_1";
import {
  de_DescribeDBSnapshotTenantDatabasesCommand,
  se_DescribeDBSnapshotTenantDatabasesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSnapshotTenantDatabasesCommand}.
 */
export interface DescribeDBSnapshotTenantDatabasesCommandInput extends DescribeDBSnapshotTenantDatabasesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSnapshotTenantDatabasesCommand}.
 */
export interface DescribeDBSnapshotTenantDatabasesCommandOutput
  extends DBSnapshotTenantDatabasesMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the tenant databases that exist in a DB snapshot. This command only applies
 *             to RDS for Oracle DB instances in the multi-tenant configuration.</p>
 *          <p>You can use this command to inspect the tenant databases within a snapshot before
 *             restoring it. You can't directly interact with the tenant databases in a DB snapshot. If
 *             you restore a snapshot that was taken from DB instance using the multi-tenant
 *             configuration, you restore all its tenant databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotTenantDatabasesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotTenantDatabasesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSnapshotTenantDatabasesMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   DBSnapshotIdentifier: "STRING_VALUE",
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
 *   DbiResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeDBSnapshotTenantDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // DBSnapshotTenantDatabasesMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSnapshotTenantDatabases: [ // DBSnapshotTenantDatabasesList
 * //     { // DBSnapshotTenantDatabase
 * //       DBSnapshotIdentifier: "STRING_VALUE",
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       TenantDatabaseCreateTime: new Date("TIMESTAMP"),
 * //       TenantDBName: "STRING_VALUE",
 * //       MasterUsername: "STRING_VALUE",
 * //       TenantDatabaseResourceId: "STRING_VALUE",
 * //       CharacterSetName: "STRING_VALUE",
 * //       DBSnapshotTenantDatabaseARN: "STRING_VALUE",
 * //       NcharCharacterSetName: "STRING_VALUE",
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSnapshotTenantDatabasesCommandInput - {@link DescribeDBSnapshotTenantDatabasesCommandInput}
 * @returns {@link DescribeDBSnapshotTenantDatabasesCommandOutput}
 * @see {@link DescribeDBSnapshotTenantDatabasesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotTenantDatabasesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DescribeDBSnapshotTenantDatabasesCommand extends $Command<
  DescribeDBSnapshotTenantDatabasesCommandInput,
  DescribeDBSnapshotTenantDatabasesCommandOutput,
  RDSClientResolvedConfig
> {
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
  constructor(readonly input: DescribeDBSnapshotTenantDatabasesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBSnapshotTenantDatabasesCommandInput, DescribeDBSnapshotTenantDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBSnapshotTenantDatabasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBSnapshotTenantDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBSnapshotTenantDatabases",
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
    input: DescribeDBSnapshotTenantDatabasesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDBSnapshotTenantDatabasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBSnapshotTenantDatabasesCommandOutput> {
    return de_DescribeDBSnapshotTenantDatabasesCommand(output, context);
  }
}

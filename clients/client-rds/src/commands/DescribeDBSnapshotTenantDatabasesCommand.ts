// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBSnapshotTenantDatabasesMessage, DescribeDBSnapshotTenantDatabasesMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBSnapshotTenantDatabases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeDBSnapshotTenantDatabasesCommandOutput extends DBSnapshotTenantDatabasesMessage, __MetadataBearer {}

/**
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
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * @public
 */
export class DescribeDBSnapshotTenantDatabasesCommand extends $Command
  .classBuilder<
    DescribeDBSnapshotTenantDatabasesCommandInput,
    DescribeDBSnapshotTenantDatabasesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBSnapshotTenantDatabases", {})
  .n("RDSClient", "DescribeDBSnapshotTenantDatabasesCommand")
  .sc(DescribeDBSnapshotTenantDatabases$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBSnapshotTenantDatabasesMessage;
      output: DBSnapshotTenantDatabasesMessage;
    };
    sdk: {
      input: DescribeDBSnapshotTenantDatabasesCommandInput;
      output: DescribeDBSnapshotTenantDatabasesCommandOutput;
    };
  };
}

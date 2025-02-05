// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBSnapshotTenantDatabasesMessage, DescribeDBSnapshotTenantDatabasesMessage } from "../models/models_1";
import {
  de_DescribeDBSnapshotTenantDatabasesCommand,
  se_DescribeDBSnapshotTenantDatabasesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
export interface DescribeDBSnapshotTenantDatabasesCommandOutput
  extends DBSnapshotTenantDatabasesMessage,
    __MetadataBearer {}

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeDBSnapshotTenantDatabases", {})
  .n("RDSClient", "DescribeDBSnapshotTenantDatabasesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBSnapshotTenantDatabasesCommand)
  .de(de_DescribeDBSnapshotTenantDatabasesCommand)
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

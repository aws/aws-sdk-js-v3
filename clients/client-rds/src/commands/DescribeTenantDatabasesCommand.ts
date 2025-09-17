// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTenantDatabasesMessage,
  TenantDatabasesMessage,
  TenantDatabasesMessageFilterSensitiveLog,
} from "../models/models_1";
import { de_DescribeTenantDatabasesCommand, se_DescribeTenantDatabasesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTenantDatabasesCommand}.
 */
export interface DescribeTenantDatabasesCommandInput extends DescribeTenantDatabasesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeTenantDatabasesCommand}.
 */
export interface DescribeTenantDatabasesCommandOutput extends TenantDatabasesMessage, __MetadataBearer {}

/**
 * <p>Describes the tenant databases in a DB instance that uses the multi-tenant
 *             configuration. Only RDS for Oracle CDB instances are supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeTenantDatabasesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeTenantDatabasesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeTenantDatabasesMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   TenantDBName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeTenantDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // TenantDatabasesMessage
 * //   Marker: "STRING_VALUE",
 * //   TenantDatabases: [ // TenantDatabasesList
 * //     { // TenantDatabase
 * //       TenantDatabaseCreateTime: new Date("TIMESTAMP"),
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       TenantDBName: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       MasterUsername: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       TenantDatabaseResourceId: "STRING_VALUE",
 * //       TenantDatabaseARN: "STRING_VALUE",
 * //       CharacterSetName: "STRING_VALUE",
 * //       NcharCharacterSetName: "STRING_VALUE",
 * //       DeletionProtection: true || false,
 * //       PendingModifiedValues: { // TenantDatabasePendingModifiedValues
 * //         MasterUserPassword: "STRING_VALUE",
 * //         TenantDBName: "STRING_VALUE",
 * //       },
 * //       MasterUserSecret: { // MasterUserSecret
 * //         SecretArn: "STRING_VALUE",
 * //         SecretStatus: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
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
 * @param DescribeTenantDatabasesCommandInput - {@link DescribeTenantDatabasesCommandInput}
 * @returns {@link DescribeTenantDatabasesCommandOutput}
 * @see {@link DescribeTenantDatabasesCommandInput} for command's `input` shape.
 * @see {@link DescribeTenantDatabasesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DescribeTenantDatabasesCommand extends $Command
  .classBuilder<
    DescribeTenantDatabasesCommandInput,
    DescribeTenantDatabasesCommandOutput,
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
  .s("AmazonRDSv19", "DescribeTenantDatabases", {})
  .n("RDSClient", "DescribeTenantDatabasesCommand")
  .f(void 0, TenantDatabasesMessageFilterSensitiveLog)
  .ser(se_DescribeTenantDatabasesCommand)
  .de(de_DescribeTenantDatabasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTenantDatabasesMessage;
      output: TenantDatabasesMessage;
    };
    sdk: {
      input: DescribeTenantDatabasesCommandInput;
      output: DescribeTenantDatabasesCommandOutput;
    };
  };
}

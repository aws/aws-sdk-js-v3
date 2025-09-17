// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AccountAttributesMessage } from "../models/models_0";
import { DescribeAccountAttributesMessage } from "../models/models_1";
import { de_DescribeAccountAttributesCommand, se_DescribeAccountAttributesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends AccountAttributesMessage, __MetadataBearer {}

/**
 * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p>
 *          <p>This command doesn't take any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = {};
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // AccountAttributesMessage
 * //   AccountQuotas: [ // AccountQuotaList
 * //     { // AccountQuota
 * //       AccountQuotaName: "STRING_VALUE",
 * //       Used: Number("long"),
 * //       Max: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe account attributes
 * ```javascript
 * // The following example retrieves the attributes for the current AWS account.
 * const input = { /* empty *\/ };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AccountQuotas: [
 *     {
 *       AccountQuotaName: "DBInstances",
 *       Max: 40,
 *       Used: 4
 *     },
 *     {
 *       AccountQuotaName: "ReservedDBInstances",
 *       Max: 40,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "AllocatedStorage",
 *       Max: 100000,
 *       Used: 40
 *     },
 *     {
 *       AccountQuotaName: "DBSecurityGroups",
 *       Max: 25,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "AuthorizationsPerDBSecurityGroup",
 *       Max: 20,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "DBParameterGroups",
 *       Max: 50,
 *       Used: 1
 *     },
 *     {
 *       AccountQuotaName: "ManualSnapshots",
 *       Max: 100,
 *       Used: 3
 *     },
 *     {
 *       AccountQuotaName: "EventSubscriptions",
 *       Max: 20,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "DBSubnetGroups",
 *       Max: 50,
 *       Used: 1
 *     },
 *     {
 *       AccountQuotaName: "OptionGroups",
 *       Max: 20,
 *       Used: 1
 *     },
 *     {
 *       AccountQuotaName: "SubnetsPerDBSubnetGroup",
 *       Max: 20,
 *       Used: 6
 *     },
 *     {
 *       AccountQuotaName: "ReadReplicasPerMaster",
 *       Max: 5,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "DBClusters",
 *       Max: 40,
 *       Used: 1
 *     },
 *     {
 *       AccountQuotaName: "DBClusterParameterGroups",
 *       Max: 50,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "DBClusterRoles",
 *       Max: 5,
 *       Used: 0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAccountAttributesCommand extends $Command
  .classBuilder<
    DescribeAccountAttributesCommandInput,
    DescribeAccountAttributesCommandOutput,
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
  .s("AmazonRDSv19", "DescribeAccountAttributes", {})
  .n("RDSClient", "DescribeAccountAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountAttributesCommand)
  .de(de_DescribeAccountAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: AccountAttributesMessage;
    };
    sdk: {
      input: DescribeAccountAttributesCommandInput;
      output: DescribeAccountAttributesCommandOutput;
    };
  };
}

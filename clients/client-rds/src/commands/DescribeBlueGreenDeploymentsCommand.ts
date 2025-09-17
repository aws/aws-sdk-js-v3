// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBlueGreenDeploymentsRequest, DescribeBlueGreenDeploymentsResponse } from "../models/models_1";
import { de_DescribeBlueGreenDeploymentsCommand, se_DescribeBlueGreenDeploymentsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBlueGreenDeploymentsCommand}.
 */
export interface DescribeBlueGreenDeploymentsCommandInput extends DescribeBlueGreenDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBlueGreenDeploymentsCommand}.
 */
export interface DescribeBlueGreenDeploymentsCommandOutput
  extends DescribeBlueGreenDeploymentsResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more blue/green deployments.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeBlueGreenDeploymentsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeBlueGreenDeploymentsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeBlueGreenDeploymentsRequest
 *   BlueGreenDeploymentIdentifier: "STRING_VALUE",
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
 * const command = new DescribeBlueGreenDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBlueGreenDeploymentsResponse
 * //   BlueGreenDeployments: [ // BlueGreenDeploymentList
 * //     { // BlueGreenDeployment
 * //       BlueGreenDeploymentIdentifier: "STRING_VALUE",
 * //       BlueGreenDeploymentName: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       SwitchoverDetails: [ // SwitchoverDetailList
 * //         { // SwitchoverDetail
 * //           SourceMember: "STRING_VALUE",
 * //           TargetMember: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tasks: [ // BlueGreenDeploymentTaskList
 * //         { // BlueGreenDeploymentTask
 * //           Name: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       StatusDetails: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       DeleteTime: new Date("TIMESTAMP"),
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBlueGreenDeploymentsCommandInput - {@link DescribeBlueGreenDeploymentsCommandInput}
 * @returns {@link DescribeBlueGreenDeploymentsCommandOutput}
 * @see {@link DescribeBlueGreenDeploymentsCommandInput} for command's `input` shape.
 * @see {@link DescribeBlueGreenDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentNotFoundFault} (client fault)
 *  <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DescribeBlueGreenDeploymentsCommand extends $Command
  .classBuilder<
    DescribeBlueGreenDeploymentsCommandInput,
    DescribeBlueGreenDeploymentsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeBlueGreenDeployments", {})
  .n("RDSClient", "DescribeBlueGreenDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBlueGreenDeploymentsCommand)
  .de(de_DescribeBlueGreenDeploymentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBlueGreenDeploymentsRequest;
      output: DescribeBlueGreenDeploymentsResponse;
    };
    sdk: {
      input: DescribeBlueGreenDeploymentsCommandInput;
      output: DescribeBlueGreenDeploymentsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeServersRequest,
  DescribeServersResponse,
  DescribeServersResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_DescribeServersCommand, se_DescribeServersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServersCommand}.
 */
export interface DescribeServersCommandInput extends DescribeServersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServersCommand}.
 */
export interface DescribeServersCommandOutput extends DescribeServersResponse, __MetadataBearer {}

/**
 * <p>
 *       Lists all configuration management servers that are identified with your account.
 *       Only the stored results from Amazon DynamoDB
 *       are returned. OpsWorks CM does not query other services.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeServersCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeServersCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DescribeServersRequest
 *   ServerName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeServersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServersResponse
 * //   Servers: [ // Servers
 * //     { // Server
 * //       AssociatePublicIpAddress: true || false,
 * //       BackupRetentionCount: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       CloudFormationStackArn: "STRING_VALUE",
 * //       CustomDomain: "STRING_VALUE",
 * //       DisableAutomatedBackup: true || false,
 * //       Endpoint: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineModel: "STRING_VALUE",
 * //       EngineAttributes: [ // EngineAttributes
 * //         { // EngineAttribute
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EngineVersion: "STRING_VALUE",
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       KeyPair: "STRING_VALUE",
 * //       MaintenanceStatus: "SUCCESS" || "FAILED",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       SecurityGroupIds: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       Status: "BACKING_UP" || "CONNECTION_LOST" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED" || "HEALTHY" || "RUNNING" || "RESTORING" || "SETUP" || "UNDER_MAINTENANCE" || "UNHEALTHY" || "TERMINATED",
 * //       StatusReason: "STRING_VALUE",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ServerArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServersCommandInput - {@link DescribeServersCommandInput}
 * @returns {@link DescribeServersCommandOutput}
 * @see {@link DescribeServersCommandInput} for command's `input` shape.
 * @see {@link DescribeServersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>This occurs when the provided nextToken is not valid.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class DescribeServersCommand extends $Command
  .classBuilder<
    DescribeServersCommandInput,
    DescribeServersCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "DescribeServers", {})
  .n("OpsWorksCMClient", "DescribeServersCommand")
  .f(void 0, DescribeServersResponseFilterSensitiveLog)
  .ser(se_DescribeServersCommand)
  .de(de_DescribeServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServersRequest;
      output: DescribeServersResponse;
    };
    sdk: {
      input: DescribeServersCommandInput;
      output: DescribeServersCommandOutput;
    };
  };
}

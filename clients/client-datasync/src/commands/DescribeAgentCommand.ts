// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAgentRequest, DescribeAgentResponse } from "../models/models_0";
import { de_DescribeAgentCommand, se_DescribeAgentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgentCommand}.
 */
export interface DescribeAgentCommandInput extends DescribeAgentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentCommand}.
 */
export interface DescribeAgentCommandOutput extends DescribeAgentResponse, __MetadataBearer {}

/**
 * <p>Returns information about an DataSync agent, such as its name, service
 *       endpoint type, and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeAgentRequest
 *   AgentArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentResponse
 * //   AgentArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "ONLINE" || "OFFLINE",
 * //   LastConnectionTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   EndpointType: "PUBLIC" || "PRIVATE_LINK" || "FIPS",
 * //   PrivateLinkConfig: { // PrivateLinkConfig
 * //     VpcEndpointId: "STRING_VALUE",
 * //     PrivateLinkEndpoint: "STRING_VALUE",
 * //     SubnetArns: [ // PLSubnetArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupArns: [ // PLSecurityGroupArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Platform: { // Platform
 * //     Version: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAgentCommandInput - {@link DescribeAgentCommandInput}
 * @returns {@link DescribeAgentCommandOutput}
 * @see {@link DescribeAgentCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class DescribeAgentCommand extends $Command
  .classBuilder<
    DescribeAgentCommandInput,
    DescribeAgentCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "DescribeAgent", {})
  .n("DataSyncClient", "DescribeAgentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAgentCommand)
  .de(de_DescribeAgentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgentRequest;
      output: DescribeAgentResponse;
    };
    sdk: {
      input: DescribeAgentCommandInput;
      output: DescribeAgentCommandOutput;
    };
  };
}

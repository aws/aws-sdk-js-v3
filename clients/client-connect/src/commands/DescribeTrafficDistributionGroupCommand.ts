// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrafficDistributionGroupRequest, DescribeTrafficDistributionGroupResponse } from "../models/models_1";
import {
  de_DescribeTrafficDistributionGroupCommand,
  se_DescribeTrafficDistributionGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficDistributionGroupCommand}.
 */
export interface DescribeTrafficDistributionGroupCommandInput extends DescribeTrafficDistributionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficDistributionGroupCommand}.
 */
export interface DescribeTrafficDistributionGroupCommandOutput
  extends DescribeTrafficDistributionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Gets details and status of a traffic distribution group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeTrafficDistributionGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeTrafficDistributionGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // DescribeTrafficDistributionGroupRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrafficDistributionGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficDistributionGroupResponse
 * //   TrafficDistributionGroup: { // TrafficDistributionGroup
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     InstanceArn: "STRING_VALUE",
 * //     Status: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "PENDING_DELETION" || "DELETION_FAILED" || "UPDATE_IN_PROGRESS",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrafficDistributionGroupCommandInput - {@link DescribeTrafficDistributionGroupCommandInput}
 * @returns {@link DescribeTrafficDistributionGroupCommandOutput}
 * @see {@link DescribeTrafficDistributionGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficDistributionGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class DescribeTrafficDistributionGroupCommand extends $Command
  .classBuilder<
    DescribeTrafficDistributionGroupCommandInput,
    DescribeTrafficDistributionGroupCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeTrafficDistributionGroup", {})
  .n("ConnectClient", "DescribeTrafficDistributionGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrafficDistributionGroupCommand)
  .de(de_DescribeTrafficDistributionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrafficDistributionGroupRequest;
      output: DescribeTrafficDistributionGroupResponse;
    };
    sdk: {
      input: DescribeTrafficDistributionGroupCommandInput;
      output: DescribeTrafficDistributionGroupCommandOutput;
    };
  };
}

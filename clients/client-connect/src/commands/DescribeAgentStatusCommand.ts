// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAgentStatusRequest, DescribeAgentStatusResponse } from "../models/models_1";
import { de_DescribeAgentStatusCommand, se_DescribeAgentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgentStatusCommand}.
 */
export interface DescribeAgentStatusCommandInput extends DescribeAgentStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentStatusCommand}.
 */
export interface DescribeAgentStatusCommandOutput extends DescribeAgentStatusResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes an agent status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeAgentStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeAgentStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeAgentStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AgentStatusId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgentStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentStatusResponse
 * //   AgentStatus: { // AgentStatus
 * //     AgentStatusARN: "STRING_VALUE",
 * //     AgentStatusId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "ROUTABLE" || "CUSTOM" || "OFFLINE",
 * //     DisplayOrder: Number("int"),
 * //     State: "ENABLED" || "DISABLED",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAgentStatusCommandInput - {@link DescribeAgentStatusCommandInput}
 * @returns {@link DescribeAgentStatusCommandOutput}
 * @see {@link DescribeAgentStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
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
export class DescribeAgentStatusCommand extends $Command
  .classBuilder<
    DescribeAgentStatusCommandInput,
    DescribeAgentStatusCommandOutput,
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
  .s("AmazonConnectService", "DescribeAgentStatus", {})
  .n("ConnectClient", "DescribeAgentStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAgentStatusCommand)
  .de(de_DescribeAgentStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgentStatusRequest;
      output: DescribeAgentStatusResponse;
    };
    sdk: {
      input: DescribeAgentStatusCommandInput;
      output: DescribeAgentStatusCommandOutput;
    };
  };
}

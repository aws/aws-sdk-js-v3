// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeContactFlowModuleRequest, DescribeContactFlowModuleResponse } from "../models/models_1";
import { de_DescribeContactFlowModuleCommand, se_DescribeContactFlowModuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContactFlowModuleCommand}.
 */
export interface DescribeContactFlowModuleCommandInput extends DescribeContactFlowModuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactFlowModuleCommand}.
 */
export interface DescribeContactFlowModuleCommandOutput extends DescribeContactFlowModuleResponse, __MetadataBearer {}

/**
 * <p>Describes the specified flow module.</p>
 *          <p>Use the <code>$SAVED</code> alias in the request to describe the <code>SAVED</code> content
 *    of a Flow. For example, <code>arn:aws:.../contact-flow/\{id\}:$SAVED</code>. After a flow is
 *    published, <code>$SAVED</code> needs to be supplied to view saved content that has not been
 *    published.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowModuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowModuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactFlowModuleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactFlowModuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactFlowModuleResponse
 * //   ContactFlowModule: { // ContactFlowModule
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     State: "ACTIVE" || "ARCHIVED",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactFlowModuleCommandInput - {@link DescribeContactFlowModuleCommandInput}
 * @returns {@link DescribeContactFlowModuleCommandOutput}
 * @see {@link DescribeContactFlowModuleCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowModuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class DescribeContactFlowModuleCommand extends $Command
  .classBuilder<
    DescribeContactFlowModuleCommandInput,
    DescribeContactFlowModuleCommandOutput,
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
  .s("AmazonConnectService", "DescribeContactFlowModule", {})
  .n("ConnectClient", "DescribeContactFlowModuleCommand")
  .f(void 0, void 0)
  .ser(se_DescribeContactFlowModuleCommand)
  .de(de_DescribeContactFlowModuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactFlowModuleRequest;
      output: DescribeContactFlowModuleResponse;
    };
    sdk: {
      input: DescribeContactFlowModuleCommandInput;
      output: DescribeContactFlowModuleCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeContactFlowRequest, DescribeContactFlowResponse } from "../models/models_1";
import { de_DescribeContactFlowCommand, se_DescribeContactFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContactFlowCommand}.
 */
export interface DescribeContactFlowCommandInput extends DescribeContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactFlowCommand}.
 */
export interface DescribeContactFlowCommandOutput extends DescribeContactFlowResponse, __MetadataBearer {}

/**
 * <p>Describes the specified flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 *          <p>Use the <code>$SAVED</code> alias in the request to describe the <code>SAVED</code> content
 *    of a Flow. For example, <code>arn:aws:.../contact-flow/\{id\}:$SAVED</code>. Once a contact flow is
 *    published, <code>$SAVED</code> needs to be supplied to view saved content that has not been
 *    published.</p>
 *          <p>In the response, <b>Status</b> indicates the flow status as either
 *     <code>SAVED</code> or <code>PUBLISHED</code>. The <code>PUBLISHED</code> status will initiate
 *    validation on the content. <code>SAVED</code> does not initiate validation of the content.
 *     <code>SAVED</code> | <code>PUBLISHED</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactFlowCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactFlowResponse
 * //   ContactFlow: { // ContactFlow
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER",
 * //     State: "ACTIVE" || "ARCHIVED",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Description: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     IsDefault: true || false,
 * //     FlowContentSha256: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     VersionDescription: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactFlowCommandInput - {@link DescribeContactFlowCommandInput}
 * @returns {@link DescribeContactFlowCommandOutput}
 * @see {@link DescribeContactFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ContactFlowNotPublishedException} (client fault)
 *  <p>The flow has not been published.</p>
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
export class DescribeContactFlowCommand extends $Command
  .classBuilder<
    DescribeContactFlowCommandInput,
    DescribeContactFlowCommandOutput,
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
  .s("AmazonConnectService", "DescribeContactFlow", {})
  .n("ConnectClient", "DescribeContactFlowCommand")
  .f(void 0, void 0)
  .ser(se_DescribeContactFlowCommand)
  .de(de_DescribeContactFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactFlowRequest;
      output: DescribeContactFlowResponse;
    };
    sdk: {
      input: DescribeContactFlowCommandInput;
      output: DescribeContactFlowCommandOutput;
    };
  };
}

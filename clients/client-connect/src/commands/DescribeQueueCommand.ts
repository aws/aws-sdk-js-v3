// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQueueRequest, DescribeQueueResponse } from "../models/models_1";
import { de_DescribeQueueCommand, se_DescribeQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQueueCommand}.
 */
export interface DescribeQueueCommandInput extends DescribeQueueRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueueCommand}.
 */
export interface DescribeQueueCommandOutput extends DescribeQueueResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeQueueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQueueCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueueResponse
 * //   Queue: { // Queue
 * //     Name: "STRING_VALUE",
 * //     QueueArn: "STRING_VALUE",
 * //     QueueId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     OutboundCallerConfig: { // OutboundCallerConfig
 * //       OutboundCallerIdName: "STRING_VALUE",
 * //       OutboundCallerIdNumberId: "STRING_VALUE",
 * //       OutboundFlowId: "STRING_VALUE",
 * //     },
 * //     OutboundEmailConfig: { // OutboundEmailConfig
 * //       OutboundEmailAddressId: "STRING_VALUE",
 * //     },
 * //     HoursOfOperationId: "STRING_VALUE",
 * //     MaxContacts: Number("int"),
 * //     Status: "ENABLED" || "DISABLED",
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
 * @param DescribeQueueCommandInput - {@link DescribeQueueCommandInput}
 * @returns {@link DescribeQueueCommandOutput}
 * @see {@link DescribeQueueCommandInput} for command's `input` shape.
 * @see {@link DescribeQueueCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeQueueCommand extends $Command
  .classBuilder<
    DescribeQueueCommandInput,
    DescribeQueueCommandOutput,
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
  .s("AmazonConnectService", "DescribeQueue", {})
  .n("ConnectClient", "DescribeQueueCommand")
  .f(void 0, void 0)
  .ser(se_DescribeQueueCommand)
  .de(de_DescribeQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueueRequest;
      output: DescribeQueueResponse;
    };
    sdk: {
      input: DescribeQueueCommandInput;
      output: DescribeQueueCommandOutput;
    };
  };
}

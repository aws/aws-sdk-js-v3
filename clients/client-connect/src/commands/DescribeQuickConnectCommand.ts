// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQuickConnectRequest, DescribeQuickConnectResponse } from "../models/models_1";
import { DescribeQuickConnect } from "../schemas/schemas_2_Quick";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQuickConnectCommand}.
 */
export interface DescribeQuickConnectCommandInput extends DescribeQuickConnectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQuickConnectCommand}.
 */
export interface DescribeQuickConnectCommandOutput extends DescribeQuickConnectResponse, __MetadataBearer {}

/**
 * <p>Describes the quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeQuickConnectRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QuickConnectId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQuickConnectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQuickConnectResponse
 * //   QuickConnect: { // QuickConnect
 * //     QuickConnectARN: "STRING_VALUE",
 * //     QuickConnectId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     QuickConnectConfig: { // QuickConnectConfig
 * //       QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER", // required
 * //       UserConfig: { // UserQuickConnectConfig
 * //         UserId: "STRING_VALUE", // required
 * //         ContactFlowId: "STRING_VALUE", // required
 * //       },
 * //       QueueConfig: { // QueueQuickConnectConfig
 * //         QueueId: "STRING_VALUE", // required
 * //         ContactFlowId: "STRING_VALUE", // required
 * //       },
 * //       PhoneConfig: { // PhoneNumberQuickConnectConfig
 * //         PhoneNumber: "STRING_VALUE", // required
 * //       },
 * //     },
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
 * @param DescribeQuickConnectCommandInput - {@link DescribeQuickConnectCommandInput}
 * @returns {@link DescribeQuickConnectCommandOutput}
 * @see {@link DescribeQuickConnectCommandInput} for command's `input` shape.
 * @see {@link DescribeQuickConnectCommandOutput} for command's `response` shape.
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
export class DescribeQuickConnectCommand extends $Command
  .classBuilder<
    DescribeQuickConnectCommandInput,
    DescribeQuickConnectCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeQuickConnect", {})
  .n("ConnectClient", "DescribeQuickConnectCommand")
  .sc(DescribeQuickConnect)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQuickConnectRequest;
      output: DescribeQuickConnectResponse;
    };
    sdk: {
      input: DescribeQuickConnectCommandInput;
      output: DescribeQuickConnectCommandOutput;
    };
  };
}

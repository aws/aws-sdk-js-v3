// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQuickConnectsRequest, ListQuickConnectsResponse } from "../models/models_2";
import { de_ListQuickConnectsCommand, se_ListQuickConnectsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQuickConnectsCommand}.
 */
export interface ListQuickConnectsCommandInput extends ListQuickConnectsRequest {}
/**
 * @public
 *
 * The output of {@link ListQuickConnectsCommand}.
 */
export interface ListQuickConnectsCommandOutput extends ListQuickConnectsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the quick connects for the specified Amazon Connect instance.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListQuickConnectsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuickConnectTypes: [ // QuickConnectTypes
 *     "USER" || "QUEUE" || "PHONE_NUMBER",
 *   ],
 * };
 * const command = new ListQuickConnectsCommand(input);
 * const response = await client.send(command);
 * // { // ListQuickConnectsResponse
 * //   QuickConnectSummaryList: [ // QuickConnectSummaryList
 * //     { // QuickConnectSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQuickConnectsCommandInput - {@link ListQuickConnectsCommandInput}
 * @returns {@link ListQuickConnectsCommandOutput}
 * @see {@link ListQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQuickConnectsCommandOutput} for command's `response` shape.
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
export class ListQuickConnectsCommand extends $Command
  .classBuilder<
    ListQuickConnectsCommandInput,
    ListQuickConnectsCommandOutput,
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
  .s("AmazonConnectService", "ListQuickConnects", {})
  .n("ConnectClient", "ListQuickConnectsCommand")
  .f(void 0, void 0)
  .ser(se_ListQuickConnectsCommand)
  .de(de_ListQuickConnectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQuickConnectsRequest;
      output: ListQuickConnectsResponse;
    };
    sdk: {
      input: ListQuickConnectsCommandInput;
      output: ListQuickConnectsCommandOutput;
    };
  };
}

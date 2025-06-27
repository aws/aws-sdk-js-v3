// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGroupsRequest, GetGroupsResult } from "../models/models_0";
import { de_GetGroupsCommand, se_GetGroupsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupsCommand}.
 */
export interface GetGroupsCommandInput extends GetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupsCommand}.
 */
export interface GetGroupsCommandOutput extends GetGroupsResult, __MetadataBearer {}

/**
 * <p>Retrieves all active group details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetGroupsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetGroupsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupsResult
 * //   Groups: [ // GroupSummaryList
 * //     { // GroupSummary
 * //       GroupName: "STRING_VALUE",
 * //       GroupARN: "STRING_VALUE",
 * //       FilterExpression: "STRING_VALUE",
 * //       InsightsConfiguration: { // InsightsConfiguration
 * //         InsightsEnabled: true || false,
 * //         NotificationsEnabled: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupsCommandInput - {@link GetGroupsCommandInput}
 * @returns {@link GetGroupsCommandOutput}
 * @see {@link GetGroupsCommandInput} for command's `input` shape.
 * @see {@link GetGroupsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetGroupsCommand extends $Command
  .classBuilder<
    GetGroupsCommandInput,
    GetGroupsCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "GetGroups", {})
  .n("XRayClient", "GetGroupsCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupsCommand)
  .de(de_GetGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupsRequest;
      output: GetGroupsResult;
    };
    sdk: {
      input: GetGroupsCommandInput;
      output: GetGroupsCommandOutput;
    };
  };
}

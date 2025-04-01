// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartMonitoringMemberRequest } from "../models/models_0";
import { de_StartMonitoringMemberCommand, se_StartMonitoringMemberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMonitoringMemberCommand}.
 */
export interface StartMonitoringMemberCommandInput extends StartMonitoringMemberRequest {}
/**
 * @public
 *
 * The output of {@link StartMonitoringMemberCommand}.
 */
export interface StartMonitoringMemberCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends a request to enable data ingest for a member account that has a status of
 *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
 *          <p>For valid member accounts, the status is updated as follows.</p>
 *          <ul>
 *             <li>
 *                <p>If Detective enabled the member account, then the new status is
 *                   <code>ENABLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Detective cannot enable the member account, the status remains
 *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartMonitoringMemberCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartMonitoringMemberCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // StartMonitoringMemberRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new StartMonitoringMemberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMonitoringMemberCommandInput - {@link StartMonitoringMemberCommandInput}
 * @returns {@link StartMonitoringMemberCommandOutput}
 * @see {@link StartMonitoringMemberCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMemberCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request attempted an invalid action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>This request cannot be completed if it would cause the number of member accounts in the
 *             behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200
 *             member accounts.</p>
 *             </li>
 *             <li>
 *                <p>This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class StartMonitoringMemberCommand extends $Command
  .classBuilder<
    StartMonitoringMemberCommandInput,
    StartMonitoringMemberCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDetective", "StartMonitoringMember", {})
  .n("DetectiveClient", "StartMonitoringMemberCommand")
  .f(void 0, void 0)
  .ser(se_StartMonitoringMemberCommand)
  .de(de_StartMonitoringMemberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMonitoringMemberRequest;
      output: {};
    };
    sdk: {
      input: StartMonitoringMemberCommandInput;
      output: StartMonitoringMemberCommandOutput;
    };
  };
}

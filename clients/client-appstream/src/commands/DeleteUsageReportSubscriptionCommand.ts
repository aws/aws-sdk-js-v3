// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUsageReportSubscriptionRequest, DeleteUsageReportSubscriptionResult } from "../models/models_0";
import { DeleteUsageReportSubscription } from "../schemas/schemas_22_DeleteUsageReportSubscription";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUsageReportSubscriptionCommand}.
 */
export interface DeleteUsageReportSubscriptionCommandInput extends DeleteUsageReportSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUsageReportSubscriptionCommand}.
 */
export interface DeleteUsageReportSubscriptionCommandOutput
  extends DeleteUsageReportSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Disables usage report generation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteUsageReportSubscriptionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteUsageReportSubscriptionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = {};
 * const command = new DeleteUsageReportSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUsageReportSubscriptionCommandInput - {@link DeleteUsageReportSubscriptionCommandInput}
 * @returns {@link DeleteUsageReportSubscriptionCommandOutput}
 * @see {@link DeleteUsageReportSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageReportSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DeleteUsageReportSubscriptionCommand extends $Command
  .classBuilder<
    DeleteUsageReportSubscriptionCommandInput,
    DeleteUsageReportSubscriptionCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DeleteUsageReportSubscription", {})
  .n("AppStreamClient", "DeleteUsageReportSubscriptionCommand")
  .sc(DeleteUsageReportSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteUsageReportSubscriptionCommandInput;
      output: DeleteUsageReportSubscriptionCommandOutput;
    };
  };
}

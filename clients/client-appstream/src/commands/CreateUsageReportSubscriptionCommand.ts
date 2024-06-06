// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUsageReportSubscriptionRequest, CreateUsageReportSubscriptionResult } from "../models/models_0";
import {
  de_CreateUsageReportSubscriptionCommand,
  se_CreateUsageReportSubscriptionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUsageReportSubscriptionCommand}.
 */
export interface CreateUsageReportSubscriptionCommandInput extends CreateUsageReportSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateUsageReportSubscriptionCommand}.
 */
export interface CreateUsageReportSubscriptionCommandOutput
  extends CreateUsageReportSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUsageReportSubscriptionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUsageReportSubscriptionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = {};
 * const command = new CreateUsageReportSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateUsageReportSubscriptionResult
 * //   S3BucketName: "STRING_VALUE",
 * //   Schedule: "DAILY",
 * // };
 *
 * ```
 *
 * @param CreateUsageReportSubscriptionCommandInput - {@link CreateUsageReportSubscriptionCommandInput}
 * @returns {@link CreateUsageReportSubscriptionCommandOutput}
 * @see {@link CreateUsageReportSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateUsageReportSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class CreateUsageReportSubscriptionCommand extends $Command
  .classBuilder<
    CreateUsageReportSubscriptionCommandInput,
    CreateUsageReportSubscriptionCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "CreateUsageReportSubscription", {})
  .n("AppStreamClient", "CreateUsageReportSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateUsageReportSubscriptionCommand)
  .de(de_CreateUsageReportSubscriptionCommand)
  .build() {}

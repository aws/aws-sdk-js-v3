// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { DescribeApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <p>Describes the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeApplicationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeApplicationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeApplicationRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationResponse
 * //   ApplicationInfo: { // ApplicationInfo
 * //     AccountId: "STRING_VALUE",
 * //     ResourceGroupName: "STRING_VALUE",
 * //     LifeCycle: "STRING_VALUE",
 * //     OpsItemSNSTopicArn: "STRING_VALUE",
 * //     SNSNotificationArn: "STRING_VALUE",
 * //     OpsCenterEnabled: true || false,
 * //     CWEMonitorEnabled: true || false,
 * //     Remarks: "STRING_VALUE",
 * //     AutoConfigEnabled: true || false,
 * //     DiscoveryType: "RESOURCE_GROUP_BASED" || "ACCOUNT_BASED",
 * //     AttachMissingPermission: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationCommandInput - {@link DescribeApplicationCommandInput}
 * @returns {@link DescribeApplicationCommandOutput}
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationCommand extends $Command
  .classBuilder<
    DescribeApplicationCommandInput,
    DescribeApplicationCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "DescribeApplication", {})
  .n("ApplicationInsightsClient", "DescribeApplicationCommand")
  .sc(DescribeApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationRequest;
      output: DescribeApplicationResponse;
    };
    sdk: {
      input: DescribeApplicationCommandInput;
      output: DescribeApplicationCommandOutput;
    };
  };
}

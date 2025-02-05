// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { GetWorkloadInput, GetWorkloadOutput } from "../models/models_0";
import { de_GetWorkloadCommand, se_GetWorkloadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandInput extends GetWorkloadInput {}
/**
 * @public
 *
 * The output of {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandOutput extends GetWorkloadOutput, __MetadataBearer {}

/**
 * <p>Returns information about a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetWorkloadCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetWorkloadCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LaunchWizardClient(config);
 * const input = { // GetWorkloadInput
 *   workloadName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadOutput
 * //   workload: { // WorkloadData
 * //     workloadName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     documentationUrl: "STRING_VALUE",
 * //     iconUrl: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE" || "DISABLED" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkloadCommandInput - {@link GetWorkloadCommandInput}
 * @returns {@link GetWorkloadCommandOutput}
 * @see {@link GetWorkloadCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 * @public
 */
export class GetWorkloadCommand extends $Command
  .classBuilder<
    GetWorkloadCommandInput,
    GetWorkloadCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LaunchWizard", "GetWorkload", {})
  .n("LaunchWizardClient", "GetWorkloadCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkloadCommand)
  .de(de_GetWorkloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadInput;
      output: GetWorkloadOutput;
    };
    sdk: {
      input: GetWorkloadCommandInput;
      output: GetWorkloadCommandOutput;
    };
  };
}

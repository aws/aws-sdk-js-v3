// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProblemRequest, UpdateProblemResponse } from "../models/models_0";
import { de_UpdateProblemCommand, se_UpdateProblemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProblemCommand}.
 */
export interface UpdateProblemCommandInput extends UpdateProblemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProblemCommand}.
 */
export interface UpdateProblemCommandOutput extends UpdateProblemResponse, __MetadataBearer {}

/**
 * <p>Updates the visibility of the problem or specifies the problem as
 *          <code>RESOLVED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateProblemCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateProblemCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateProblemRequest
 *   ProblemId: "STRING_VALUE", // required
 *   UpdateStatus: "RESOLVED",
 *   Visibility: "IGNORED" || "VISIBLE",
 * };
 * const command = new UpdateProblemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateProblemCommandInput - {@link UpdateProblemCommandInput}
 * @returns {@link UpdateProblemCommandOutput}
 * @see {@link UpdateProblemCommandInput} for command's `input` shape.
 * @see {@link UpdateProblemCommandOutput} for command's `response` shape.
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
export class UpdateProblemCommand extends $Command
  .classBuilder<
    UpdateProblemCommandInput,
    UpdateProblemCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "UpdateProblem", {})
  .n("ApplicationInsightsClient", "UpdateProblemCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProblemCommand)
  .de(de_UpdateProblemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProblemRequest;
      output: {};
    };
    sdk: {
      input: UpdateProblemCommandInput;
      output: UpdateProblemCommandOutput;
    };
  };
}

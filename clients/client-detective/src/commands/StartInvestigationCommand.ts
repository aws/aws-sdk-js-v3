// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartInvestigationRequest, StartInvestigationResponse } from "../models/models_0";
import { StartInvestigation } from "../schemas/schemas_3_Organization";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInvestigationCommand}.
 */
export interface StartInvestigationCommandInput extends StartInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link StartInvestigationCommand}.
 */
export interface StartInvestigationCommandOutput extends StartInvestigationResponse, __MetadataBearer {}

/**
 * <p>Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. <code>StartInvestigation</code> initiates an investigation on an entity in a behavior graph. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartInvestigationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartInvestigationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // StartInvestigationRequest
 *   GraphArn: "STRING_VALUE", // required
 *   EntityArn: "STRING_VALUE", // required
 *   ScopeStartTime: new Date("TIMESTAMP"), // required
 *   ScopeEndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new StartInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // StartInvestigationResponse
 * //   InvestigationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartInvestigationCommandInput - {@link StartInvestigationCommandInput}
 * @returns {@link StartInvestigationCommandOutput}
 * @see {@link StartInvestigationCommandInput} for command's `input` shape.
 * @see {@link StartInvestigationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
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
export class StartInvestigationCommand extends $Command
  .classBuilder<
    StartInvestigationCommandInput,
    StartInvestigationCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "StartInvestigation", {})
  .n("DetectiveClient", "StartInvestigationCommand")
  .sc(StartInvestigation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInvestigationRequest;
      output: StartInvestigationResponse;
    };
    sdk: {
      input: StartInvestigationCommandInput;
      output: StartInvestigationCommandOutput;
    };
  };
}

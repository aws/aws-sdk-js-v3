// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateInvestigationStateRequest } from "../models/models_0";
import { UpdateInvestigationState } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInvestigationStateCommand}.
 */
export interface UpdateInvestigationStateCommandInput extends UpdateInvestigationStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInvestigationStateCommand}.
 */
export interface UpdateInvestigationStateCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the state of an investigation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, UpdateInvestigationStateCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, UpdateInvestigationStateCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // UpdateInvestigationStateRequest
 *   GraphArn: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 *   State: "ACTIVE" || "ARCHIVED", // required
 * };
 * const command = new UpdateInvestigationStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInvestigationStateCommandInput - {@link UpdateInvestigationStateCommandInput}
 * @returns {@link UpdateInvestigationStateCommandOutput}
 * @see {@link UpdateInvestigationStateCommandInput} for command's `input` shape.
 * @see {@link UpdateInvestigationStateCommandOutput} for command's `response` shape.
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
export class UpdateInvestigationStateCommand extends $Command
  .classBuilder<
    UpdateInvestigationStateCommandInput,
    UpdateInvestigationStateCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "UpdateInvestigationState", {})
  .n("DetectiveClient", "UpdateInvestigationStateCommand")
  .sc(UpdateInvestigationState)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInvestigationStateRequest;
      output: {};
    };
    sdk: {
      input: UpdateInvestigationStateCommandInput;
      output: UpdateInvestigationStateCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartFleetRequest, StartFleetResult } from "../models/models_0";
import { StartFleet } from "../schemas/schemas_15_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFleetCommand}.
 */
export interface StartFleetCommandInput extends StartFleetRequest {}
/**
 * @public
 *
 * The output of {@link StartFleetCommand}.
 */
export interface StartFleetCommandOutput extends StartFleetResult, __MetadataBearer {}

/**
 * <p>Starts the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // StartFleetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartFleetCommandInput - {@link StartFleetCommandInput}
 * @returns {@link StartFleetCommandOutput}
 * @see {@link StartFleetCommandInput} for command's `input` shape.
 * @see {@link StartFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link RequestLimitExceededException} (client fault)
 *  <p>AppStream 2.0 can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
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
export class StartFleetCommand extends $Command
  .classBuilder<
    StartFleetCommandInput,
    StartFleetCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "StartFleet", {})
  .n("AppStreamClient", "StartFleetCommand")
  .sc(StartFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFleetRequest;
      output: {};
    };
    sdk: {
      input: StartFleetCommandInput;
      output: StartFleetCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { UpdateTrustedEntitySetRequest, UpdateTrustedEntitySetResponse } from "../models/models_1";
import { UpdateTrustedEntitySet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrustedEntitySetCommand}.
 */
export interface UpdateTrustedEntitySetCommandInput extends UpdateTrustedEntitySetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrustedEntitySetCommand}.
 */
export interface UpdateTrustedEntitySetCommandOutput extends UpdateTrustedEntitySetResponse, __MetadataBearer {}

/**
 * <p>Updates the trusted entity set associated with the specified <code>trustedEntitySetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateTrustedEntitySetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateTrustedEntitySetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateTrustedEntitySetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   TrustedEntitySetId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   Activate: true || false,
 * };
 * const command = new UpdateTrustedEntitySetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTrustedEntitySetCommandInput - {@link UpdateTrustedEntitySetCommandInput}
 * @returns {@link UpdateTrustedEntitySetCommandOutput}
 * @see {@link UpdateTrustedEntitySetCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustedEntitySetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class UpdateTrustedEntitySetCommand extends $Command
  .classBuilder<
    UpdateTrustedEntitySetCommandInput,
    UpdateTrustedEntitySetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "UpdateTrustedEntitySet", {})
  .n("GuardDutyClient", "UpdateTrustedEntitySetCommand")
  .sc(UpdateTrustedEntitySet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrustedEntitySetRequest;
      output: {};
    };
    sdk: {
      input: UpdateTrustedEntitySetCommandInput;
      output: UpdateTrustedEntitySetCommandOutput;
    };
  };
}

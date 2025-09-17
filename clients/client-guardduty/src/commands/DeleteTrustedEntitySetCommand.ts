// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteTrustedEntitySetRequest, DeleteTrustedEntitySetResponse } from "../models/models_0";
import { de_DeleteTrustedEntitySetCommand, se_DeleteTrustedEntitySetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrustedEntitySetCommand}.
 */
export interface DeleteTrustedEntitySetCommandInput extends DeleteTrustedEntitySetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrustedEntitySetCommand}.
 */
export interface DeleteTrustedEntitySetCommandOutput extends DeleteTrustedEntitySetResponse, __MetadataBearer {}

/**
 * <p>Deletes the trusted entity set that is associated with the specified
 *        <code>trustedEntitySetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteTrustedEntitySetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteTrustedEntitySetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteTrustedEntitySetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   TrustedEntitySetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrustedEntitySetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrustedEntitySetCommandInput - {@link DeleteTrustedEntitySetCommandInput}
 * @returns {@link DeleteTrustedEntitySetCommandOutput}
 * @see {@link DeleteTrustedEntitySetCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustedEntitySetCommandOutput} for command's `response` shape.
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
export class DeleteTrustedEntitySetCommand extends $Command
  .classBuilder<
    DeleteTrustedEntitySetCommandInput,
    DeleteTrustedEntitySetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "DeleteTrustedEntitySet", {})
  .n("GuardDutyClient", "DeleteTrustedEntitySetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrustedEntitySetCommand)
  .de(de_DeleteTrustedEntitySetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrustedEntitySetRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrustedEntitySetCommandInput;
      output: DeleteTrustedEntitySetCommandOutput;
    };
  };
}

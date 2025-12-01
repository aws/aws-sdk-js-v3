// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { DeleteFilterRequest, DeleteFilterResponse } from "../models/models_0";
import { DeleteFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFilterCommand}.
 */
export interface DeleteFilterCommandInput extends DeleteFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFilterCommand}.
 */
export interface DeleteFilterCommandOutput extends DeleteFilterResponse, __MetadataBearer {}

/**
 * <p>Deletes the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteFilterRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFilterCommandInput - {@link DeleteFilterCommandInput}
 * @returns {@link DeleteFilterCommandOutput}
 * @see {@link DeleteFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteFilterCommandOutput} for command's `response` shape.
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
export class DeleteFilterCommand extends $Command
  .classBuilder<
    DeleteFilterCommandInput,
    DeleteFilterCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DeleteFilter", {})
  .n("GuardDutyClient", "DeleteFilterCommand")
  .sc(DeleteFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFilterRequest;
      output: {};
    };
    sdk: {
      input: DeleteFilterCommandInput;
      output: DeleteFilterCommandOutput;
    };
  };
}

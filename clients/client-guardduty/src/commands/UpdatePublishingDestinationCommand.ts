// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { UpdatePublishingDestinationRequest, UpdatePublishingDestinationResponse } from "../models/models_1";
import { UpdatePublishingDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePublishingDestinationCommand}.
 */
export interface UpdatePublishingDestinationCommandInput extends UpdatePublishingDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublishingDestinationCommand}.
 */
export interface UpdatePublishingDestinationCommandOutput
  extends UpdatePublishingDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Updates information about the publishing destination specified by the
 *         <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdatePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdatePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdatePublishingDestinationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 *   DestinationProperties: { // DestinationProperties
 *     DestinationArn: "STRING_VALUE",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdatePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePublishingDestinationCommandInput - {@link UpdatePublishingDestinationCommandInput}
 * @returns {@link UpdatePublishingDestinationCommandOutput}
 * @see {@link UpdatePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdatePublishingDestinationCommandOutput} for command's `response` shape.
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
export class UpdatePublishingDestinationCommand extends $Command
  .classBuilder<
    UpdatePublishingDestinationCommandInput,
    UpdatePublishingDestinationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "UpdatePublishingDestination", {})
  .n("GuardDutyClient", "UpdatePublishingDestinationCommand")
  .sc(UpdatePublishingDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePublishingDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdatePublishingDestinationCommandInput;
      output: UpdatePublishingDestinationCommandOutput;
    };
  };
}

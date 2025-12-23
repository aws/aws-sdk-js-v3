// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { DeletePublishingDestinationRequest, DeletePublishingDestinationResponse } from "../models/models_0";
import { DeletePublishingDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePublishingDestinationCommand}.
 */
export interface DeletePublishingDestinationCommandInput extends DeletePublishingDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublishingDestinationCommand}.
 */
export interface DeletePublishingDestinationCommandOutput extends DeletePublishingDestinationResponse, __MetadataBearer {}

/**
 * <p>Deletes the publishing definition with the specified <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeletePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeletePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeletePublishingDestinationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 * };
 * const command = new DeletePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePublishingDestinationCommandInput - {@link DeletePublishingDestinationCommandInput}
 * @returns {@link DeletePublishingDestinationCommandOutput}
 * @see {@link DeletePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DeletePublishingDestinationCommandOutput} for command's `response` shape.
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
export class DeletePublishingDestinationCommand extends $Command
  .classBuilder<
    DeletePublishingDestinationCommandInput,
    DeletePublishingDestinationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DeletePublishingDestination", {})
  .n("GuardDutyClient", "DeletePublishingDestinationCommand")
  .sc(DeletePublishingDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePublishingDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeletePublishingDestinationCommandInput;
      output: DeletePublishingDestinationCommandOutput;
    };
  };
}

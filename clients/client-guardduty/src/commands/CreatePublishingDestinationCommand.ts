// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreatePublishingDestinationRequest, CreatePublishingDestinationResponse } from "../models/models_0";
import { CreatePublishingDestination } from "../schemas/schemas_15_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePublishingDestinationCommand}.
 */
export interface CreatePublishingDestinationCommandInput extends CreatePublishingDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublishingDestinationCommand}.
 */
export interface CreatePublishingDestinationCommandOutput
  extends CreatePublishingDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the
 *       findings, the destination resource must exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreatePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreatePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreatePublishingDestinationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   DestinationType: "S3", // required
 *   DestinationProperties: { // DestinationProperties
 *     DestinationArn: "STRING_VALUE",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreatePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePublishingDestinationResponse
 * //   DestinationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePublishingDestinationCommandInput - {@link CreatePublishingDestinationCommandInput}
 * @returns {@link CreatePublishingDestinationCommandOutput}
 * @see {@link CreatePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link CreatePublishingDestinationCommandOutput} for command's `response` shape.
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
export class CreatePublishingDestinationCommand extends $Command
  .classBuilder<
    CreatePublishingDestinationCommandInput,
    CreatePublishingDestinationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "CreatePublishingDestination", {})
  .n("GuardDutyClient", "CreatePublishingDestinationCommand")
  .sc(CreatePublishingDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePublishingDestinationRequest;
      output: CreatePublishingDestinationResponse;
    };
    sdk: {
      input: CreatePublishingDestinationCommandInput;
      output: CreatePublishingDestinationCommandOutput;
    };
  };
}

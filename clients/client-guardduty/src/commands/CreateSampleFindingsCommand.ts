// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { CreateSampleFindingsRequest, CreateSampleFindingsResponse } from "../models/models_0";
import { CreateSampleFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSampleFindingsCommand}.
 */
export interface CreateSampleFindingsCommandInput extends CreateSampleFindingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateSampleFindingsCommand}.
 */
export interface CreateSampleFindingsCommandOutput extends CreateSampleFindingsResponse, __MetadataBearer {}

/**
 * <p>Generates sample findings of types specified by the list of finding types. If 'NULL' is
 *       specified for <code>findingTypes</code>, the API generates sample findings of all supported
 *       finding types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateSampleFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateSampleFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateSampleFindingsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingTypes: [ // FindingTypes
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateSampleFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSampleFindingsCommandInput - {@link CreateSampleFindingsCommandInput}
 * @returns {@link CreateSampleFindingsCommandOutput}
 * @see {@link CreateSampleFindingsCommandInput} for command's `input` shape.
 * @see {@link CreateSampleFindingsCommandOutput} for command's `response` shape.
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
export class CreateSampleFindingsCommand extends $Command
  .classBuilder<
    CreateSampleFindingsCommandInput,
    CreateSampleFindingsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "CreateSampleFindings", {})
  .n("GuardDutyClient", "CreateSampleFindingsCommand")
  .sc(CreateSampleFindings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSampleFindingsRequest;
      output: {};
    };
    sdk: {
      input: CreateSampleFindingsCommandInput;
      output: CreateSampleFindingsCommandOutput;
    };
  };
}

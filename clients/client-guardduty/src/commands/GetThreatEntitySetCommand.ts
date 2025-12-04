// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { GetThreatEntitySetRequest, GetThreatEntitySetResponse } from "../models/models_1";
import { GetThreatEntitySet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetThreatEntitySetCommand}.
 */
export interface GetThreatEntitySetCommandInput extends GetThreatEntitySetRequest {}
/**
 * @public
 *
 * The output of {@link GetThreatEntitySetCommand}.
 */
export interface GetThreatEntitySetCommandOutput extends GetThreatEntitySetResponse, __MetadataBearer {}

/**
 * <p>Retrieves the threat entity set associated with the specified <code>threatEntitySetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetThreatEntitySetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetThreatEntitySetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetThreatEntitySetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   ThreatEntitySetId: "STRING_VALUE", // required
 * };
 * const command = new GetThreatEntitySetCommand(input);
 * const response = await client.send(command);
 * // { // GetThreatEntitySetResponse
 * //   Name: "STRING_VALUE", // required
 * //   Format: "TXT" || "STIX" || "OTX_CSV" || "ALIEN_VAULT" || "PROOF_POINT" || "FIRE_EYE", // required
 * //   Location: "STRING_VALUE", // required
 * //   ExpectedBucketOwner: "STRING_VALUE",
 * //   Status: "INACTIVE" || "ACTIVATING" || "ACTIVE" || "DEACTIVATING" || "ERROR" || "DELETE_PENDING" || "DELETED", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   ErrorDetails: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetThreatEntitySetCommandInput - {@link GetThreatEntitySetCommandInput}
 * @returns {@link GetThreatEntitySetCommandOutput}
 * @see {@link GetThreatEntitySetCommandInput} for command's `input` shape.
 * @see {@link GetThreatEntitySetCommandOutput} for command's `response` shape.
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
export class GetThreatEntitySetCommand extends $Command
  .classBuilder<
    GetThreatEntitySetCommandInput,
    GetThreatEntitySetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetThreatEntitySet", {})
  .n("GuardDutyClient", "GetThreatEntitySetCommand")
  .sc(GetThreatEntitySet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetThreatEntitySetRequest;
      output: GetThreatEntitySetResponse;
    };
    sdk: {
      input: GetThreatEntitySetCommandInput;
      output: GetThreatEntitySetCommandOutput;
    };
  };
}

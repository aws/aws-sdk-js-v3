// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateThreatIntelSetRequest, CreateThreatIntelSetResponse } from "../models/models_0";
import { CreateThreatIntelSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateThreatIntelSetCommand}.
 */
export interface CreateThreatIntelSetCommandInput extends CreateThreatIntelSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateThreatIntelSetCommand}.
 */
export interface CreateThreatIntelSetCommandOutput extends CreateThreatIntelSetResponse, __MetadataBearer {}

/**
 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateThreatIntelSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Format: "TXT" || "STIX" || "OTX_CSV" || "ALIEN_VAULT" || "PROOF_POINT" || "FIRE_EYE", // required
 *   Location: "STRING_VALUE", // required
 *   Activate: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new CreateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateThreatIntelSetResponse
 * //   ThreatIntelSetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateThreatIntelSetCommandInput - {@link CreateThreatIntelSetCommandInput}
 * @returns {@link CreateThreatIntelSetCommandOutput}
 * @see {@link CreateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An access denied exception object.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
 *
 * @public
 */
export class CreateThreatIntelSetCommand extends command<CreateThreatIntelSetCommandInput, CreateThreatIntelSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateThreatIntelSet",
  CreateThreatIntelSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThreatIntelSetRequest;
      output: CreateThreatIntelSetResponse;
    };
    sdk: {
      input: CreateThreatIntelSetCommandInput;
      output: CreateThreatIntelSetCommandOutput;
    };
  };
}

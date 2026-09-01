// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCustomDetectionRuleAssociationRequest,
  GetCustomDetectionRuleAssociationResponse,
} from "../models/models_0";
import { GetCustomDetectionRuleAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomDetectionRuleAssociationCommand}.
 */
export interface GetCustomDetectionRuleAssociationCommandInput extends GetCustomDetectionRuleAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomDetectionRuleAssociationCommand}.
 */
export interface GetCustomDetectionRuleAssociationCommandOutput extends GetCustomDetectionRuleAssociationResponse, __MetadataBearer {}

/**
 * <p>Returns details for a custom detection rule association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetCustomDetectionRuleAssociationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetCustomDetectionRuleAssociationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetCustomDetectionRuleAssociationRequest
 *   RuleId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetCustomDetectionRuleAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomDetectionRuleAssociationResponse
 * //   RuleAssociation: { // AssociationDetail
 * //     AssociationId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     RuleId: "STRING_VALUE", // required
 * //     AccountId: "STRING_VALUE", // required
 * //     Mode: "LIVE" || "DRY_RUN", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCustomDetectionRuleAssociationCommandInput - {@link GetCustomDetectionRuleAssociationCommandInput}
 * @returns {@link GetCustomDetectionRuleAssociationCommandOutput}
 * @see {@link GetCustomDetectionRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCustomDetectionRuleAssociationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An access denied exception object.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class GetCustomDetectionRuleAssociationCommand extends command<GetCustomDetectionRuleAssociationCommandInput, GetCustomDetectionRuleAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomDetectionRuleAssociation",
  GetCustomDetectionRuleAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomDetectionRuleAssociationRequest;
      output: GetCustomDetectionRuleAssociationResponse;
    };
    sdk: {
      input: GetCustomDetectionRuleAssociationCommandInput;
      output: GetCustomDetectionRuleAssociationCommandOutput;
    };
  };
}

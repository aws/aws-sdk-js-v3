// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFreeTrialStatusesV2Request, ListFreeTrialStatusesV2Response } from "../models/models_3";
import { ListFreeTrialStatusesV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFreeTrialStatusesV2Command}.
 */
export interface ListFreeTrialStatusesV2CommandInput extends ListFreeTrialStatusesV2Request {}
/**
 * @public
 *
 * The output of {@link ListFreeTrialStatusesV2Command}.
 */
export interface ListFreeTrialStatusesV2CommandOutput extends ListFreeTrialStatusesV2Response, __MetadataBearer {}

/**
 * <p>Lists the free trial status of Security Hub features. A delegated Security Hub administrator can list the status for accounts in its organization. Any other account can list the status only for itself. Free trial status remains available after a feature is disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListFreeTrialStatusesV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListFreeTrialStatusesV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListFreeTrialStatusesV2Request
 *   AccountIds: [ // FreeTrialAccountIdList
 *     "STRING_VALUE",
 *   ],
 *   Statuses: [ // FreeTrialStatusValueList
 *     "ACTIVE" || "INACTIVE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFreeTrialStatusesV2Command(input);
 * const response = await client.send(command);
 * // { // ListFreeTrialStatusesV2Response
 * //   AccountFreeTrialStatuses: [ // AccountFreeTrialStatusList // required
 * //     { // AccountFreeTrialStatus
 * //       AccountId: "STRING_VALUE", // required
 * //       EvaluatedAt: new Date("TIMESTAMP"), // required
 * //       FreeTrialStatuses: [ // FreeTrialStatusList // required
 * //         { // FreeTrialStatus
 * //           FeatureType: "SECURITY_HUB_V2" || "SECURITY_HUB_V2_MULTI_CLOUD_AZURE", // required
 * //           Status: "ACTIVE" || "INACTIVE", // required
 * //           StartedAt: new Date("TIMESTAMP"), // required
 * //           ExpiresAt: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFreeTrialStatusesV2CommandInput - {@link ListFreeTrialStatusesV2CommandInput}
 * @returns {@link ListFreeTrialStatusesV2CommandOutput}
 * @see {@link ListFreeTrialStatusesV2CommandInput} for command's `input` shape.
 * @see {@link ListFreeTrialStatusesV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class ListFreeTrialStatusesV2Command extends command<ListFreeTrialStatusesV2CommandInput, ListFreeTrialStatusesV2CommandOutput>(
  _ep0,
  _mw0,
  "ListFreeTrialStatusesV2",
  ListFreeTrialStatusesV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFreeTrialStatusesV2Request;
      output: ListFreeTrialStatusesV2Response;
    };
    sdk: {
      input: ListFreeTrialStatusesV2CommandInput;
      output: ListFreeTrialStatusesV2CommandOutput;
    };
  };
}

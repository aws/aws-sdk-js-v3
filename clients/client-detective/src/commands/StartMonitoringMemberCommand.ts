// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMonitoringMemberRequest } from "../models/models_0";
import { StartMonitoringMember$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMonitoringMemberCommand}.
 */
export interface StartMonitoringMemberCommandInput extends StartMonitoringMemberRequest {}
/**
 * @public
 *
 * The output of {@link StartMonitoringMemberCommand}.
 */
export interface StartMonitoringMemberCommandOutput extends __MetadataBearer {}

/**
 * Sends a request to enable data ingest for a member account that has a status of `ACCEPTED_BUT_DISABLED`.
 *
 * For valid member accounts, the status is updated as follows.
 *
 * - If Detective enabled the member account, then the new status is `ENABLED`.
 * - If Detective cannot enable the member account, the status remains `ACCEPTED_BUT_DISABLED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartMonitoringMemberCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartMonitoringMemberCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // StartMonitoringMemberRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new StartMonitoringMemberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMonitoringMemberCommandInput - {@link StartMonitoringMemberCommandInput}
 * @returns {@link StartMonitoringMemberCommandOutput}
 * @see {@link StartMonitoringMemberCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMemberCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request issuer does not have permission to access this resource or perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request attempted an invalid action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request was valid but failed because of a problem with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request refers to a nonexistent resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request cannot be completed for one of the following reasons.
 *
 * - This request cannot be completed if it would cause the number of member accounts in the behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200 member accounts.
 * - This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters are invalid.
 *
 * @throws {@link DetectiveServiceException}
 *
 * Base exception class for all service exceptions from Detective service.
 *
 * @public
 */
export class StartMonitoringMemberCommand extends command<StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput>(
  _ep0,
  _mw0,
  "StartMonitoringMember",
  StartMonitoringMember$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMonitoringMemberRequest;
      output: {};
    };
    sdk: {
      input: StartMonitoringMemberCommandInput;
      output: StartMonitoringMemberCommandOutput;
    };
  };
}

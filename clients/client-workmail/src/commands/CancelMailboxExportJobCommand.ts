// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMailboxExportJobRequest, CancelMailboxExportJobResponse } from "../models/models_0";
import { CancelMailboxExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelMailboxExportJobCommand}.
 */
export interface CancelMailboxExportJobCommandInput extends CancelMailboxExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelMailboxExportJobCommand}.
 */
export interface CancelMailboxExportJobCommandOutput extends CancelMailboxExportJobResponse, __MetadataBearer {}

/**
 * Cancels a mailbox export job.
 *
 * > **Note:** If the mailbox export job is near completion, it might not be possible to cancel it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CancelMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CancelMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CancelMailboxExportJobRequest
 *   ClientToken: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new CancelMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelMailboxExportJobCommandInput - {@link CancelMailboxExportJobCommandInput}
 * @returns {@link CancelMailboxExportJobCommandOutput}
 * @see {@link CancelMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * The identifier supplied for the user, group, or resource does not exist in your organization.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class CancelMailboxExportJobCommand extends command<CancelMailboxExportJobCommandInput, CancelMailboxExportJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelMailboxExportJob",
  CancelMailboxExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMailboxExportJobRequest;
      output: {};
    };
    sdk: {
      input: CancelMailboxExportJobCommandInput;
      output: CancelMailboxExportJobCommandOutput;
    };
  };
}

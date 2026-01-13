// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelMailboxExportJobRequest, CancelMailboxExportJobResponse } from "../models/models_0";
import { CancelMailboxExportJob$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Cancels a mailbox export job.</p>
 *          <note>
 *             <p>If the mailbox export job is near completion, it might not be possible to cancel
 *             it.</p>
 *          </note>
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
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class CancelMailboxExportJobCommand extends $Command
  .classBuilder<
    CancelMailboxExportJobCommandInput,
    CancelMailboxExportJobCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "CancelMailboxExportJob", {})
  .n("WorkMailClient", "CancelMailboxExportJobCommand")
  .sc(CancelMailboxExportJob$)
  .build() {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateQualificationFromWorkerRequest,
  DisassociateQualificationFromWorkerResponse,
} from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DisassociateQualificationFromWorker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateQualificationFromWorkerCommand}.
 */
export interface DisassociateQualificationFromWorkerCommandInput extends DisassociateQualificationFromWorkerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateQualificationFromWorkerCommand}.
 */
export interface DisassociateQualificationFromWorkerCommandOutput extends DisassociateQualificationFromWorkerResponse, __MetadataBearer {}

/**
 * <p>
 *             The 	<code>DisassociateQualificationFromWorker</code>
 *             revokes a previously granted Qualification from a user.
 *         </p>
 *         <p>
 *             You can provide a text message explaining why the Qualification was
 *             revoked. The user who had the Qualification can see this message.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DisassociateQualificationFromWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DisassociateQualificationFromWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // DisassociateQualificationFromWorkerRequest
 *   WorkerId: "STRING_VALUE", // required
 *   QualificationTypeId: "STRING_VALUE", // required
 *   Reason: "STRING_VALUE",
 * };
 * const command = new DisassociateQualificationFromWorkerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateQualificationFromWorkerCommandInput - {@link DisassociateQualificationFromWorkerCommandInput}
 * @returns {@link DisassociateQualificationFromWorkerCommandOutput}
 * @see {@link DisassociateQualificationFromWorkerCommandInput} for command's `input` shape.
 * @see {@link DisassociateQualificationFromWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class DisassociateQualificationFromWorkerCommand extends $Command
  .classBuilder<
    DisassociateQualificationFromWorkerCommandInput,
    DisassociateQualificationFromWorkerCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "DisassociateQualificationFromWorker", {})
  .n("MTurkClient", "DisassociateQualificationFromWorkerCommand")
  .sc(DisassociateQualificationFromWorker$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateQualificationFromWorkerRequest;
      output: {};
    };
    sdk: {
      input: DisassociateQualificationFromWorkerCommandInput;
      output: DisassociateQualificationFromWorkerCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateQualificationWithWorkerRequest,
  AssociateQualificationWithWorkerResponse,
} from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AssociateQualificationWithWorker } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateQualificationWithWorkerCommand}.
 */
export interface AssociateQualificationWithWorkerCommandInput extends AssociateQualificationWithWorkerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateQualificationWithWorkerCommand}.
 */
export interface AssociateQualificationWithWorkerCommandOutput
  extends AssociateQualificationWithWorkerResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The <code>AssociateQualificationWithWorker</code> operation gives a Worker a
 *             Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker
 *             submit a Qualification request. It gives the Qualification directly to the Worker.
 *         </p>
 *
 *         <p>
 *             You can only assign a Qualification of a Qualification type that you created (using
 *             the <code>CreateQualificationType</code> operation).
 *         </p>
 *
 *         <note>
 *             <p>
 *                 Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification
 *                 requests for the Qualification by the Worker. If you assign a Qualification to a
 *                 Worker, then later grant a Qualification request made by the Worker, the granting of
 *                 the request may modify the Qualification score. To resolve a pending Qualification
 *                 request without affecting the Qualification the Worker already has, reject the
 *                 request with the <code>RejectQualificationRequest</code> operation.
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AssociateQualificationWithWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AssociateQualificationWithWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // AssociateQualificationWithWorkerRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   WorkerId: "STRING_VALUE", // required
 *   IntegerValue: Number("int"),
 *   SendNotification: true || false,
 * };
 * const command = new AssociateQualificationWithWorkerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateQualificationWithWorkerCommandInput - {@link AssociateQualificationWithWorkerCommandInput}
 * @returns {@link AssociateQualificationWithWorkerCommandOutput}
 * @see {@link AssociateQualificationWithWorkerCommandInput} for command's `input` shape.
 * @see {@link AssociateQualificationWithWorkerCommandOutput} for command's `response` shape.
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
export class AssociateQualificationWithWorkerCommand extends $Command
  .classBuilder<
    AssociateQualificationWithWorkerCommandInput,
    AssociateQualificationWithWorkerCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "AssociateQualificationWithWorker", {})
  .n("MTurkClient", "AssociateQualificationWithWorkerCommand")
  .sc(AssociateQualificationWithWorker)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateQualificationWithWorkerRequest;
      output: {};
    };
    sdk: {
      input: AssociateQualificationWithWorkerCommandInput;
      output: AssociateQualificationWithWorkerCommandOutput;
    };
  };
}

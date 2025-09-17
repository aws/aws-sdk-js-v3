// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NotifyWorkersRequest, NotifyWorkersResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_NotifyWorkersCommand, se_NotifyWorkersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyWorkersCommand}.
 */
export interface NotifyWorkersCommandInput extends NotifyWorkersRequest {}
/**
 * @public
 *
 * The output of {@link NotifyWorkersCommand}.
 */
export interface NotifyWorkersCommandOutput extends NotifyWorkersResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>NotifyWorkers</code>
 *             operation sends an email to one or more Workers that you specify with
 *             the Worker ID. You can specify up to 100 Worker IDs to send the same
 *             message with a single call to the NotifyWorkers operation. The
 *             NotifyWorkers operation will send a notification email to a Worker
 *             only if you have previously approved or rejected work from the
 *             Worker.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, NotifyWorkersCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, NotifyWorkersCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // NotifyWorkersRequest
 *   Subject: "STRING_VALUE", // required
 *   MessageText: "STRING_VALUE", // required
 *   WorkerIds: [ // CustomerIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NotifyWorkersCommand(input);
 * const response = await client.send(command);
 * // { // NotifyWorkersResponse
 * //   NotifyWorkersFailureStatuses: [ // NotifyWorkersFailureStatusList
 * //     { // NotifyWorkersFailureStatus
 * //       NotifyWorkersFailureCode: "SoftFailure" || "HardFailure",
 * //       NotifyWorkersFailureMessage: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param NotifyWorkersCommandInput - {@link NotifyWorkersCommandInput}
 * @returns {@link NotifyWorkersCommandOutput}
 * @see {@link NotifyWorkersCommandInput} for command's `input` shape.
 * @see {@link NotifyWorkersCommandOutput} for command's `response` shape.
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
export class NotifyWorkersCommand extends $Command
  .classBuilder<
    NotifyWorkersCommandInput,
    NotifyWorkersCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "NotifyWorkers", {})
  .n("MTurkClient", "NotifyWorkersCommand")
  .f(void 0, void 0)
  .ser(se_NotifyWorkersCommand)
  .de(de_NotifyWorkersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyWorkersRequest;
      output: NotifyWorkersResponse;
    };
    sdk: {
      input: NotifyWorkersCommandInput;
      output: NotifyWorkersCommandOutput;
    };
  };
}

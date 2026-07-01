// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInsightRequest, DeleteInsightResponse } from "../models/models_0";
import { DeleteInsight$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInsightCommand}.
 */
export interface DeleteInsightCommandInput extends DeleteInsightRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInsightCommand}.
 */
export interface DeleteInsightCommandOutput extends DeleteInsightResponse, __MetadataBearer {}

/**
 * <p>Deletes the insight along with the associated anomalies, events and recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DeleteInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DeleteInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // DeleteInsightRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteInsightCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInsightCommandInput - {@link DeleteInsightCommandInput}
 * @returns {@link DeleteInsightCommandOutput}
 * @see {@link DeleteInsightCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> An exception that is thrown when a conflict occurs. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class DeleteInsightCommand extends command<DeleteInsightCommandInput, DeleteInsightCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInsight",
  DeleteInsight$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInsightRequest;
      output: {};
    };
    sdk: {
      input: DeleteInsightCommandInput;
      output: DeleteInsightCommandOutput;
    };
  };
}

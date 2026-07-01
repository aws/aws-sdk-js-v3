// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateResourceRequest, AssociateResourceResponse } from "../models/models_0";
import { AssociateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateResourceCommand}.
 */
export interface AssociateResourceCommandInput extends AssociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceCommand}.
 */
export interface AssociateResourceCommandOutput extends AssociateResourceResponse, __MetadataBearer {}

/**
 * <p>Associates a canary with a group. Using groups can help you with
 *          managing and automating your canaries, and you can also view aggregated run results and statistics
 *          for all canaries in a group. </p>
 *          <p>You must run this operation in the Region where the canary exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, AssociateResourceCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, AssociateResourceCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // AssociateResourceRequest
 *   GroupIdentifier: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateResourceCommandInput - {@link AssociateResourceCommandInput}
 * @returns {@link AssociateResourceCommandOutput}
 * @see {@link AssociateResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota value.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class AssociateResourceCommand extends command<AssociateResourceCommandInput, AssociateResourceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateResource",
  AssociateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceRequest;
      output: {};
    };
    sdk: {
      input: AssociateResourceCommandInput;
      output: AssociateResourceCommandOutput;
    };
  };
}

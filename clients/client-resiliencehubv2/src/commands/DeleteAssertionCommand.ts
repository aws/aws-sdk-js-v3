// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssertionRequest, DeleteAssertionResponse } from "../models/models_0";
import { DeleteAssertion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssertionCommand}.
 */
export interface DeleteAssertionCommandInput extends DeleteAssertionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssertionCommand}.
 */
export interface DeleteAssertionCommandOutput extends DeleteAssertionResponse, __MetadataBearer {}

/**
 * <p>Deletes a resilience assertion from a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteAssertionCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteAssertionCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteAssertionRequest
 *   serviceArn: "STRING_VALUE", // required
 *   assertionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssertionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAssertionResponse
 * //   assertionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAssertionCommandInput - {@link DeleteAssertionCommandInput}
 * @returns {@link DeleteAssertionCommandOutput}
 * @see {@link DeleteAssertionCommandInput} for command's `input` shape.
 * @see {@link DeleteAssertionCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class DeleteAssertionCommand extends command<DeleteAssertionCommandInput, DeleteAssertionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssertion",
  DeleteAssertion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssertionRequest;
      output: DeleteAssertionResponse;
    };
    sdk: {
      input: DeleteAssertionCommandInput;
      output: DeleteAssertionCommandOutput;
    };
  };
}

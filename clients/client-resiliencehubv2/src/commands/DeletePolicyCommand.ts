// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePolicyRequest, DeletePolicyResponse } from "../models/models_0";
import { DeletePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends DeletePolicyResponse, __MetadataBearer {}

/**
 * Deletes a resilience policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeletePolicyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeletePolicyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeletePolicyRequest
 *   policyArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeletePolicyResponse
 * //   policyArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeletePolicyCommandInput - {@link DeletePolicyCommandInput}
 * @returns {@link DeletePolicyCommandOutput}
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class DeletePolicyCommand extends command<DeletePolicyCommandInput, DeletePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeletePolicy",
  DeletePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyRequest;
      output: DeletePolicyResponse;
    };
    sdk: {
      input: DeletePolicyCommandInput;
      output: DeletePolicyCommandOutput;
    };
  };
}

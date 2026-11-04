// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssertionRequest, UpdateAssertionResponse } from "../models/models_0";
import { UpdateAssertion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssertionCommand}.
 */
export interface UpdateAssertionCommandInput extends UpdateAssertionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssertionCommand}.
 */
export interface UpdateAssertionCommandOutput extends UpdateAssertionResponse, __MetadataBearer {}

/**
 * Updates a resilience assertion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateAssertionCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateAssertionCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateAssertionRequest
 *   serviceArn: "STRING_VALUE", // required
 *   assertionId: "STRING_VALUE", // required
 *   text: "STRING_VALUE",
 * };
 * const command = new UpdateAssertionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssertionResponse
 * //   assertion: { // Assertion
 * //     serviceArn: "STRING_VALUE", // required
 * //     assertionId: "STRING_VALUE", // required
 * //     text: "STRING_VALUE", // required
 * //     source: "AI_GENERATED" || "USER", // required
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssertionCommandInput - {@link UpdateAssertionCommandInput}
 * @returns {@link UpdateAssertionCommandOutput}
 * @see {@link UpdateAssertionCommandInput} for command's `input` shape.
 * @see {@link UpdateAssertionCommandOutput} for command's `response` shape.
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
export class UpdateAssertionCommand extends command<UpdateAssertionCommandInput, UpdateAssertionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssertion",
  UpdateAssertion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssertionRequest;
      output: UpdateAssertionResponse;
    };
    sdk: {
      input: UpdateAssertionCommandInput;
      output: UpdateAssertionCommandOutput;
    };
  };
}

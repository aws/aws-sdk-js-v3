// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssertionRequest, CreateAssertionResponse } from "../models/models_0";
import { CreateAssertion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssertionCommand}.
 */
export interface CreateAssertionCommandInput extends CreateAssertionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssertionCommand}.
 */
export interface CreateAssertionCommandOutput extends CreateAssertionResponse, __MetadataBearer {}

/**
 * Creates a resilience assertion for a service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateAssertionCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateAssertionCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateAssertionRequest
 *   serviceArn: "STRING_VALUE", // required
 *   text: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssertionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssertionResponse
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
 * @param CreateAssertionCommandInput - {@link CreateAssertionCommandInput}
 * @returns {@link CreateAssertionCommandOutput}
 * @see {@link CreateAssertionCommandInput} for command's `input` shape.
 * @see {@link CreateAssertionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quota exceeded.
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
export class CreateAssertionCommand extends command<CreateAssertionCommandInput, CreateAssertionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssertion",
  CreateAssertion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssertionRequest;
      output: CreateAssertionResponse;
    };
    sdk: {
      input: CreateAssertionCommandInput;
      output: CreateAssertionCommandOutput;
    };
  };
}

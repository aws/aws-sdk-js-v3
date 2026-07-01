// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserJourneyRequest, CreateUserJourneyResponse } from "../models/models_0";
import { CreateUserJourney$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateUserJourneyCommand}.
 */
export interface CreateUserJourneyCommandInput extends CreateUserJourneyRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserJourneyCommand}.
 */
export interface CreateUserJourneyCommandOutput extends CreateUserJourneyResponse, __MetadataBearer {}

/**
 * <p>Creates a user journey within a system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateUserJourneyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateUserJourneyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateUserJourneyRequest
 *   systemArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policyArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateUserJourneyCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserJourneyResponse
 * //   userJourney: { // UserJourney
 * //     userJourneyId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     policyArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateUserJourneyCommandInput - {@link CreateUserJourneyCommandInput}
 * @returns {@link CreateUserJourneyCommandOutput}
 * @see {@link CreateUserJourneyCommandInput} for command's `input` shape.
 * @see {@link CreateUserJourneyCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quota exceeded.</p>
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
export class CreateUserJourneyCommand extends command<CreateUserJourneyCommandInput, CreateUserJourneyCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserJourney",
  CreateUserJourney$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserJourneyRequest;
      output: CreateUserJourneyResponse;
    };
    sdk: {
      input: CreateUserJourneyCommandInput;
      output: CreateUserJourneyCommandOutput;
    };
  };
}

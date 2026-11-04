// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserJourneyRequest, UpdateUserJourneyResponse } from "../models/models_0";
import { UpdateUserJourney$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserJourneyCommand}.
 */
export interface UpdateUserJourneyCommandInput extends UpdateUserJourneyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserJourneyCommand}.
 */
export interface UpdateUserJourneyCommandOutput extends UpdateUserJourneyResponse, __MetadataBearer {}

/**
 * Updates an existing user journey.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateUserJourneyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateUserJourneyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateUserJourneyRequest
 *   systemArn: "STRING_VALUE", // required
 *   userJourneyId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   policyArn: "STRING_VALUE",
 * };
 * const command = new UpdateUserJourneyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserJourneyResponse
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
 * @param UpdateUserJourneyCommandInput - {@link UpdateUserJourneyCommandInput}
 * @returns {@link UpdateUserJourneyCommandOutput}
 * @see {@link UpdateUserJourneyCommandInput} for command's `input` shape.
 * @see {@link UpdateUserJourneyCommandOutput} for command's `response` shape.
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
export class UpdateUserJourneyCommand extends command<UpdateUserJourneyCommandInput, UpdateUserJourneyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserJourney",
  UpdateUserJourney$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserJourneyRequest;
      output: UpdateUserJourneyResponse;
    };
    sdk: {
      input: UpdateUserJourneyCommandInput;
      output: UpdateUserJourneyCommandOutput;
    };
  };
}

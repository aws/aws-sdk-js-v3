// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserJourneyRequest, DeleteUserJourneyResponse } from "../models/models_0";
import { DeleteUserJourney$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserJourneyCommand}.
 */
export interface DeleteUserJourneyCommandInput extends DeleteUserJourneyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserJourneyCommand}.
 */
export interface DeleteUserJourneyCommandOutput extends DeleteUserJourneyResponse, __MetadataBearer {}

/**
 * Deletes a user journey.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteUserJourneyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteUserJourneyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteUserJourneyRequest
 *   systemArn: "STRING_VALUE", // required
 *   userJourneyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserJourneyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserJourneyResponse
 * //   userJourneyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteUserJourneyCommandInput - {@link DeleteUserJourneyCommandInput}
 * @returns {@link DeleteUserJourneyCommandOutput}
 * @see {@link DeleteUserJourneyCommandInput} for command's `input` shape.
 * @see {@link DeleteUserJourneyCommandOutput} for command's `response` shape.
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
export class DeleteUserJourneyCommand extends command<DeleteUserJourneyCommandInput, DeleteUserJourneyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserJourney",
  DeleteUserJourney$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserJourneyRequest;
      output: DeleteUserJourneyResponse;
    };
    sdk: {
      input: DeleteUserJourneyCommandInput;
      output: DeleteUserJourneyCommandOutput;
    };
  };
}

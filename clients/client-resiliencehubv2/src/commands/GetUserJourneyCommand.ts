// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserJourneyRequest, GetUserJourneyResponse } from "../models/models_0";
import { GetUserJourney$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserJourneyCommand}.
 */
export interface GetUserJourneyCommandInput extends GetUserJourneyRequest {}
/**
 * @public
 *
 * The output of {@link GetUserJourneyCommand}.
 */
export interface GetUserJourneyCommandOutput extends GetUserJourneyResponse, __MetadataBearer {}

/**
 * <p>Retrieves a user journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetUserJourneyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetUserJourneyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetUserJourneyRequest
 *   systemArn: "STRING_VALUE", // required
 *   userJourneyId: "STRING_VALUE", // required
 * };
 * const command = new GetUserJourneyCommand(input);
 * const response = await client.send(command);
 * // { // GetUserJourneyResponse
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
 * @param GetUserJourneyCommandInput - {@link GetUserJourneyCommandInput}
 * @returns {@link GetUserJourneyCommandOutput}
 * @see {@link GetUserJourneyCommandInput} for command's `input` shape.
 * @see {@link GetUserJourneyCommandOutput} for command's `response` shape.
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
export class GetUserJourneyCommand extends command<GetUserJourneyCommandInput, GetUserJourneyCommandOutput>(
  _ep0,
  _mw0,
  "GetUserJourney",
  GetUserJourney$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserJourneyRequest;
      output: GetUserJourneyResponse;
    };
    sdk: {
      input: GetUserJourneyCommandInput;
      output: GetUserJourneyCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserJourneysRequest, ListUserJourneysResponse } from "../models/models_0";
import { ListUserJourneys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUserJourneysCommand}.
 */
export interface ListUserJourneysCommandInput extends ListUserJourneysRequest {}
/**
 * @public
 *
 * The output of {@link ListUserJourneysCommand}.
 */
export interface ListUserJourneysCommandOutput extends ListUserJourneysResponse, __MetadataBearer {}

/**
 * Lists user journeys for a system.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListUserJourneysCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListUserJourneysCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListUserJourneysRequest
 *   systemArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListUserJourneysCommand(input);
 * const response = await client.send(command);
 * // { // ListUserJourneysResponse
 * //   userJourneySummaries: [ // UserJourneySummaryList // required
 * //     { // UserJourneySummary
 * //       userJourneyId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserJourneysCommandInput - {@link ListUserJourneysCommandInput}
 * @returns {@link ListUserJourneysCommandOutput}
 * @see {@link ListUserJourneysCommandInput} for command's `input` shape.
 * @see {@link ListUserJourneysCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
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
export class ListUserJourneysCommand extends command<ListUserJourneysCommandInput, ListUserJourneysCommandOutput>(
  _ep0,
  _mw0,
  "ListUserJourneys",
  ListUserJourneys$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserJourneysRequest;
      output: ListUserJourneysResponse;
    };
    sdk: {
      input: ListUserJourneysCommandInput;
      output: ListUserJourneysCommandOutput;
    };
  };
}

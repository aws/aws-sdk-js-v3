// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScraperRequest, DeleteScraperResponse } from "../models/models_0";
import { DeleteScraper$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScraperCommand}.
 */
export interface DeleteScraperCommandInput extends DeleteScraperRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScraperCommand}.
 */
export interface DeleteScraperCommandOutput extends DeleteScraperResponse, __MetadataBearer {}

/**
 * The `DeleteScraper` operation deletes one scraper, and stops any metrics collection that the scraper performs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteScraperRequest
 *   scraperId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteScraperCommand(input);
 * const response = await client.send(command);
 * // { // DeleteScraperResponse
 * //   scraperId: "STRING_VALUE", // required
 * //   status: { // ScraperStatus
 * //     statusCode: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteScraperCommandInput - {@link DeleteScraperCommandInput}
 * @returns {@link DeleteScraperCommandOutput}
 * @see {@link DeleteScraperCommandInput} for command's `input` shape.
 * @see {@link DeleteScraperCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @example DeleteScraper with optional clientToken input
 * ```javascript
 * //
 * const input = {
 *   clientToken: "token",
 *   scraperId: "scraper-123"
 * };
 * const command = new DeleteScraperCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scraperId: "scraper-123",
 *   status: {
 *     statusCode: "DELETING"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteScraperCommand extends command<DeleteScraperCommandInput, DeleteScraperCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScraper",
  DeleteScraper$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScraperRequest;
      output: DeleteScraperResponse;
    };
    sdk: {
      input: DeleteScraperCommandInput;
      output: DeleteScraperCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIngestionDestinationsRequest, ListIngestionDestinationsResponse } from "../models/models_0";
import { ListIngestionDestinations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIngestionDestinationsCommand}.
 */
export interface ListIngestionDestinationsCommandInput extends ListIngestionDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionDestinationsCommand}.
 */
export interface ListIngestionDestinationsCommandOutput extends ListIngestionDestinationsResponse, __MetadataBearer {}

/**
 * Returns a list of all ingestion destinations configured for an ingestion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ListIngestionDestinationsCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ListIngestionDestinationsCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // ListIngestionDestinationsRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIngestionDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionDestinationsResponse
 * //   ingestionDestinations: [ // IngestionDestinationList // required
 * //     { // IngestionDestinationSummary
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestionDestinationsCommandInput - {@link ListIngestionDestinationsCommandInput}
 * @returns {@link ListIngestionDestinationsCommandOutput}
 * @see {@link ListIngestionDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionDestinationsCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class ListIngestionDestinationsCommand extends command<ListIngestionDestinationsCommandInput, ListIngestionDestinationsCommandOutput>(
  _ep0,
  _mw0,
  "ListIngestionDestinations",
  ListIngestionDestinations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionDestinationsRequest;
      output: ListIngestionDestinationsResponse;
    };
    sdk: {
      input: ListIngestionDestinationsCommandInput;
      output: ListIngestionDestinationsCommandOutput;
    };
  };
}

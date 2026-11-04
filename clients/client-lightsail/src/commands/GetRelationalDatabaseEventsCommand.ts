// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRelationalDatabaseEventsRequest, GetRelationalDatabaseEventsResult } from "../models/models_1";
import { GetRelationalDatabaseEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseEventsCommand}.
 */
export interface GetRelationalDatabaseEventsCommandInput extends GetRelationalDatabaseEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseEventsCommand}.
 */
export interface GetRelationalDatabaseEventsCommandOutput extends GetRelationalDatabaseEventsResult, __MetadataBearer {}

/**
 * Returns a list of events for a specific database in Amazon Lightsail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseEventsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseEventsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseEventsRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 *   durationInMinutes: Number("int"),
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetRelationalDatabaseEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseEventsResult
 * //   relationalDatabaseEvents: [ // RelationalDatabaseEventList
 * //     { // RelationalDatabaseEvent
 * //       resource: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //       eventCategories: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseEventsCommandInput - {@link GetRelationalDatabaseEventsCommandInput}
 * @returns {@link GetRelationalDatabaseEventsCommandOutput}
 * @see {@link GetRelationalDatabaseEventsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseEventsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an account is still in the setup in progress state.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link OperationFailureException} (client fault)
 *
 * Lightsail throws this exception when an operation fails to execute.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetRelationalDatabaseEventsCommand extends command<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput>(
  _ep0,
  _mw0,
  "GetRelationalDatabaseEvents",
  GetRelationalDatabaseEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseEventsRequest;
      output: GetRelationalDatabaseEventsResult;
    };
    sdk: {
      input: GetRelationalDatabaseEventsCommandInput;
      output: GetRelationalDatabaseEventsCommandOutput;
    };
  };
}

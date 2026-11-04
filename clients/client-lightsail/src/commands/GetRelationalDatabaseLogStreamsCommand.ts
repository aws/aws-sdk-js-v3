// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRelationalDatabaseLogStreamsRequest, GetRelationalDatabaseLogStreamsResult } from "../models/models_1";
import { GetRelationalDatabaseLogStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseLogStreamsCommand}.
 */
export interface GetRelationalDatabaseLogStreamsCommandInput extends GetRelationalDatabaseLogStreamsRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseLogStreamsCommand}.
 */
export interface GetRelationalDatabaseLogStreamsCommandOutput extends GetRelationalDatabaseLogStreamsResult, __MetadataBearer {}

/**
 * Returns a list of available log streams for a specific database in Amazon Lightsail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseLogStreamsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseLogStreamsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseLogStreamsRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 * };
 * const command = new GetRelationalDatabaseLogStreamsCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseLogStreamsResult
 * //   logStreams: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseLogStreamsCommandInput - {@link GetRelationalDatabaseLogStreamsCommandInput}
 * @returns {@link GetRelationalDatabaseLogStreamsCommandOutput}
 * @see {@link GetRelationalDatabaseLogStreamsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseLogStreamsCommandOutput} for command's `response` shape.
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
export class GetRelationalDatabaseLogStreamsCommand extends command<GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput>(
  _ep0,
  _mw0,
  "GetRelationalDatabaseLogStreams",
  GetRelationalDatabaseLogStreams$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseLogStreamsRequest;
      output: GetRelationalDatabaseLogStreamsResult;
    };
    sdk: {
      input: GetRelationalDatabaseLogStreamsCommandInput;
      output: GetRelationalDatabaseLogStreamsCommandOutput;
    };
  };
}

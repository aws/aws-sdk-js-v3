// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetActiveNamesRequest, GetActiveNamesResult } from "../models/models_0";
import { GetActiveNames$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetActiveNamesCommand}.
 */
export interface GetActiveNamesCommandInput extends GetActiveNamesRequest {}
/**
 * @public
 *
 * The output of {@link GetActiveNamesCommand}.
 */
export interface GetActiveNamesCommandOutput extends GetActiveNamesResult, __MetadataBearer {}

/**
 * Returns the names of all active (not deleted) resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetActiveNamesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetActiveNamesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetActiveNamesRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetActiveNamesCommand(input);
 * const response = await client.send(command);
 * // { // GetActiveNamesResult
 * //   activeNames: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetActiveNamesCommandInput - {@link GetActiveNamesCommandInput}
 * @returns {@link GetActiveNamesCommandOutput}
 * @see {@link GetActiveNamesCommandInput} for command's `input` shape.
 * @see {@link GetActiveNamesCommandOutput} for command's `response` shape.
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
export class GetActiveNamesCommand extends command<GetActiveNamesCommandInput, GetActiveNamesCommandOutput>(
  _ep0,
  _mw0,
  "GetActiveNames",
  GetActiveNames$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActiveNamesRequest;
      output: GetActiveNamesResult;
    };
    sdk: {
      input: GetActiveNamesCommandInput;
      output: GetActiveNamesCommandOutput;
    };
  };
}

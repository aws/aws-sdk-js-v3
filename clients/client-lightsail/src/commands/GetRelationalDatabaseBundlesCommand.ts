// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRelationalDatabaseBundlesRequest, GetRelationalDatabaseBundlesResult } from "../models/models_1";
import { GetRelationalDatabaseBundles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseBundlesCommand}.
 */
export interface GetRelationalDatabaseBundlesCommandInput extends GetRelationalDatabaseBundlesRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseBundlesCommand}.
 */
export interface GetRelationalDatabaseBundlesCommandOutput extends GetRelationalDatabaseBundlesResult, __MetadataBearer {}

/**
 * Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.
 *
 * You can use a bundle ID to create a new database with explicit performance specifications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseBundlesRequest
 *   pageToken: "STRING_VALUE",
 *   includeInactive: true || false,
 * };
 * const command = new GetRelationalDatabaseBundlesCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseBundlesResult
 * //   bundles: [ // RelationalDatabaseBundleList
 * //     { // RelationalDatabaseBundle
 * //       bundleId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       price: Number("float"),
 * //       ramSizeInGb: Number("float"),
 * //       diskSizeInGb: Number("int"),
 * //       transferPerMonthInGb: Number("int"),
 * //       cpuCount: Number("int"),
 * //       isEncrypted: true || false,
 * //       isActive: true || false,
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseBundlesCommandInput - {@link GetRelationalDatabaseBundlesCommandInput}
 * @returns {@link GetRelationalDatabaseBundlesCommandOutput}
 * @see {@link GetRelationalDatabaseBundlesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseBundlesCommandOutput} for command's `response` shape.
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
export class GetRelationalDatabaseBundlesCommand extends command<GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput>(
  _ep0,
  _mw0,
  "GetRelationalDatabaseBundles",
  GetRelationalDatabaseBundles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseBundlesRequest;
      output: GetRelationalDatabaseBundlesResult;
    };
    sdk: {
      input: GetRelationalDatabaseBundlesCommandInput;
      output: GetRelationalDatabaseBundlesCommandOutput;
    };
  };
}

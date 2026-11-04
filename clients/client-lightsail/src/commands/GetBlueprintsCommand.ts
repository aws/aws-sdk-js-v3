// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBlueprintsRequest, GetBlueprintsResult } from "../models/models_0";
import { GetBlueprints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBlueprintsCommand}.
 */
export interface GetBlueprintsCommandInput extends GetBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintsCommand}.
 */
export interface GetBlueprintsCommandOutput extends GetBlueprintsResult, __MetadataBearer {}

/**
 * Returns the list of available instance images, or *blueprints*. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.
 *
 * > **Note:** Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetBlueprintsRequest
 *   includeInactive: true || false,
 *   pageToken: "STRING_VALUE",
 *   appCategory: "LfR",
 * };
 * const command = new GetBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintsResult
 * //   blueprints: [ // BlueprintList
 * //     { // Blueprint
 * //       blueprintId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       group: "STRING_VALUE",
 * //       type: "os" || "app",
 * //       description: "STRING_VALUE",
 * //       isActive: true || false,
 * //       minPower: Number("int"),
 * //       version: "STRING_VALUE",
 * //       versionCode: "STRING_VALUE",
 * //       productUrl: "STRING_VALUE",
 * //       licenseUrl: "STRING_VALUE",
 * //       platform: "LINUX_UNIX" || "WINDOWS",
 * //       appCategory: "LfR",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBlueprintsCommandInput - {@link GetBlueprintsCommandInput}
 * @returns {@link GetBlueprintsCommandOutput}
 * @see {@link GetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintsCommandOutput} for command's `response` shape.
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
export class GetBlueprintsCommand extends command<GetBlueprintsCommandInput, GetBlueprintsCommandOutput>(
  _ep0,
  _mw0,
  "GetBlueprints",
  GetBlueprints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintsRequest;
      output: GetBlueprintsResult;
    };
    sdk: {
      input: GetBlueprintsCommandInput;
      output: GetBlueprintsCommandOutput;
    };
  };
}

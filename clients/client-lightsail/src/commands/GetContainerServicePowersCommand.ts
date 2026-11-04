// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerServicePowersRequest, GetContainerServicePowersResult } from "../models/models_0";
import { GetContainerServicePowers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerServicePowersCommand}.
 */
export interface GetContainerServicePowersCommandInput extends GetContainerServicePowersRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerServicePowersCommand}.
 */
export interface GetContainerServicePowersCommandOutput extends GetContainerServicePowersResult, __MetadataBearer {}

/**
 * Returns the list of powers that can be specified for your Amazon Lightsail container services.
 *
 * The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicePowersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServicePowersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new GetContainerServicePowersCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerServicePowersResult
 * //   powers: [ // ContainerServicePowerList
 * //     { // ContainerServicePower
 * //       powerId: "STRING_VALUE",
 * //       price: Number("float"),
 * //       cpuCount: Number("float"),
 * //       ramSizeInGb: Number("float"),
 * //       name: "STRING_VALUE",
 * //       isActive: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerServicePowersCommandInput - {@link GetContainerServicePowersCommandInput}
 * @returns {@link GetContainerServicePowersCommandOutput}
 * @see {@link GetContainerServicePowersCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicePowersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
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
export class GetContainerServicePowersCommand extends command<GetContainerServicePowersCommandInput, GetContainerServicePowersCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerServicePowers",
  GetContainerServicePowers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetContainerServicePowersResult;
    };
    sdk: {
      input: GetContainerServicePowersCommandInput;
      output: GetContainerServicePowersCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/models_1";
import { IsVpcPeered$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IsVpcPeeredCommand}.
 */
export interface IsVpcPeeredCommandInput extends IsVpcPeeredRequest {}
/**
 * @public
 *
 * The output of {@link IsVpcPeeredCommand}.
 */
export interface IsVpcPeeredCommandOutput extends IsVpcPeeredResult, __MetadataBearer {}

/**
 * Returns a Boolean value indicating whether your Lightsail VPC is peered.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, IsVpcPeeredCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, IsVpcPeeredCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new IsVpcPeeredCommand(input);
 * const response = await client.send(command);
 * // { // IsVpcPeeredResult
 * //   isPeered: true || false,
 * // };
 *
 * ```
 *
 * @param IsVpcPeeredCommandInput - {@link IsVpcPeeredCommandInput}
 * @returns {@link IsVpcPeeredCommandOutput}
 * @see {@link IsVpcPeeredCommandInput} for command's `input` shape.
 * @see {@link IsVpcPeeredCommandOutput} for command's `response` shape.
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
export class IsVpcPeeredCommand extends command<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput>(
  _ep0,
  _mw0,
  "IsVpcPeered",
  IsVpcPeered$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: IsVpcPeeredResult;
    };
    sdk: {
      input: IsVpcPeeredCommandInput;
      output: IsVpcPeeredCommandOutput;
    };
  };
}

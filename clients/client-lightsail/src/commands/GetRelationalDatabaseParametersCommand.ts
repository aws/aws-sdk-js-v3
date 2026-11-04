// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRelationalDatabaseParametersRequest, GetRelationalDatabaseParametersResult } from "../models/models_1";
import { GetRelationalDatabaseParameters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseParametersCommand}.
 */
export interface GetRelationalDatabaseParametersCommandInput extends GetRelationalDatabaseParametersRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseParametersCommand}.
 */
export interface GetRelationalDatabaseParametersCommandOutput extends GetRelationalDatabaseParametersResult, __MetadataBearer {}

/**
 * Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.
 *
 * In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseParametersRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseParametersResult
 * //   parameters: [ // RelationalDatabaseParameterList
 * //     { // RelationalDatabaseParameter
 * //       allowedValues: "STRING_VALUE",
 * //       applyMethod: "STRING_VALUE",
 * //       applyType: "STRING_VALUE",
 * //       dataType: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       isModifiable: true || false,
 * //       parameterName: "STRING_VALUE",
 * //       parameterValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseParametersCommandInput - {@link GetRelationalDatabaseParametersCommandInput}
 * @returns {@link GetRelationalDatabaseParametersCommandOutput}
 * @see {@link GetRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseParametersCommandOutput} for command's `response` shape.
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
export class GetRelationalDatabaseParametersCommand extends command<GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput>(
  _ep0,
  _mw0,
  "GetRelationalDatabaseParameters",
  GetRelationalDatabaseParameters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseParametersRequest;
      output: GetRelationalDatabaseParametersResult;
    };
    sdk: {
      input: GetRelationalDatabaseParametersCommandInput;
      output: GetRelationalDatabaseParametersCommandOutput;
    };
  };
}

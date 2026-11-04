// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConfigurationsRequest, DescribeConfigurationsResponse } from "../models/models_0";
import { DescribeConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationsCommand}.
 */
export interface DescribeConfigurationsCommandInput extends DescribeConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationsCommand}.
 */
export interface DescribeConfigurationsCommandOutput extends DescribeConfigurationsResponse, __MetadataBearer {}

/**
 * Retrieves attributes for a list of configuration item IDs.
 *
 * > **Note:**
 * >
 * > All of the supplied IDs must be for the same asset type from one of the following:
 * >
 * > - server
 * > - application
 * > - process
 * > - connection
 * >
 * > Output fields are specific to the asset type specified. For example, the output for a *server* configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.
 * >
 * > For a complete list of outputs for each asset type, see [Using the DescribeConfigurations Action](https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations) in the *Amazon Web Services Application Discovery Service User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeConfigurationsRequest
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationsResponse
 * //   configurations: [ // DescribeConfigurationsAttributes
 * //     { // DescribeConfigurationsAttribute
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationsCommandInput - {@link DescribeConfigurationsCommandInput}
 * @returns {@link DescribeConfigurationsCommandOutput}
 * @see {@link DescribeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class DescribeConfigurationsCommand extends command<DescribeConfigurationsCommandInput, DescribeConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConfigurations",
  DescribeConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationsRequest;
      output: DescribeConfigurationsResponse;
    };
    sdk: {
      input: DescribeConfigurationsCommandInput;
      output: DescribeConfigurationsCommandOutput;
    };
  };
}

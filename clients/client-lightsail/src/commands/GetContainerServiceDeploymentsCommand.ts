// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerServiceDeploymentsRequest, GetContainerServiceDeploymentsResult } from "../models/models_0";
import { GetContainerServiceDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerServiceDeploymentsCommand}.
 */
export interface GetContainerServiceDeploymentsCommandInput extends GetContainerServiceDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerServiceDeploymentsCommand}.
 */
export interface GetContainerServiceDeploymentsCommandOutput extends GetContainerServiceDeploymentsResult, __MetadataBearer {}

/**
 * Returns the deployments for your Amazon Lightsail container service
 *
 * A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.
 *
 * The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.
 *
 * > **Note:** A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see [Amazon Lightsail endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/lightsail.html) in the *Amazon Web Services General Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceDeploymentsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceDeploymentsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetContainerServiceDeploymentsRequest
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new GetContainerServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerServiceDeploymentsResult
 * //   deployments: [ // ContainerServiceDeploymentList
 * //     { // ContainerServiceDeployment
 * //       version: Number("int"),
 * //       state: "ACTIVATING" || "ACTIVE" || "INACTIVE" || "FAILED",
 * //       containers: { // ContainerMap
 * //         "<keys>": { // Container
 * //           image: "STRING_VALUE",
 * //           command: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: { // Environment
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ports: { // PortMap
 * //             "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 * //           },
 * //         },
 * //       },
 * //       publicEndpoint: { // ContainerServiceEndpoint
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         healthCheck: { // ContainerServiceHealthCheckConfig
 * //           healthyThreshold: Number("int"),
 * //           unhealthyThreshold: Number("int"),
 * //           timeoutSeconds: Number("int"),
 * //           intervalSeconds: Number("int"),
 * //           path: "STRING_VALUE",
 * //           successCodes: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerServiceDeploymentsCommandInput - {@link GetContainerServiceDeploymentsCommandInput}
 * @returns {@link GetContainerServiceDeploymentsCommandOutput}
 * @see {@link GetContainerServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceDeploymentsCommandOutput} for command's `response` shape.
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
export class GetContainerServiceDeploymentsCommand extends command<GetContainerServiceDeploymentsCommandInput, GetContainerServiceDeploymentsCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerServiceDeployments",
  GetContainerServiceDeployments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerServiceDeploymentsRequest;
      output: GetContainerServiceDeploymentsResult;
    };
    sdk: {
      input: GetContainerServiceDeploymentsCommandInput;
      output: GetContainerServiceDeploymentsCommandOutput;
    };
  };
}

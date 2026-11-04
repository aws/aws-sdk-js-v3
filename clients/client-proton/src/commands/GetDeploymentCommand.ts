// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentInput, GetDeploymentOutput } from "../models/models_0";
import { GetDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends GetDeploymentOutput, __MetadataBearer {}

/**
 * Get detailed data for a deployment.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetDeploymentInput
 *   id: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE",
 *   serviceName: "STRING_VALUE",
 *   serviceInstanceName: "STRING_VALUE",
 *   componentName: "STRING_VALUE",
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentOutput
 * //   deployment: { // Deployment
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     targetArn: "STRING_VALUE", // required
 * //     targetResourceCreatedAt: new Date("TIMESTAMP"), // required
 * //     targetResourceType: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     serviceName: "STRING_VALUE",
 * //     serviceInstanceName: "STRING_VALUE",
 * //     componentName: "STRING_VALUE",
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     completedAt: new Date("TIMESTAMP"),
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //     initialState: { // DeploymentState Union: only one key present
 * //       serviceInstance: { // ServiceInstanceState
 * //         spec: "STRING_VALUE", // required
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //         lastSuccessfulComponentDeploymentIds: [ // ComponentDeploymentIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         lastSuccessfulEnvironmentDeploymentId: "STRING_VALUE",
 * //         lastSuccessfulServicePipelineDeploymentId: "STRING_VALUE",
 * //       },
 * //       environment: { // EnvironmentState
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       servicePipeline: { // ServicePipelineState
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       component: { // ComponentState
 * //         serviceName: "STRING_VALUE",
 * //         serviceInstanceName: "STRING_VALUE",
 * //         serviceSpec: "STRING_VALUE",
 * //         templateFile: "STRING_VALUE",
 * //       },
 * //     },
 * //     targetState: {//  Union: only one key present
 * //       serviceInstance: {
 * //         spec: "STRING_VALUE", // required
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //         lastSuccessfulComponentDeploymentIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         lastSuccessfulEnvironmentDeploymentId: "STRING_VALUE",
 * //         lastSuccessfulServicePipelineDeploymentId: "STRING_VALUE",
 * //       },
 * //       environment: {
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       servicePipeline: {
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       component: {
 * //         serviceName: "STRING_VALUE",
 * //         serviceInstanceName: "STRING_VALUE",
 * //         serviceSpec: "STRING_VALUE",
 * //         templateFile: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class GetDeploymentCommand extends command<GetDeploymentCommandInput, GetDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "GetDeployment",
  GetDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentInput;
      output: GetDeploymentOutput;
    };
    sdk: {
      input: GetDeploymentCommandInput;
      output: GetDeploymentCommandOutput;
    };
  };
}

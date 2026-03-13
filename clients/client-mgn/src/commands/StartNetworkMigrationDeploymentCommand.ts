// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  StartNetworkMigrationDeployerJobResponse,
  StartNetworkMigrationDeploymentRequest,
} from "../models/models_0";
import { StartNetworkMigrationDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartNetworkMigrationDeploymentCommand}.
 */
export interface StartNetworkMigrationDeploymentCommandInput extends StartNetworkMigrationDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StartNetworkMigrationDeploymentCommand}.
 */
export interface StartNetworkMigrationDeploymentCommandOutput extends StartNetworkMigrationDeployerJobResponse, __MetadataBearer {}

/**
 * <p>Starts a deployment job to create the target network infrastructure based on the generated code templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartNetworkMigrationDeploymentCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartNetworkMigrationDeploymentCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartNetworkMigrationDeploymentRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 * };
 * const command = new StartNetworkMigrationDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StartNetworkMigrationDeployerJobResponse
 * //   jobID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNetworkMigrationDeploymentCommandInput - {@link StartNetworkMigrationDeploymentCommandInput}
 * @returns {@link StartNetworkMigrationDeploymentCommandOutput}
 * @see {@link StartNetworkMigrationDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartNetworkMigrationDeploymentCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample StartNetworkMigrationDeployment call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new StartNetworkMigrationDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobID: "01234567-abcd-abcd-efab-0123456789ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartNetworkMigrationDeploymentCommand extends $Command
  .classBuilder<
    StartNetworkMigrationDeploymentCommandInput,
    StartNetworkMigrationDeploymentCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "StartNetworkMigrationDeployment", {})
  .n("MgnClient", "StartNetworkMigrationDeploymentCommand")
  .sc(StartNetworkMigrationDeployment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNetworkMigrationDeploymentRequest;
      output: StartNetworkMigrationDeployerJobResponse;
    };
    sdk: {
      input: StartNetworkMigrationDeploymentCommandInput;
      output: StartNetworkMigrationDeploymentCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDeploymentRequest, StartDeploymentResult } from "../models/models_0";
import { de_StartDeploymentCommand, se_StartDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDeploymentCommand}.
 */
export interface StartDeploymentCommandInput extends StartDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StartDeploymentCommand}.
 */
export interface StartDeploymentCommandOutput extends StartDeploymentResult, __MetadataBearer {}

/**
 * <p>Starts a deployment for a manually deployed app. Manually deployed apps are not
 *             connected to a repository. </p>
 *          <p>The maximum duration between the <code>CreateDeployment</code> call and the
 *                 <code>StartDeployment</code> call cannot exceed 8 hours. If the duration exceeds 8
 *             hours, the <code>StartDeployment</code> call and the associated <code>Job</code> will
 *             fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, StartDeploymentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, StartDeploymentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // StartDeploymentRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE",
 *   sourceUrl: "STRING_VALUE",
 * };
 * const command = new StartDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StartDeploymentResult
 * //   jobSummary: { // JobSummary
 * //     jobArn: "STRING_VALUE", // required
 * //     jobId: "STRING_VALUE", // required
 * //     commitId: "STRING_VALUE", // required
 * //     commitMessage: "STRING_VALUE", // required
 * //     commitTime: new Date("TIMESTAMP"), // required
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     status: "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //     endTime: new Date("TIMESTAMP"),
 * //     jobType: "RELEASE" || "RETRY" || "MANUAL" || "WEB_HOOK", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param StartDeploymentCommandInput - {@link StartDeploymentCommandInput}
 * @returns {@link StartDeploymentCommandOutput}
 * @see {@link StartDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 * @public
 */
export class StartDeploymentCommand extends $Command
  .classBuilder<
    StartDeploymentCommandInput,
    StartDeploymentCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "StartDeployment", {})
  .n("AmplifyClient", "StartDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_StartDeploymentCommand)
  .de(de_StartDeploymentCommand)
  .build() {}

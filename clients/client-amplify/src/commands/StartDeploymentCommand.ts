// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDeploymentRequest, StartDeploymentResult } from "../models/models_0";
import { StartDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a Git repository.
 *
 * The maximum duration between the `CreateDeployment` call and the `StartDeployment` call cannot exceed 8 hours. If the duration exceeds 8 hours, the `StartDeployment` call and the associated `Job` will fail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, StartDeploymentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, StartDeploymentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // StartDeploymentRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE",
 *   sourceUrl: "STRING_VALUE",
 *   sourceUrlType: "ZIP" || "BUCKET_PREFIX",
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
 * //     status: "CREATED" || "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //     endTime: new Date("TIMESTAMP"),
 * //     jobType: "RELEASE" || "RETRY" || "MANUAL" || "WEB_HOOK", // required
 * //     sourceUrl: "STRING_VALUE",
 * //     sourceUrlType: "ZIP" || "BUCKET_PREFIX",
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
 *
 * A request contains unexpected data.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A resource could not be created because service quotas were exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity was not found during an operation.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
 *
 * @public
 */
export class StartDeploymentCommand extends command<StartDeploymentCommandInput, StartDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "StartDeployment",
  StartDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDeploymentRequest;
      output: StartDeploymentResult;
    };
    sdk: {
      input: StartDeploymentCommandInput;
      output: StartDeploymentCommandOutput;
    };
  };
}

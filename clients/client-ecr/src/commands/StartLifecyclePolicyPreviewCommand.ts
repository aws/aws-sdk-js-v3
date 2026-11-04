// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse } from "../models/models_0";
import { StartLifecyclePolicyPreview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartLifecyclePolicyPreviewCommand}.
 */
export interface StartLifecyclePolicyPreviewCommandInput extends StartLifecyclePolicyPreviewRequest {}
/**
 * @public
 *
 * The output of {@link StartLifecyclePolicyPreviewCommand}.
 */
export interface StartLifecyclePolicyPreviewCommandOutput extends StartLifecyclePolicyPreviewResponse, __MetadataBearer {}

/**
 * Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // StartLifecyclePolicyPreviewRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   lifecyclePolicyText: "STRING_VALUE",
 * };
 * const command = new StartLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * // { // StartLifecyclePolicyPreviewResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "COMPLETE" || "EXPIRED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StartLifecyclePolicyPreviewCommandInput - {@link StartLifecyclePolicyPreviewCommandInput}
 * @returns {@link StartLifecyclePolicyPreviewCommandOutput}
 * @see {@link StartLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link StartLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LifecyclePolicyNotFoundException} (client fault)
 *
 * The lifecycle policy could not be found, and no policy is set to the repository.
 *
 * @throws {@link LifecyclePolicyPreviewInProgressException} (client fault)
 *
 * The previous lifecycle policy preview request has not completed. Wait and try again.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class StartLifecyclePolicyPreviewCommand extends command<StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput>(
  _ep0,
  _mw0,
  "StartLifecyclePolicyPreview",
  StartLifecyclePolicyPreview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartLifecyclePolicyPreviewRequest;
      output: StartLifecyclePolicyPreviewResponse;
    };
    sdk: {
      input: StartLifecyclePolicyPreviewCommandInput;
      output: StartLifecyclePolicyPreviewCommandOutput;
    };
  };
}

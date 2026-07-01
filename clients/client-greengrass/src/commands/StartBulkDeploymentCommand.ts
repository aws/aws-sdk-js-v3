// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartBulkDeploymentRequest, StartBulkDeploymentResponse } from "../models/models_0";
import { StartBulkDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBulkDeploymentCommand}.
 */
export interface StartBulkDeploymentCommandInput extends StartBulkDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StartBulkDeploymentCommand}.
 */
export interface StartBulkDeploymentCommandOutput extends StartBulkDeploymentResponse, __MetadataBearer {}

/**
 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, StartBulkDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, StartBulkDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // StartBulkDeploymentRequest
 *   AmznClientToken: "STRING_VALUE",
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   InputFileUri: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartBulkDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StartBulkDeploymentResponse
 * //   BulkDeploymentArn: "STRING_VALUE",
 * //   BulkDeploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartBulkDeploymentCommandInput - {@link StartBulkDeploymentCommandInput}
 * @returns {@link StartBulkDeploymentCommandOutput}
 * @see {@link StartBulkDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartBulkDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class StartBulkDeploymentCommand extends command<StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "StartBulkDeployment",
  StartBulkDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBulkDeploymentRequest;
      output: StartBulkDeploymentResponse;
    };
    sdk: {
      input: StartBulkDeploymentCommandInput;
      output: StartBulkDeploymentCommandOutput;
    };
  };
}

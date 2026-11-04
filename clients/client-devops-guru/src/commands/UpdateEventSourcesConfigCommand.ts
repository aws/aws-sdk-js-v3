// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventSourcesConfigRequest, UpdateEventSourcesConfigResponse } from "../models/models_0";
import { UpdateEventSourcesConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventSourcesConfigCommand}.
 */
export interface UpdateEventSourcesConfigCommandInput extends UpdateEventSourcesConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventSourcesConfigCommand}.
 */
export interface UpdateEventSourcesConfigCommandOutput extends UpdateEventSourcesConfigResponse, __MetadataBearer {}

/**
 * Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // UpdateEventSourcesConfigRequest
 *   EventSources: { // EventSourcesConfig
 *     AmazonCodeGuruProfiler: { // AmazonCodeGuruProfilerIntegration
 *       Status: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new UpdateEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventSourcesConfigCommandInput - {@link UpdateEventSourcesConfigCommandInput}
 * @returns {@link UpdateEventSourcesConfigCommandOutput}
 * @see {@link UpdateEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourcesConfigCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class UpdateEventSourcesConfigCommand extends command<UpdateEventSourcesConfigCommandInput, UpdateEventSourcesConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventSourcesConfig",
  UpdateEventSourcesConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventSourcesConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventSourcesConfigCommandInput;
      output: UpdateEventSourcesConfigCommandOutput;
    };
  };
}

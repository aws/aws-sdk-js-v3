// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteClusterSchedulerConfigRequest } from "../models/models_2";
import { DeleteClusterSchedulerConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteClusterSchedulerConfigCommand}.
 */
export interface DeleteClusterSchedulerConfigCommandInput extends DeleteClusterSchedulerConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterSchedulerConfigCommand}.
 */
export interface DeleteClusterSchedulerConfigCommandOutput extends __MetadataBearer {}

/**
 * Deletes the cluster policy of the cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteClusterSchedulerConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteClusterSchedulerConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteClusterSchedulerConfigRequest
 *   ClusterSchedulerConfigId: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterSchedulerConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterSchedulerConfigCommandInput - {@link DeleteClusterSchedulerConfigCommandInput}
 * @returns {@link DeleteClusterSchedulerConfigCommandOutput}
 * @see {@link DeleteClusterSchedulerConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSchedulerConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class DeleteClusterSchedulerConfigCommand extends command<DeleteClusterSchedulerConfigCommandInput, DeleteClusterSchedulerConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteClusterSchedulerConfig",
  DeleteClusterSchedulerConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterSchedulerConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteClusterSchedulerConfigCommandInput;
      output: DeleteClusterSchedulerConfigCommandOutput;
    };
  };
}

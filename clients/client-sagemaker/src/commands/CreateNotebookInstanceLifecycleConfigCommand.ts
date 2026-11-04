// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateNotebookInstanceLifecycleConfigInput,
  CreateNotebookInstanceLifecycleConfigOutput,
} from "../models/models_2";
import { CreateNotebookInstanceLifecycleConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotebookInstanceLifecycleConfigCommand}.
 */
export interface CreateNotebookInstanceLifecycleConfigCommandInput extends CreateNotebookInstanceLifecycleConfigInput {}
/**
 * @public
 *
 * The output of {@link CreateNotebookInstanceLifecycleConfigCommand}.
 */
export interface CreateNotebookInstanceLifecycleConfigCommandOutput extends CreateNotebookInstanceLifecycleConfigOutput, __MetadataBearer {}

/**
 * Creates a lifecycle configuration that you can associate with a notebook instance. A *lifecycle configuration* is a collection of shell scripts that run when you create or start a notebook instance.
 *
 * Each lifecycle configuration script has a limit of 16384 characters.
 *
 * The value of the `$PATH` environment variable that is available to both scripts is `/sbin:bin:/usr/sbin:/usr/bin`.
 *
 * View Amazon CloudWatch Logs for notebook instance lifecycle configurations in log group `/aws/sagemaker/NotebookInstances` in log stream `[notebook-instance-name]/[LifecycleConfigHook]`.
 *
 * Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.
 *
 * For information about notebook instance lifestyle configurations, see [Step 2.1: (Optional) Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html).
 *
 * > **Note:** Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Grant this permission only to trusted principals. See [Customize a Notebook Instance Using a Lifecycle Configuration Script](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html) for security best practices.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateNotebookInstanceLifecycleConfigInput
 *   NotebookInstanceLifecycleConfigName: "STRING_VALUE", // required
 *   OnCreate: [ // NotebookInstanceLifecycleConfigList
 *     { // NotebookInstanceLifecycleHook
 *       Content: "STRING_VALUE",
 *     },
 *   ],
 *   OnStart: [
 *     {
 *       Content: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotebookInstanceLifecycleConfigOutput
 * //   NotebookInstanceLifecycleConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotebookInstanceLifecycleConfigCommandInput - {@link CreateNotebookInstanceLifecycleConfigCommandInput}
 * @returns {@link CreateNotebookInstanceLifecycleConfigCommandOutput}
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class CreateNotebookInstanceLifecycleConfigCommand extends command<CreateNotebookInstanceLifecycleConfigCommandInput, CreateNotebookInstanceLifecycleConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotebookInstanceLifecycleConfig",
  CreateNotebookInstanceLifecycleConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotebookInstanceLifecycleConfigInput;
      output: CreateNotebookInstanceLifecycleConfigOutput;
    };
    sdk: {
      input: CreateNotebookInstanceLifecycleConfigCommandInput;
      output: CreateNotebookInstanceLifecycleConfigCommandOutput;
    };
  };
}

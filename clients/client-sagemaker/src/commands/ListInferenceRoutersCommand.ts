// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInferenceRoutersInput, ListInferenceRoutersOutput } from "../models/models_4";
import { ListInferenceRouters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInferenceRoutersCommand}.
 */
export interface ListInferenceRoutersCommandInput extends ListInferenceRoutersInput {}
/**
 * @public
 *
 * The output of {@link ListInferenceRoutersCommand}.
 */
export interface ListInferenceRoutersCommandOutput extends ListInferenceRoutersOutput, __MetadataBearer {}

/**
 * <p>Lists the inference routers in your account in the current Amazon Web Services Region. A router that you just created might not appear in the list right away.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceRoutersCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceRoutersCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListInferenceRoutersInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInferenceRoutersCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceRoutersOutput
 * //   InferenceRouters: [ // InferenceRouterSummaryList // required
 * //     { // InferenceRouterSummary
 * //       InferenceRouterName: "STRING_VALUE", // required
 * //       InferenceRouterArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInferenceRoutersCommandInput - {@link ListInferenceRoutersCommandInput}
 * @returns {@link ListInferenceRoutersCommandOutput}
 * @see {@link ListInferenceRoutersCommandInput} for command's `input` shape.
 * @see {@link ListInferenceRoutersCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListInferenceRoutersCommand extends command<ListInferenceRoutersCommandInput, ListInferenceRoutersCommandOutput>(
  _ep0,
  _mw0,
  "ListInferenceRouters",
  ListInferenceRouters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInferenceRoutersInput;
      output: ListInferenceRoutersOutput;
    };
    sdk: {
      input: ListInferenceRoutersCommandInput;
      output: ListInferenceRoutersCommandOutput;
    };
  };
}

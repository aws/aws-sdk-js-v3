// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDatasetInput, GetDatasetOutput } from "../models/models_0";
import { GetDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandInput extends GetDatasetInput {}
/**
 * @public
 *
 * The output of {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandOutput extends GetDatasetOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified dataset. This includes its identifier,
 *             Amazon Resource Name (ARN), and any customer managed Amazon Web Services Key
 *             Management Service (Amazon Web Services KMS) key that is currently associated with
 *             it.</p>
 *          <p>Only the <code>default</code> dataset is supported. The <code>default</code> dataset
 *             is implicit for every account in every Region — you can call <code>GetDataset</code>
 *             for it without first creating it. If no customer managed KMS key has been associated
 *             with the dataset, the response omits the <code>KmsKeyArn</code> field, indicating that
 *             data is encrypted at rest using an Amazon Web Services owned key managed by
 *             Amazon CloudWatch.</p>
 *          <p>To associate a customer managed KMS key with a dataset, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_AssociateDatasetKmsKey.html">AssociateDatasetKmsKey</a>. To remove the association, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisassociateDatasetKmsKey.html">DisassociateDatasetKmsKey</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetDatasetCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetDatasetCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetDatasetInput
 *   DatasetIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetOutput
 * //   DatasetId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   KmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDatasetCommandInput - {@link GetDatasetCommandInput}
 * @returns {@link GetDatasetCommandOutput}
 * @see {@link GetDatasetCommandInput} for command's `input` shape.
 * @see {@link GetDatasetCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetDatasetCommand extends command<GetDatasetCommandInput, GetDatasetCommandOutput>(
  _ep0,
  _mw0,
  "GetDataset",
  GetDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetInput;
      output: GetDatasetOutput;
    };
    sdk: {
      input: GetDatasetCommandInput;
      output: GetDatasetCommandOutput;
    };
  };
}

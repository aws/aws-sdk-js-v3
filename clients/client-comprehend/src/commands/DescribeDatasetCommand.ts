// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { DescribeDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandInput extends DescribeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandOutput extends DescribeDatasetResponse, __MetadataBearer {}

/**
 * Returns information about the dataset that you specify. For more information about datasets, see [Flywheel overview](https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeDatasetCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeDatasetCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DescribeDatasetRequest
 *   DatasetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetResponse
 * //   DatasetProperties: { // DatasetProperties
 * //     DatasetArn: "STRING_VALUE",
 * //     DatasetName: "STRING_VALUE",
 * //     DatasetType: "TRAIN" || "TEST",
 * //     DatasetS3Uri: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "CREATING" || "COMPLETED" || "FAILED",
 * //     Message: "STRING_VALUE",
 * //     NumberOfDocuments: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetCommandInput - {@link DescribeDatasetCommandInput}
 * @returns {@link DescribeDatasetCommandOutput}
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class DescribeDatasetCommand extends command<DescribeDatasetCommandInput, DescribeDatasetCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDataset",
  DescribeDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetRequest;
      output: DescribeDatasetResponse;
    };
    sdk: {
      input: DescribeDatasetCommandInput;
      output: DescribeDatasetCommandOutput;
    };
  };
}

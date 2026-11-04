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
 * Describes the given dataset. For more information on datasets, see [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeDatasetRequest
 *   datasetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetResponse
 * //   dataset: { // Dataset
 * //     name: "STRING_VALUE",
 * //     datasetArn: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     datasetType: "STRING_VALUE",
 * //     schemaArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     latestDatasetUpdate: { // DatasetUpdateSummary
 * //       schemaArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //     trackingId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetCommandInput - {@link DescribeDatasetCommandInput}
 * @returns {@link DescribeDatasetCommandOutput}
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
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

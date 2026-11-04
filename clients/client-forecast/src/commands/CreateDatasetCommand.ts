// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { CreateDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:
 *
 * - *`DataFrequency`* - How frequently your historical time-series data is collected.
 * - *`Domain`* and *`DatasetType`* - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.
 * - *`Schema`* - A schema specifies the fields in the dataset, including the field name and data type.
 *
 * After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see [Importing datasets](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
 *
 * To get a list of all your datasets, use the [ListDatasets](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html) operation.
 *
 * For example Forecast datasets, see the [Amazon Forecast Sample GitHub repository](https://github.com/aws-samples/amazon-forecast-samples).
 *
 * > **Note:** The `Status` of a dataset must be `ACTIVE` before you can import training data. Use the [DescribeDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html) operation to get the status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // CreateDatasetRequest
 *   DatasetName: "STRING_VALUE", // required
 *   Domain: "RETAIL" || "CUSTOM" || "INVENTORY_PLANNING" || "EC2_CAPACITY" || "WORK_FORCE" || "WEB_TRAFFIC" || "METRICS", // required
 *   DatasetType: "TARGET_TIME_SERIES" || "RELATED_TIME_SERIES" || "ITEM_METADATA", // required
 *   DataFrequency: "STRING_VALUE",
 *   Schema: { // Schema
 *     Attributes: [ // SchemaAttributes
 *       { // SchemaAttribute
 *         AttributeName: "STRING_VALUE",
 *         AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *       },
 *     ],
 *   },
 *   EncryptionConfig: { // EncryptionConfig
 *     RoleArn: "STRING_VALUE", // required
 *     KMSKeyArn: "STRING_VALUE", // required
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetResponse
 * //   DatasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * There is already a resource with this name. Try again with a different name.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class CreateDatasetCommand extends command<CreateDatasetCommandInput, CreateDatasetCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataset",
  CreateDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetRequest;
      output: CreateDatasetResponse;
    };
    sdk: {
      input: CreateDatasetCommandInput;
      output: CreateDatasetCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import { CreateDatasetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDatasetGroupCommand}.
 */
export interface CreateDatasetGroupCommandInput extends CreateDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetGroupCommand}.
 */
export interface CreateDatasetGroupCommandOutput extends CreateDatasetGroupResponse, __MetadataBearer {}

/**
 * Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the [UpdateDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html) operation.
 *
 * After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see [Dataset groups](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
 *
 * To get a list of all your datasets groups, use the [ListDatasetGroups](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html) operation.
 *
 * > **Note:** The `Status` of a dataset group must be `ACTIVE` before you can use the dataset group to create a predictor. To get the status, use the [DescribeDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html) operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // CreateDatasetGroupRequest
 *   DatasetGroupName: "STRING_VALUE", // required
 *   Domain: "RETAIL" || "CUSTOM" || "INVENTORY_PLANNING" || "EC2_CAPACITY" || "WORK_FORCE" || "WEB_TRAFFIC" || "METRICS", // required
 *   DatasetArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetGroupResponse
 * //   DatasetGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetGroupCommandInput - {@link CreateDatasetGroupCommandInput}
 * @returns {@link CreateDatasetGroupCommandOutput}
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class CreateDatasetGroupCommand extends command<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateDatasetGroup",
  CreateDatasetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetGroupRequest;
      output: CreateDatasetGroupResponse;
    };
    sdk: {
      input: CreateDatasetGroupCommandInput;
      output: CreateDatasetGroupCommandOutput;
    };
  };
}

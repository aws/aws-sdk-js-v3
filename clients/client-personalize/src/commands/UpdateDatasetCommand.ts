// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import { UpdateDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {}

/**
 * Update a dataset to replace its schema with a new or existing one. For more information, see [Replacing a dataset's schema](https://docs.aws.amazon.com/personalize/latest/dg/updating-dataset-schema.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateDatasetCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateDatasetCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // UpdateDatasetRequest
 *   datasetArn: "STRING_VALUE", // required
 *   schemaArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetResponse
 * //   datasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
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
export class UpdateDatasetCommand extends command<UpdateDatasetCommandInput, UpdateDatasetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataset",
  UpdateDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasetRequest;
      output: UpdateDatasetResponse;
    };
    sdk: {
      input: UpdateDatasetCommandInput;
      output: UpdateDatasetCommandOutput;
    };
  };
}

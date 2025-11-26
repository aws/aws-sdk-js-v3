// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { UpdateDataset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Update a dataset to replace its schema with a new or existing one. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-dataset-schema.html">Replacing a dataset's schema</a>. </p>
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
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class UpdateDatasetCommand extends $Command
  .classBuilder<
    UpdateDatasetCommandInput,
    UpdateDatasetCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "UpdateDataset", {})
  .n("PersonalizeClient", "UpdateDatasetCommand")
  .sc(UpdateDataset)
  .build() {
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

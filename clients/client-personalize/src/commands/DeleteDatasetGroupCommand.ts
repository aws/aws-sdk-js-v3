// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDatasetGroupRequest } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteDatasetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetGroupCommand}.
 */
export interface DeleteDatasetGroupCommandInput extends DeleteDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetGroupCommand}.
 */
export interface DeleteDatasetGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a dataset group. Before you delete a dataset group, you must
 *       delete the following:</p>
 *          <ul>
 *             <li>
 *                <p>All associated event trackers.</p>
 *             </li>
 *             <li>
 *                <p>All associated solutions.</p>
 *             </li>
 *             <li>
 *                <p>All datasets in the dataset group.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteDatasetGroupCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteDatasetGroupCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DeleteDatasetGroupRequest
 *   datasetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetGroupCommandInput - {@link DeleteDatasetGroupCommandInput}
 * @returns {@link DeleteDatasetGroupCommandOutput}
 * @see {@link DeleteDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetGroupCommandOutput} for command's `response` shape.
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
export class DeleteDatasetGroupCommand extends $Command
  .classBuilder<
    DeleteDatasetGroupCommandInput,
    DeleteDatasetGroupCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DeleteDatasetGroup", {})
  .n("PersonalizeClient", "DeleteDatasetGroupCommand")
  .sc(DeleteDatasetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetGroupCommandInput;
      output: DeleteDatasetGroupCommandOutput;
    };
  };
}

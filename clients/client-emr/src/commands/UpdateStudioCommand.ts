// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateStudioInput } from "../models/models_0";
import { UpdateStudio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStudioCommand}.
 */
export interface UpdateStudioCommandInput extends UpdateStudioInput {}
/**
 * @public
 *
 * The output of {@link UpdateStudioCommand}.
 */
export interface UpdateStudioCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an Amazon EMR Studio configuration, including attributes such as name,
 *          description, and subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, UpdateStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, UpdateStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // UpdateStudioInput
 *   StudioId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   DefaultS3Location: "STRING_VALUE",
 *   EncryptionKeyArn: "STRING_VALUE",
 * };
 * const command = new UpdateStudioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStudioCommandInput - {@link UpdateStudioCommandInput}
 * @returns {@link UpdateStudioCommandOutput}
 * @see {@link UpdateStudioCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class UpdateStudioCommand extends $Command
  .classBuilder<
    UpdateStudioCommandInput,
    UpdateStudioCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "UpdateStudio", {})
  .n("EMRClient", "UpdateStudioCommand")
  .sc(UpdateStudio$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStudioInput;
      output: {};
    };
    sdk: {
      input: UpdateStudioCommandInput;
      output: UpdateStudioCommandOutput;
    };
  };
}

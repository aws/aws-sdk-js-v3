// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateUsageProfileRequest, UpdateUsageProfileResponse } from "../models/models_3";
import { de_UpdateUsageProfileCommand, se_UpdateUsageProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUsageProfileCommand}.
 */
export interface UpdateUsageProfileCommandInput extends UpdateUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUsageProfileCommand}.
 */
export interface UpdateUsageProfileCommandOutput extends UpdateUsageProfileResponse, __MetadataBearer {}

/**
 * <p>Update an Glue usage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateUsageProfileRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Configuration: { // ProfileConfiguration
 *     SessionConfiguration: { // ConfigurationMap
 *       "<keys>": { // ConfigurationObject
 *         DefaultValue: "STRING_VALUE",
 *         AllowedValues: [ // AllowedValuesStringList
 *           "STRING_VALUE",
 *         ],
 *         MinValue: "STRING_VALUE",
 *         MaxValue: "STRING_VALUE",
 *       },
 *     },
 *     JobConfiguration: {
 *       "<keys>": {
 *         DefaultValue: "STRING_VALUE",
 *         AllowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         MinValue: "STRING_VALUE",
 *         MaxValue: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateUsageProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUsageProfileResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateUsageProfileCommandInput - {@link UpdateUsageProfileCommandInput}
 * @returns {@link UpdateUsageProfileCommandOutput}
 * @see {@link UpdateUsageProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateUsageProfileCommand extends $Command
  .classBuilder<
    UpdateUsageProfileCommandInput,
    UpdateUsageProfileCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateUsageProfile", {})
  .n("GlueClient", "UpdateUsageProfileCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUsageProfileCommand)
  .de(de_UpdateUsageProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUsageProfileRequest;
      output: UpdateUsageProfileResponse;
    };
    sdk: {
      input: UpdateUsageProfileCommandInput;
      output: UpdateUsageProfileCommandOutput;
    };
  };
}

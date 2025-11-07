// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateUsageProfileRequest, CreateUsageProfileResponse } from "../models/models_1";
import { CreateUsageProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUsageProfileCommand}.
 */
export interface CreateUsageProfileCommandInput extends CreateUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateUsageProfileCommand}.
 */
export interface CreateUsageProfileCommandOutput extends CreateUsageProfileResponse, __MetadataBearer {}

/**
 * <p>Creates an Glue usage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateUsageProfileRequest
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
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUsageProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateUsageProfileResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUsageProfileCommandInput - {@link CreateUsageProfileCommandInput}
 * @returns {@link CreateUsageProfileCommandOutput}
 * @see {@link CreateUsageProfileCommandInput} for command's `input` shape.
 * @see {@link CreateUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateUsageProfileCommand extends $Command
  .classBuilder<
    CreateUsageProfileCommandInput,
    CreateUsageProfileCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateUsageProfile", {})
  .n("GlueClient", "CreateUsageProfileCommand")
  .sc(CreateUsageProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUsageProfileRequest;
      output: CreateUsageProfileResponse;
    };
    sdk: {
      input: CreateUsageProfileCommandInput;
      output: CreateUsageProfileCommandOutput;
    };
  };
}

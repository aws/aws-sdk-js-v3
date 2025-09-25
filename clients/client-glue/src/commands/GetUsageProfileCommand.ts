// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUsageProfileRequest, GetUsageProfileResponse } from "../models/models_2";
import { GetUsageProfile } from "../schemas/schemas_4_Usage";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsageProfileCommand}.
 */
export interface GetUsageProfileCommandInput extends GetUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageProfileCommand}.
 */
export interface GetUsageProfileCommandOutput extends GetUsageProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified Glue usage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetUsageProfileRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetUsageProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageProfileResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Configuration: { // ProfileConfiguration
 * //     SessionConfiguration: { // ConfigurationMap
 * //       "<keys>": { // ConfigurationObject
 * //         DefaultValue: "STRING_VALUE",
 * //         AllowedValues: [ // AllowedValuesStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         MinValue: "STRING_VALUE",
 * //         MaxValue: "STRING_VALUE",
 * //       },
 * //     },
 * //     JobConfiguration: {
 * //       "<keys>": {
 * //         DefaultValue: "STRING_VALUE",
 * //         AllowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MinValue: "STRING_VALUE",
 * //         MaxValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   CreatedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetUsageProfileCommandInput - {@link GetUsageProfileCommandInput}
 * @returns {@link GetUsageProfileCommandOutput}
 * @see {@link GetUsageProfileCommandInput} for command's `input` shape.
 * @see {@link GetUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class GetUsageProfileCommand extends $Command
  .classBuilder<
    GetUsageProfileCommandInput,
    GetUsageProfileCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetUsageProfile", {})
  .n("GlueClient", "GetUsageProfileCommand")
  .sc(GetUsageProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageProfileRequest;
      output: GetUsageProfileResponse;
    };
    sdk: {
      input: GetUsageProfileCommandInput;
      output: GetUsageProfileCommandOutput;
    };
  };
}

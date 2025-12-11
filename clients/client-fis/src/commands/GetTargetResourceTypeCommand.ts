// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type { GetTargetResourceTypeRequest, GetTargetResourceTypeResponse } from "../models/models_0";
import { GetTargetResourceType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTargetResourceTypeCommand}.
 */
export interface GetTargetResourceTypeCommandInput extends GetTargetResourceTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetTargetResourceTypeCommand}.
 */
export interface GetTargetResourceTypeCommandOutput extends GetTargetResourceTypeResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetTargetResourceTypeCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetTargetResourceTypeCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // GetTargetResourceTypeRequest
 *   resourceType: "STRING_VALUE", // required
 * };
 * const command = new GetTargetResourceTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetTargetResourceTypeResponse
 * //   targetResourceType: { // TargetResourceType
 * //     resourceType: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     parameters: { // TargetResourceTypeParameterMap
 * //       "<keys>": { // TargetResourceTypeParameter
 * //         description: "STRING_VALUE",
 * //         required: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTargetResourceTypeCommandInput - {@link GetTargetResourceTypeCommandInput}
 * @returns {@link GetTargetResourceTypeCommandOutput}
 * @see {@link GetTargetResourceTypeCommandInput} for command's `input` shape.
 * @see {@link GetTargetResourceTypeCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class GetTargetResourceTypeCommand extends $Command
  .classBuilder<
    GetTargetResourceTypeCommandInput,
    GetTargetResourceTypeCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "GetTargetResourceType", {})
  .n("FisClient", "GetTargetResourceTypeCommand")
  .sc(GetTargetResourceType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTargetResourceTypeRequest;
      output: GetTargetResourceTypeResponse;
    };
    sdk: {
      input: GetTargetResourceTypeCommandInput;
      output: GetTargetResourceTypeCommandOutput;
    };
  };
}

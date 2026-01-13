// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCalculationExecutionCodeRequest, GetCalculationExecutionCodeResponse } from "../models/models_0";
import { GetCalculationExecutionCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCalculationExecutionCodeCommand}.
 */
export interface GetCalculationExecutionCodeCommandInput extends GetCalculationExecutionCodeRequest {}
/**
 * @public
 *
 * The output of {@link GetCalculationExecutionCodeCommand}.
 */
export interface GetCalculationExecutionCodeCommandOutput extends GetCalculationExecutionCodeResponse, __MetadataBearer {}

/**
 * <p>Retrieves the unencrypted code that was executed for the calculation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCalculationExecutionCodeCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCalculationExecutionCodeCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetCalculationExecutionCodeRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetCalculationExecutionCodeCommand(input);
 * const response = await client.send(command);
 * // { // GetCalculationExecutionCodeResponse
 * //   CodeBlock: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCalculationExecutionCodeCommandInput - {@link GetCalculationExecutionCodeCommandInput}
 * @returns {@link GetCalculationExecutionCodeCommandOutput}
 * @see {@link GetCalculationExecutionCodeCommandInput} for command's `input` shape.
 * @see {@link GetCalculationExecutionCodeCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetCalculationExecutionCodeCommand extends $Command
  .classBuilder<
    GetCalculationExecutionCodeCommandInput,
    GetCalculationExecutionCodeCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetCalculationExecutionCode", {})
  .n("AthenaClient", "GetCalculationExecutionCodeCommand")
  .sc(GetCalculationExecutionCode$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCalculationExecutionCodeRequest;
      output: GetCalculationExecutionCodeResponse;
    };
    sdk: {
      input: GetCalculationExecutionCodeCommandInput;
      output: GetCalculationExecutionCodeCommandOutput;
    };
  };
}

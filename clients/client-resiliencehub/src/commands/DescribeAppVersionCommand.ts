// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAppVersionRequest, DescribeAppVersionResponse } from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DescribeAppVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppVersionCommand}.
 */
export interface DescribeAppVersionCommandInput extends DescribeAppVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppVersionCommand}.
 */
export interface DescribeAppVersionCommandOutput extends DescribeAppVersionResponse, __MetadataBearer {}

/**
 * <p>Describes the Resilience Hub application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppVersionRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppVersionResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   additionalInfo: { // AdditionalInfoMap
 * //     "<keys>": [ // AdditionalInfoValueList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppVersionCommandInput - {@link DescribeAppVersionCommandInput}
 * @returns {@link DescribeAppVersionCommandOutput}
 * @see {@link DescribeAppVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class DescribeAppVersionCommand extends $Command
  .classBuilder<
    DescribeAppVersionCommandInput,
    DescribeAppVersionCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DescribeAppVersion", {})
  .n("ResiliencehubClient", "DescribeAppVersionCommand")
  .sc(DescribeAppVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppVersionRequest;
      output: DescribeAppVersionResponse;
    };
    sdk: {
      input: DescribeAppVersionCommandInput;
      output: DescribeAppVersionCommandOutput;
    };
  };
}

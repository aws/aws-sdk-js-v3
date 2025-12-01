// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetUsageLimitRequest, GetUsageLimitResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetUsageLimit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsageLimitCommand}.
 */
export interface GetUsageLimitCommandInput extends GetUsageLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageLimitCommand}.
 */
export interface GetUsageLimitCommandOutput extends GetUsageLimitResponse, __MetadataBearer {}

/**
 * <p>Returns information about a usage limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetUsageLimitCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetUsageLimitCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetUsageLimitRequest
 *   usageLimitId: "STRING_VALUE", // required
 * };
 * const command = new GetUsageLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageLimitResponse
 * //   usageLimit: { // UsageLimit
 * //     usageLimitId: "STRING_VALUE",
 * //     usageLimitArn: "STRING_VALUE",
 * //     resourceArn: "STRING_VALUE",
 * //     usageType: "STRING_VALUE",
 * //     amount: Number("long"),
 * //     period: "STRING_VALUE",
 * //     breachAction: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUsageLimitCommandInput - {@link GetUsageLimitCommandInput}
 * @returns {@link GetUsageLimitCommandOutput}
 * @see {@link GetUsageLimitCommandInput} for command's `input` shape.
 * @see {@link GetUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class GetUsageLimitCommand extends $Command
  .classBuilder<
    GetUsageLimitCommandInput,
    GetUsageLimitCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetUsageLimit", {})
  .n("RedshiftServerlessClient", "GetUsageLimitCommand")
  .sc(GetUsageLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageLimitRequest;
      output: GetUsageLimitResponse;
    };
    sdk: {
      input: GetUsageLimitCommandInput;
      output: GetUsageLimitCommandOutput;
    };
  };
}

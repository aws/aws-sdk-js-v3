// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUsageLimitRequest, UpdateUsageLimitResponse } from "../models/models_0";
import { de_UpdateUsageLimitCommand, se_UpdateUsageLimitCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUsageLimitCommand}.
 */
export interface UpdateUsageLimitCommandInput extends UpdateUsageLimitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUsageLimitCommand}.
 */
export interface UpdateUsageLimitCommandOutput extends UpdateUsageLimitResponse, __MetadataBearer {}

/**
 * <p>Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateUsageLimitCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateUsageLimitCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateUsageLimitRequest
 *   usageLimitId: "STRING_VALUE", // required
 *   amount: Number("long"),
 *   breachAction: "STRING_VALUE",
 * };
 * const command = new UpdateUsageLimitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUsageLimitResponse
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
 * @param UpdateUsageLimitCommandInput - {@link UpdateUsageLimitCommandInput}
 * @returns {@link UpdateUsageLimitCommandOutput}
 * @see {@link UpdateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageLimitCommandOutput} for command's `response` shape.
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
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class UpdateUsageLimitCommand extends $Command
  .classBuilder<
    UpdateUsageLimitCommandInput,
    UpdateUsageLimitCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "UpdateUsageLimit", {})
  .n("RedshiftServerlessClient", "UpdateUsageLimitCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUsageLimitCommand)
  .de(de_UpdateUsageLimitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUsageLimitRequest;
      output: UpdateUsageLimitResponse;
    };
    sdk: {
      input: UpdateUsageLimitCommandInput;
      output: UpdateUsageLimitCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSnowballUsageRequest, GetSnowballUsageResult } from "../models/models_0";
import { de_GetSnowballUsageCommand, se_GetSnowballUsageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSnowballUsageCommand}.
 */
export interface GetSnowballUsageCommandInput extends GetSnowballUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetSnowballUsageCommand}.
 */
export interface GetSnowballUsageCommandOutput extends GetSnowballUsageResult, __MetadataBearer {}

/**
 * <p>Returns information about the Snow Family service limit for your account, and also the
 *       number of Snow devices your account has in use.</p>
 *          <p>The default service limit for the number of Snow devices that you can have at one time
 *       is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSnowballUsageCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSnowballUsageCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = {};
 * const command = new GetSnowballUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetSnowballUsageResult
 * //   SnowballLimit: Number("int"),
 * //   SnowballsInUse: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetSnowballUsageCommandInput - {@link GetSnowballUsageCommandInput}
 * @returns {@link GetSnowballUsageCommandOutput}
 * @see {@link GetSnowballUsageCommandInput} for command's `input` shape.
 * @see {@link GetSnowballUsageCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 * @example To see your Snowball service limit and the number of Snowballs you have in use
 * ```javascript
 * // Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.
 * //
 * // The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.
 * const input = {};
 * const command = new GetSnowballUsageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SnowballLimit": 1,
 *   "SnowballsInUse": 0
 * }
 * *\/
 * // example id: to-see-your-snowball-service-limit-and-the-number-of-snowballs-you-have-in-use-1482863394588
 * ```
 *
 */
export class GetSnowballUsageCommand extends $Command
  .classBuilder<
    GetSnowballUsageCommandInput,
    GetSnowballUsageCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "GetSnowballUsage", {})
  .n("SnowballClient", "GetSnowballUsageCommand")
  .f(void 0, void 0)
  .ser(se_GetSnowballUsageCommand)
  .de(de_GetSnowballUsageCommand)
  .build() {}

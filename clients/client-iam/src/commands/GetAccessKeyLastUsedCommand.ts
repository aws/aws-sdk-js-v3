// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccessKeyLastUsedRequest, GetAccessKeyLastUsedResponse } from "../models/models_0";
import { de_GetAccessKeyLastUsedCommand, se_GetAccessKeyLastUsedCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandInput extends GetAccessKeyLastUsedRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandOutput extends GetAccessKeyLastUsedResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about when the specified access key was last used. The
 *             information includes the date and time of last use, along with the Amazon Web Services service and
 *             Region that were specified in the last request made with that key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccessKeyLastUsedCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccessKeyLastUsedCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetAccessKeyLastUsedRequest
 *   AccessKeyId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessKeyLastUsedCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessKeyLastUsedResponse
 * //   UserName: "STRING_VALUE",
 * //   AccessKeyLastUsed: { // AccessKeyLastUsed
 * //     LastUsedDate: new Date("TIMESTAMP"),
 * //     ServiceName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessKeyLastUsedCommandInput - {@link GetAccessKeyLastUsedCommandInput}
 * @returns {@link GetAccessKeyLastUsedCommandOutput}
 * @see {@link GetAccessKeyLastUsedCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyLastUsedCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetAccessKeyLastUsedCommand extends $Command
  .classBuilder<
    GetAccessKeyLastUsedCommandInput,
    GetAccessKeyLastUsedCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "GetAccessKeyLastUsed", {})
  .n("IAMClient", "GetAccessKeyLastUsedCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessKeyLastUsedCommand)
  .de(de_GetAccessKeyLastUsedCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessKeyLastUsedRequest;
      output: GetAccessKeyLastUsedResponse;
    };
    sdk: {
      input: GetAccessKeyLastUsedCommandInput;
      output: GetAccessKeyLastUsedCommandOutput;
    };
  };
}

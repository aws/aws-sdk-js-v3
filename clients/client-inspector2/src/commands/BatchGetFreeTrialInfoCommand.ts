// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetFreeTrialInfoRequest, BatchGetFreeTrialInfoResponse } from "../models/models_0";
import { de_BatchGetFreeTrialInfoCommand, se_BatchGetFreeTrialInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFreeTrialInfoCommand}.
 */
export interface BatchGetFreeTrialInfoCommandInput extends BatchGetFreeTrialInfoRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFreeTrialInfoCommand}.
 */
export interface BatchGetFreeTrialInfoCommandOutput extends BatchGetFreeTrialInfoResponse, __MetadataBearer {}

/**
 * <p>Gets free trial status for multiple Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetFreeTrialInfoCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetFreeTrialInfoCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetFreeTrialInfoRequest
 *   accountIds: [ // MeteringAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetFreeTrialInfoCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFreeTrialInfoResponse
 * //   accounts: [ // FreeTrialAccountInfoList // required
 * //     { // FreeTrialAccountInfo
 * //       accountId: "STRING_VALUE", // required
 * //       freeTrialInfo: [ // FreeTrialInfoList // required
 * //         { // FreeTrialInfo
 * //           type: "STRING_VALUE", // required
 * //           start: new Date("TIMESTAMP"), // required
 * //           end: new Date("TIMESTAMP"), // required
 * //           status: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failedAccounts: [ // FreeTrialInfoErrorList // required
 * //     { // FreeTrialInfoError
 * //       accountId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFreeTrialInfoCommandInput - {@link BatchGetFreeTrialInfoCommandInput}
 * @returns {@link BatchGetFreeTrialInfoCommandOutput}
 * @see {@link BatchGetFreeTrialInfoCommandInput} for command's `input` shape.
 * @see {@link BatchGetFreeTrialInfoCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class BatchGetFreeTrialInfoCommand extends $Command
  .classBuilder<
    BatchGetFreeTrialInfoCommandInput,
    BatchGetFreeTrialInfoCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "BatchGetFreeTrialInfo", {})
  .n("Inspector2Client", "BatchGetFreeTrialInfoCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetFreeTrialInfoCommand)
  .de(de_BatchGetFreeTrialInfoCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFreeTrialInfoRequest;
      output: BatchGetFreeTrialInfoResponse;
    };
    sdk: {
      input: BatchGetFreeTrialInfoCommandInput;
      output: BatchGetFreeTrialInfoCommandOutput;
    };
  };
}

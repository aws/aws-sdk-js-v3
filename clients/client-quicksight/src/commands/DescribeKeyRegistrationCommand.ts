// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeKeyRegistrationRequest, DescribeKeyRegistrationResponse } from "../models/models_4";
import { de_DescribeKeyRegistrationCommand, se_DescribeKeyRegistrationCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyRegistrationCommand}.
 */
export interface DescribeKeyRegistrationCommandInput extends DescribeKeyRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyRegistrationCommand}.
 */
export interface DescribeKeyRegistrationCommandOutput extends DescribeKeyRegistrationResponse, __MetadataBearer {}

/**
 * <p>Describes all customer managed key registrations in a Amazon QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeKeyRegistrationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeKeyRegistrationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeKeyRegistrationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DefaultKeyOnly: true || false,
 * };
 * const command = new DescribeKeyRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyRegistrationResponse
 * //   AwsAccountId: "STRING_VALUE",
 * //   KeyRegistration: [ // KeyRegistration
 * //     { // RegisteredCustomerManagedKey
 * //       KeyArn: "STRING_VALUE",
 * //       DefaultKey: true || false,
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeKeyRegistrationCommandInput - {@link DescribeKeyRegistrationCommandInput}
 * @returns {@link DescribeKeyRegistrationCommandOutput}
 * @see {@link DescribeKeyRegistrationCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyRegistrationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeKeyRegistrationCommand extends $Command
  .classBuilder<
    DescribeKeyRegistrationCommandInput,
    DescribeKeyRegistrationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeKeyRegistration", {})
  .n("QuickSightClient", "DescribeKeyRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeKeyRegistrationCommand)
  .de(de_DescribeKeyRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyRegistrationRequest;
      output: DescribeKeyRegistrationResponse;
    };
    sdk: {
      input: DescribeKeyRegistrationCommandInput;
      output: DescribeKeyRegistrationCommandOutput;
    };
  };
}

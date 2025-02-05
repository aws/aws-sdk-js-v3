// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProfileRequest, DescribeProfileResponse } from "../models/models_0";
import { de_DescribeProfileCommand, se_DescribeProfileCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProfileCommand}.
 */
export interface DescribeProfileCommandInput extends DescribeProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProfileCommand}.
 */
export interface DescribeProfileCommandOutput extends DescribeProfileResponse, __MetadataBearer {}

/**
 * <p>Returns the details of the profile that's specified by the <code>ProfileId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeProfileCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeProfileCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TransferClient(config);
 * const input = { // DescribeProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new DescribeProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProfileResponse
 * //   Profile: { // DescribedProfile
 * //     Arn: "STRING_VALUE", // required
 * //     ProfileId: "STRING_VALUE",
 * //     ProfileType: "LOCAL" || "PARTNER",
 * //     As2Id: "STRING_VALUE",
 * //     CertificateIds: [ // CertificateIds
 * //       "STRING_VALUE",
 * //     ],
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProfileCommandInput - {@link DescribeProfileCommandInput}
 * @returns {@link DescribeProfileCommandOutput}
 * @see {@link DescribeProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeProfileCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 * @public
 */
export class DescribeProfileCommand extends $Command
  .classBuilder<
    DescribeProfileCommandInput,
    DescribeProfileCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "DescribeProfile", {})
  .n("TransferClient", "DescribeProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProfileCommand)
  .de(de_DescribeProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProfileRequest;
      output: DescribeProfileResponse;
    };
    sdk: {
      input: DescribeProfileCommandInput;
      output: DescribeProfileCommandOutput;
    };
  };
}

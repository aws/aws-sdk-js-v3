// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAgreementRequest, DescribeAgreementResponse } from "../models/models_0";
import { de_DescribeAgreementCommand, se_DescribeAgreementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandInput extends DescribeAgreementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandOutput extends DescribeAgreementResponse, __MetadataBearer {}

/**
 * <p>Describes the agreement that's identified by the <code>AgreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TransferClient(config);
 * const input = { // DescribeAgreementRequest
 *   AgreementId: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgreementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgreementResponse
 * //   Agreement: { // DescribedAgreement
 * //     Arn: "STRING_VALUE", // required
 * //     AgreementId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     ServerId: "STRING_VALUE",
 * //     LocalProfileId: "STRING_VALUE",
 * //     PartnerProfileId: "STRING_VALUE",
 * //     BaseDirectory: "STRING_VALUE",
 * //     AccessRole: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     PreserveFilename: "ENABLED" || "DISABLED",
 * //     EnforceMessageSigning: "ENABLED" || "DISABLED",
 * //     CustomDirectories: { // CustomDirectoriesType
 * //       FailedFilesDirectory: "STRING_VALUE", // required
 * //       MdnFilesDirectory: "STRING_VALUE", // required
 * //       PayloadFilesDirectory: "STRING_VALUE", // required
 * //       StatusFilesDirectory: "STRING_VALUE", // required
 * //       TemporaryFilesDirectory: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAgreementCommandInput - {@link DescribeAgreementCommandInput}
 * @returns {@link DescribeAgreementCommandOutput}
 * @see {@link DescribeAgreementCommandInput} for command's `input` shape.
 * @see {@link DescribeAgreementCommandOutput} for command's `response` shape.
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
export class DescribeAgreementCommand extends $Command
  .classBuilder<
    DescribeAgreementCommandInput,
    DescribeAgreementCommandOutput,
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
  .s("TransferService", "DescribeAgreement", {})
  .n("TransferClient", "DescribeAgreementCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAgreementCommand)
  .de(de_DescribeAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgreementRequest;
      output: DescribeAgreementResponse;
    };
    sdk: {
      input: DescribeAgreementCommandInput;
      output: DescribeAgreementCommandOutput;
    };
  };
}

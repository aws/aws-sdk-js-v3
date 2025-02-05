// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAgreementRequest, CreateAgreementResponse } from "../models/models_0";
import { de_CreateAgreementCommand, se_CreateAgreementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgreementCommand}.
 */
export interface CreateAgreementCommandInput extends CreateAgreementRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgreementCommand}.
 */
export interface CreateAgreementCommandOutput extends CreateAgreementResponse, __MetadataBearer {}

/**
 * <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership,
 *       between an Transfer Family server and an AS2 process. The agreement defines the file and message
 *       transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family
 *       combines a server, local profile, partner profile, certificate, and other
 *       attributes.</p>
 *          <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
 *          <note>
 *             <p>Specify <i>either</i>
 *                <code>BaseDirectory</code> or <code>CustomDirectories</code>, but not both. Specifying both causes the command to fail.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TransferClient(config);
 * const input = { // CreateAgreementRequest
 *   Description: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 *   LocalProfileId: "STRING_VALUE", // required
 *   PartnerProfileId: "STRING_VALUE", // required
 *   BaseDirectory: "STRING_VALUE",
 *   AccessRole: "STRING_VALUE", // required
 *   Status: "ACTIVE" || "INACTIVE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   PreserveFilename: "ENABLED" || "DISABLED",
 *   EnforceMessageSigning: "ENABLED" || "DISABLED",
 *   CustomDirectories: { // CustomDirectoriesType
 *     FailedFilesDirectory: "STRING_VALUE", // required
 *     MdnFilesDirectory: "STRING_VALUE", // required
 *     PayloadFilesDirectory: "STRING_VALUE", // required
 *     StatusFilesDirectory: "STRING_VALUE", // required
 *     TemporaryFilesDirectory: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateAgreementCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgreementResponse
 * //   AgreementId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAgreementCommandInput - {@link CreateAgreementCommandInput}
 * @returns {@link CreateAgreementCommandOutput}
 * @see {@link CreateAgreementCommandInput} for command's `input` shape.
 * @see {@link CreateAgreementCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 * @public
 */
export class CreateAgreementCommand extends $Command
  .classBuilder<
    CreateAgreementCommandInput,
    CreateAgreementCommandOutput,
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
  .s("TransferService", "CreateAgreement", {})
  .n("TransferClient", "CreateAgreementCommand")
  .f(void 0, void 0)
  .ser(se_CreateAgreementCommand)
  .de(de_CreateAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgreementRequest;
      output: CreateAgreementResponse;
    };
    sdk: {
      input: CreateAgreementCommandInput;
      output: CreateAgreementCommandOutput;
    };
  };
}

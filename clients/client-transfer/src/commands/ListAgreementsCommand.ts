// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgreementsRequest, ListAgreementsResponse } from "../models/models_0";
import { de_ListAgreementsCommand, se_ListAgreementsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgreementsCommand}.
 */
export interface ListAgreementsCommandInput extends ListAgreementsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgreementsCommand}.
 */
export interface ListAgreementsCommandOutput extends ListAgreementsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the agreements for the server that's identified by the
 *         <code>ServerId</code> that you supply. If you want to limit the results to a certain number,
 *       supply a value for the <code>MaxResults</code> parameter. If you ran the command previously
 *       and received a value for <code>NextToken</code>, you can supply that value to continue listing
 *       agreements from where you left off.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAgreementsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAgreementsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ListAgreementsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new ListAgreementsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Agreements: [ // ListedAgreements // required
 * //     { // ListedAgreement
 * //       Arn: "STRING_VALUE",
 * //       AgreementId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       ServerId: "STRING_VALUE",
 * //       LocalProfileId: "STRING_VALUE",
 * //       PartnerProfileId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAgreementsCommandInput - {@link ListAgreementsCommandInput}
 * @returns {@link ListAgreementsCommandOutput}
 * @see {@link ListAgreementsCommandInput} for command's `input` shape.
 * @see {@link ListAgreementsCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
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
 *
 * @public
 */
export class ListAgreementsCommand extends $Command
  .classBuilder<
    ListAgreementsCommandInput,
    ListAgreementsCommandOutput,
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
  .s("TransferService", "ListAgreements", {})
  .n("TransferClient", "ListAgreementsCommand")
  .f(void 0, void 0)
  .ser(se_ListAgreementsCommand)
  .de(de_ListAgreementsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementsRequest;
      output: ListAgreementsResponse;
    };
    sdk: {
      input: ListAgreementsCommandInput;
      output: ListAgreementsCommandOutput;
    };
  };
}

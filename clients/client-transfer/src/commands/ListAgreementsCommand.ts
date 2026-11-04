// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgreementsRequest, ListAgreementsResponse } from "../models/models_0";
import { ListAgreements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of the agreements for the server that's identified by the `ServerId` that you supply. If you want to limit the results to a certain number, supply a value for the `MaxResults` parameter. If you ran the command previously and received a value for `NextToken`, you can supply that value to continue listing agreements from where you left off.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAgreementsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAgreementsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
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
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` parameter that was passed is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class ListAgreementsCommand extends command<ListAgreementsCommandInput, ListAgreementsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgreements",
  ListAgreements$
) {
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

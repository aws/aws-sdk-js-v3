// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import {
  BatchGetInvoiceProfileRequest,
  BatchGetInvoiceProfileResponse,
  BatchGetInvoiceProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetInvoiceProfileCommand, se_BatchGetInvoiceProfileCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetInvoiceProfileCommand}.
 */
export interface BatchGetInvoiceProfileCommandInput extends BatchGetInvoiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetInvoiceProfileCommand}.
 */
export interface BatchGetInvoiceProfileCommandOutput extends BatchGetInvoiceProfileResponse, __MetadataBearer {}

/**
 * <p>This gets the invoice profile associated with a set of accounts. The accounts must be linked accounts under the requester management account organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, BatchGetInvoiceProfileCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, BatchGetInvoiceProfileCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * const client = new InvoicingClient(config);
 * const input = { // BatchGetInvoiceProfileRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetInvoiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetInvoiceProfileResponse
 * //   Profiles: [ // ProfileList
 * //     { // InvoiceProfile
 * //       AccountId: "STRING_VALUE",
 * //       ReceiverName: "STRING_VALUE",
 * //       ReceiverAddress: { // ReceiverAddress
 * //         AddressLine1: "STRING_VALUE",
 * //         AddressLine2: "STRING_VALUE",
 * //         AddressLine3: "STRING_VALUE",
 * //         DistrictOrCounty: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         StateOrRegion: "STRING_VALUE",
 * //         CountryCode: "STRING_VALUE",
 * //         CompanyName: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       ReceiverEmail: "STRING_VALUE",
 * //       Issuer: "STRING_VALUE",
 * //       TaxRegistrationNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetInvoiceProfileCommandInput - {@link BatchGetInvoiceProfileCommandInput}
 * @returns {@link BatchGetInvoiceProfileCommandOutput}
 * @see {@link BatchGetInvoiceProfileCommandInput} for command's `input` shape.
 * @see {@link BatchGetInvoiceProfileCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure.
 * </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.
 * </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *     The input fails to satisfy the constraints specified by an Amazon Web Services service.
 * </p>
 *
 * @throws {@link InvoicingServiceException}
 * <p>Base exception class for all service exceptions from Invoicing service.</p>
 *
 * @public
 */
export class BatchGetInvoiceProfileCommand extends $Command
  .classBuilder<
    BatchGetInvoiceProfileCommandInput,
    BatchGetInvoiceProfileCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Invoicing", "BatchGetInvoiceProfile", {})
  .n("InvoicingClient", "BatchGetInvoiceProfileCommand")
  .f(void 0, BatchGetInvoiceProfileResponseFilterSensitiveLog)
  .ser(se_BatchGetInvoiceProfileCommand)
  .de(de_BatchGetInvoiceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetInvoiceProfileRequest;
      output: BatchGetInvoiceProfileResponse;
    };
    sdk: {
      input: BatchGetInvoiceProfileCommandInput;
      output: BatchGetInvoiceProfileCommandOutput;
    };
  };
}

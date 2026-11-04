// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetInvoiceProfileRequest, BatchGetInvoiceProfileResponse } from "../models/models_0";
import { BatchGetInvoiceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This gets the invoice profile associated with a set of accounts. The accounts must be linked accounts under the requester management account organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, BatchGetInvoiceProfileCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, BatchGetInvoiceProfileCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
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
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The processing request failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InvoicingServiceException}
 *
 * Base exception class for all service exceptions from Invoicing service.
 *
 * @example BatchGetInvoiceProfile
 * ```javascript
 * //
 * const input = {
 *   AccountIds: [
 *     "111111111111"
 *   ]
 * };
 * const command = new BatchGetInvoiceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Profiles: [
 *     {
 *       AccountId: "111111111111",
 *       Issuer: "Test",
 *       ReceiverAddress: {
 *         AddressLine1: "Test",
 *         City: "Test",
 *         CountryCode: "LU",
 *         PostalCode: "Test",
 *         StateOrRegion: "Test"
 *       },
 *       ReceiverEmail: "test@amazon.com",
 *       ReceiverName: "TestAccount"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetInvoiceProfileCommand extends command<BatchGetInvoiceProfileCommandInput, BatchGetInvoiceProfileCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetInvoiceProfile",
  BatchGetInvoiceProfile$
) {
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

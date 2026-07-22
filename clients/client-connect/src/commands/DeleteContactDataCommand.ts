// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContactDataRequest, DeleteContactDataResponse } from "../models/models_1";
import { DeleteContactData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContactDataCommand}.
 */
export interface DeleteContactDataCommandInput extends DeleteContactDataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactDataCommand}.
 */
export interface DeleteContactDataCommandOutput extends DeleteContactDataResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified fields containing personally identifiable information (PII) from a
 *    contact in the specified Connect Customer instance. This operation redacts PII (such as
 *    customer endpoints, additional email recipients, and the email subject) from the contact and its
 *    associated contact trace record (CTR). The contact must be in a terminated state.</p>
 *          <important>
 *             <p>This operation performs a hard deletion of the specified PII and cannot be undone. There is
 *     no retention period; after the data is deleted, it cannot be recovered. Only fields that
 *     Connect Customer identifies and stores as PII are removed. Any PII that you place in fields
 *     outside the scope of this operation remains your responsibility to remove.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ContactFields: [ // ContactFields // required
 *     "CUSTOMER_ENDPOINT" || "ADDITIONAL_EMAIL_RECIPIENTS" || "EMAIL_SUBJECT",
 *   ],
 * };
 * const command = new DeleteContactDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactDataCommandInput - {@link DeleteContactDataCommandInput}
 * @returns {@link DeleteContactDataCommandOutput}
 * @see {@link DeleteContactDataCommandInput} for command's `input` shape.
 * @see {@link DeleteContactDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ContactNotTerminatedException} (client fault)
 *  <p>The contact has not been disconnected and is not in a terminated state. PII can be deleted
 *    only from a contact that has been disconnected. This error is returned with an HTTP 409 status
 *    code.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteContactDataCommand extends command<DeleteContactDataCommandInput, DeleteContactDataCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContactData",
  DeleteContactData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactDataRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactDataCommandInput;
      output: DeleteContactDataCommandOutput;
    };
  };
}

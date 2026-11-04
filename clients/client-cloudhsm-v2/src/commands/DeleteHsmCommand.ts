// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHsmRequest, DeleteHsmResponse } from "../models/models_0";
import { DeleteHsm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHsmCommand}.
 */
export interface DeleteHsmCommandInput extends DeleteHsmRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHsmCommand}.
 */
export interface DeleteHsmCommandOutput extends DeleteHsmResponse, __MetadataBearer {}

/**
 * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters.
 *
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DeleteHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DeleteHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
 * const client = new CloudHSMV2Client(config);
 * const input = { // DeleteHsmRequest
 *   ClusterId: "STRING_VALUE", // required
 *   HsmId: "STRING_VALUE",
 *   EniId: "STRING_VALUE",
 *   EniIp: "STRING_VALUE",
 * };
 * const command = new DeleteHsmCommand(input);
 * const response = await client.send(command);
 * // { // DeleteHsmResponse
 * //   HsmId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteHsmCommandInput - {@link DeleteHsmCommandInput}
 * @returns {@link DeleteHsmCommandOutput}
 * @see {@link DeleteHsmCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *
 * The request was rejected because the requester does not have permission to perform the requested operation.
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *
 * The request was rejected because of an CloudHSM internal failure. The request can be retried.
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *
 * The request was rejected because it is not a valid request.
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *
 * The request was rejected because it refers to a resource that cannot be found.
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *
 * The request was rejected because an error occurred.
 *
 * @throws {@link CloudHSMV2ServiceException}
 *
 * Base exception class for all service exceptions from CloudHSMV2 service.
 *
 * @public
 */
export class DeleteHsmCommand extends command<DeleteHsmCommandInput, DeleteHsmCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHsm",
  DeleteHsm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHsmRequest;
      output: DeleteHsmResponse;
    };
    sdk: {
      input: DeleteHsmCommandInput;
      output: DeleteHsmCommandOutput;
    };
  };
}

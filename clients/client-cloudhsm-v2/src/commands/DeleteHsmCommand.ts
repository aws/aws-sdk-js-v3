// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteHsmRequest, DeleteHsmResponse } from "../models/models_0";
import { DeleteHsm } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
 *       address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
 *       specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.</p>
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
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 *
 * @public
 */
export class DeleteHsmCommand extends $Command
  .classBuilder<
    DeleteHsmCommandInput,
    DeleteHsmCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BaldrApiService", "DeleteHsm", {})
  .n("CloudHSMV2Client", "DeleteHsmCommand")
  .sc(DeleteHsm)
  .build() {
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

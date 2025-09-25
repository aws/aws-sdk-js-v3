// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { CreateHsm } from "../schemas/schemas_5_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandInput extends CreateHsmRequest {}
/**
 * @public
 *
 * The output of {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandOutput extends CreateHsmResponse, __MetadataBearer {}

/**
 * <p>Creates a new hardware security module (HSM) in the specified CloudHSM
 *       cluster.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Service account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CreateHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
 * const client = new CloudHSMV2Client(config);
 * const input = { // CreateHsmRequest
 *   ClusterId: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE", // required
 *   IpAddress: "STRING_VALUE",
 * };
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * // { // CreateHsmResponse
 * //   Hsm: { // Hsm
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ClusterId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     EniId: "STRING_VALUE",
 * //     EniIp: "STRING_VALUE",
 * //     EniIpV6: "STRING_VALUE",
 * //     HsmId: "STRING_VALUE", // required
 * //     HsmType: "STRING_VALUE",
 * //     State: "CREATE_IN_PROGRESS" || "ACTIVE" || "DEGRADED" || "DELETE_IN_PROGRESS" || "DELETED",
 * //     StateMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHsmCommandInput - {@link CreateHsmCommandInput}
 * @returns {@link CreateHsmCommandOutput}
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
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
export class CreateHsmCommand extends $Command
  .classBuilder<
    CreateHsmCommandInput,
    CreateHsmCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BaldrApiService", "CreateHsm", {})
  .n("CloudHSMV2Client", "CreateHsmCommand")
  .sc(CreateHsm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHsmRequest;
      output: CreateHsmResponse;
    };
    sdk: {
      input: CreateHsmCommandInput;
      output: CreateHsmCommandOutput;
    };
  };
}

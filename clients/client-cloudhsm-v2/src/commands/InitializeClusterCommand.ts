// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0";
import { de_InitializeClusterCommand, se_InitializeClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitializeClusterCommand}.
 */
export interface InitializeClusterCommandInput extends InitializeClusterRequest {}
/**
 * @public
 *
 * The output of {@link InitializeClusterCommand}.
 */
export interface InitializeClusterCommandOutput extends InitializeClusterResponse, __MetadataBearer {}

/**
 * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
 *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, InitializeClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, InitializeClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // InitializeClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 *   SignedCert: "STRING_VALUE", // required
 *   TrustAnchor: "STRING_VALUE", // required
 * };
 * const command = new InitializeClusterCommand(input);
 * const response = await client.send(command);
 * // { // InitializeClusterResponse
 * //   State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
 * //   StateMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitializeClusterCommandInput - {@link InitializeClusterCommandInput}
 * @returns {@link InitializeClusterCommandOutput}
 * @see {@link InitializeClusterCommandInput} for command's `input` shape.
 * @see {@link InitializeClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
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
 * @public
 */
export class InitializeClusterCommand extends $Command
  .classBuilder<
    InitializeClusterCommandInput,
    InitializeClusterCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BaldrApiService", "InitializeCluster", {})
  .n("CloudHSMV2Client", "InitializeClusterCommand")
  .f(void 0, void 0)
  .ser(se_InitializeClusterCommand)
  .de(de_InitializeClusterCommand)
  .build() {}

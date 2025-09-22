// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0";
import { InitializeCluster } from "../schemas/schemas_5_Cluster";

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
 * <p>Claims an CloudHSM cluster by submitting the cluster certificate issued by your
 *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, InitializeClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, InitializeClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
 * const client = new CloudHSMV2Client(config);
 * const input = { // InitializeClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 *   SignedCert: "STRING_VALUE", // required
 *   TrustAnchor: "STRING_VALUE", // required
 * };
 * const command = new InitializeClusterCommand(input);
 * const response = await client.send(command);
 * // { // InitializeClusterResponse
 * //   State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "MODIFY_IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
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
export class InitializeClusterCommand extends $Command
  .classBuilder<
    InitializeClusterCommandInput,
    InitializeClusterCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BaldrApiService", "InitializeCluster", {})
  .n("CloudHSMV2Client", "InitializeClusterCommand")
  .sc(InitializeCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitializeClusterRequest;
      output: InitializeClusterResponse;
    };
    sdk: {
      input: InitializeClusterCommandInput;
      output: InitializeClusterCommandOutput;
    };
  };
}

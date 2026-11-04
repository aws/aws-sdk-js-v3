// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0";
import { InitializeCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Claims an CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters.
 *
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
 *
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
export class InitializeClusterCommand extends command<InitializeClusterCommandInput, InitializeClusterCommandOutput>(
  _ep0,
  _mw0,
  "InitializeCluster",
  InitializeCluster$
) {
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

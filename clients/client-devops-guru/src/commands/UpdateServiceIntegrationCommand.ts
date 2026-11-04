// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceIntegrationRequest, UpdateServiceIntegrationResponse } from "../models/models_0";
import { UpdateServiceIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceIntegrationCommand}.
 */
export interface UpdateServiceIntegrationCommandInput extends UpdateServiceIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceIntegrationCommand}.
 */
export interface UpdateServiceIntegrationCommandOutput extends UpdateServiceIntegrationResponse, __MetadataBearer {}

/**
 * Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // UpdateServiceIntegrationRequest
 *   ServiceIntegration: { // UpdateServiceIntegrationConfig
 *     OpsCenter: { // OpsCenterIntegrationConfig
 *       OptInStatus: "ENABLED" || "DISABLED",
 *     },
 *     LogsAnomalyDetection: { // LogsAnomalyDetectionIntegrationConfig
 *       OptInStatus: "ENABLED" || "DISABLED",
 *     },
 *     KMSServerSideEncryption: { // KMSServerSideEncryptionIntegrationConfig
 *       KMSKeyId: "STRING_VALUE",
 *       OptInStatus: "ENABLED" || "DISABLED",
 *       Type: "CUSTOMER_MANAGED_KEY" || "AWS_OWNED_KMS_KEY",
 *     },
 *   },
 * };
 * const command = new UpdateServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServiceIntegrationCommandInput - {@link UpdateServiceIntegrationCommandInput}
 * @returns {@link UpdateServiceIntegrationCommandOutput}
 * @see {@link UpdateServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An exception that is thrown when a conflict occurs.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class UpdateServiceIntegrationCommand extends command<UpdateServiceIntegrationCommandInput, UpdateServiceIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServiceIntegration",
  UpdateServiceIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceIntegrationRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceIntegrationCommandInput;
      output: UpdateServiceIntegrationCommandOutput;
    };
  };
}

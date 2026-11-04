// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeServiceIntegrationRequest, DescribeServiceIntegrationResponse } from "../models/models_0";
import { DescribeServiceIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeServiceIntegrationCommand}.
 */
export interface DescribeServiceIntegrationCommandInput extends DescribeServiceIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceIntegrationCommand}.
 */
export interface DescribeServiceIntegrationCommandOutput extends DescribeServiceIntegrationResponse, __MetadataBearer {}

/**
 * Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = {};
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceIntegrationResponse
 * //   ServiceIntegration: { // ServiceIntegrationConfig
 * //     OpsCenter: { // OpsCenterIntegration
 * //       OptInStatus: "ENABLED" || "DISABLED",
 * //     },
 * //     LogsAnomalyDetection: { // LogsAnomalyDetectionIntegration
 * //       OptInStatus: "ENABLED" || "DISABLED",
 * //     },
 * //     KMSServerSideEncryption: { // KMSServerSideEncryptionIntegration
 * //       KMSKeyId: "STRING_VALUE",
 * //       OptInStatus: "ENABLED" || "DISABLED",
 * //       Type: "CUSTOMER_MANAGED_KEY" || "AWS_OWNED_KMS_KEY",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeServiceIntegrationCommandInput - {@link DescribeServiceIntegrationCommandInput}
 * @returns {@link DescribeServiceIntegrationCommandOutput}
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource could not be found
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
export class DescribeServiceIntegrationCommand extends command<DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeServiceIntegration",
  DescribeServiceIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeServiceIntegrationResponse;
    };
    sdk: {
      input: DescribeServiceIntegrationCommandInput;
      output: DescribeServiceIntegrationCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePrivateConnectionInput, DescribePrivateConnectionOutput } from "../models/models_0";
import { DescribePrivateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePrivateConnectionCommand}.
 */
export interface DescribePrivateConnectionCommandInput extends DescribePrivateConnectionInput {}
/**
 * @public
 *
 * The output of {@link DescribePrivateConnectionCommand}.
 */
export interface DescribePrivateConnectionCommandOutput extends DescribePrivateConnectionOutput, __MetadataBearer {}

/**
 * Retrieves details of an existing Private Connection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DescribePrivateConnectionCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DescribePrivateConnectionCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DescribePrivateConnectionInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DescribePrivateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrivateConnectionOutput
 * //   name: "STRING_VALUE", // required
 * //   type: "SELF_MANAGED" || "SERVICE_MANAGED", // required
 * //   resourceGatewayId: "STRING_VALUE",
 * //   hostAddress: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   certificateExpiryTime: new Date("TIMESTAMP"),
 * //   dnsResolution: "PUBLIC" || "IN_VPC",
 * //   failureMessage: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePrivateConnectionCommandInput - {@link DescribePrivateConnectionCommandInput}
 * @returns {@link DescribePrivateConnectionCommandOutput}
 * @see {@link DescribePrivateConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribePrivateConnectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *
 * This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed the service quota limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class DescribePrivateConnectionCommand extends command<DescribePrivateConnectionCommandInput, DescribePrivateConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DescribePrivateConnection",
  DescribePrivateConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePrivateConnectionInput;
      output: DescribePrivateConnectionOutput;
    };
    sdk: {
      input: DescribePrivateConnectionCommandInput;
      output: DescribePrivateConnectionCommandOutput;
    };
  };
}

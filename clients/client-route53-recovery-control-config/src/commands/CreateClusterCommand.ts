// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { CreateCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * <p>Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateClusterCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateClusterCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // CreateClusterRequest
 *   ClientToken: "STRING_VALUE",
 *   ClusterName: "STRING_VALUE", // required
 *   Tags: { // __mapOf__stringMin0Max256PatternS
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NetworkType: "IPV4" || "DUALSTACK",
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
 * //   Cluster: { // Cluster
 * //     ClusterArn: "STRING_VALUE",
 * //     ClusterEndpoints: [ // __listOfClusterEndpoint
 * //       { // ClusterEndpoint
 * //         Endpoint: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE",
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //     Owner: "STRING_VALUE",
 * //     NetworkType: "IPV4" || "DUALSTACK",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>409 response - ConflictException. You might be using a predefined variable.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>402 response - You attempted to create more resources than the service allows based on service quotas.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>429 response - LimitExceededException or TooManyRequestsException.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 *
 * @public
 */
export class CreateClusterCommand extends $Command
  .classBuilder<
    CreateClusterCommandInput,
    CreateClusterCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "CreateCluster", {})
  .n("Route53RecoveryControlConfigClient", "CreateClusterCommand")
  .sc(CreateCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterRequest;
      output: CreateClusterResponse;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}

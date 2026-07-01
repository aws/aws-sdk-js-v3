// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import { ListClusters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersResponse, __MetadataBearer {}

/**
 * <p>Returns an array of all the clusters in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListClustersCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListClustersCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListClustersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersResponse
 * //   Clusters: [ // __listOfCluster
 * //     { // Cluster
 * //       ClusterArn: "STRING_VALUE",
 * //       ClusterEndpoints: [ // __listOfClusterEndpoint
 * //         { // ClusterEndpoint
 * //           Endpoint: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //       Owner: "STRING_VALUE",
 * //       NetworkType: "IPV4" || "DUALSTACK",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
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
export class ListClustersCommand extends command<ListClustersCommandInput, ListClustersCommandOutput>(
  _ep0,
  _mw0,
  "ListClusters",
  ListClusters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClustersRequest;
      output: ListClustersResponse;
    };
    sdk: {
      input: ListClustersCommandInput;
      output: ListClustersCommandOutput;
    };
  };
}

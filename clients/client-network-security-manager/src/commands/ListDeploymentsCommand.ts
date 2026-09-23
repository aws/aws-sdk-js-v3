// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeploymentsInput, ListDeploymentsOutput } from "../models/models_0";
import { ListDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandInput extends ListDeploymentsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandOutput extends ListDeploymentsOutput, __MetadataBearer {}

/**
 * <p>Lists the deployments in the account. You can filter the results by status and page through them using <code>maxResults</code> and <code>nextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListDeploymentsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListDeploymentsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListDeploymentsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "DRAFT" || "DISABLED",
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentsOutput
 * //   nextToken: "STRING_VALUE",
 * //   deployments: [ // DeploymentSummaryList // required
 * //     { // DeploymentSummary
 * //       deploymentId: "STRING_VALUE", // required
 * //       deploymentArn: "STRING_VALUE", // required
 * //       deploymentName: "STRING_VALUE",
 * //       status: "DRAFT" || "ACTIVE" || "DISABLED",
 * //       version: "STRING_VALUE",
 * //       hasPublishedVersion: true || false,
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDeploymentsCommandInput - {@link ListDeploymentsCommandInput}
 * @returns {@link ListDeploymentsCommandOutput}
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example List deployments
 * ```javascript
 * // Lists the published deployments in the account, one page at a time.
 * const input = {
 *   maxResults: 10,
 *   status: "ACTIVE"
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deployments: [
 *     {
 *       deploymentArn: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456",
 *       deploymentId: "def456",
 *       deploymentName: "prod-us-east-1-deployment",
 *       hasPublishedVersion: true,
 *       status: "ACTIVE",
 *       updatedAt: "2026-08-20T12:00:00Z",
 *       version: "2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDeploymentsCommand extends command<ListDeploymentsCommandInput, ListDeploymentsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeployments",
  ListDeployments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentsInput;
      output: ListDeploymentsOutput;
    };
    sdk: {
      input: ListDeploymentsCommandInput;
      output: ListDeploymentsCommandOutput;
    };
  };
}

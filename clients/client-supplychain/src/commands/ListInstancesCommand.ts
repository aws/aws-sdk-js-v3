// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInstancesRequest, ListInstancesResponse } from "../models/models_0";
import { ListInstances$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandInput extends ListInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandOutput extends ListInstancesResponse, __MetadataBearer {}

/**
 * <p>List all Amazon Web Services Supply Chain instances for a specific account. Enables you to programmatically list all Amazon Web Services Supply Chain instances based on their account ID, instance name, and state of the instance (active or delete).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, ListInstancesCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, ListInstancesCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // ListInstancesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   instanceNameFilter: [ // InstanceNameList
 *     "STRING_VALUE",
 *   ],
 *   instanceStateFilter: [ // InstanceStateList
 *     "Initializing" || "Active" || "CreateFailed" || "DeleteFailed" || "Deleting" || "Deleted",
 *   ],
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstancesResponse
 * //   instances: [ // InstanceList // required
 * //     { // Instance
 * //       instanceId: "STRING_VALUE", // required
 * //       awsAccountId: "STRING_VALUE", // required
 * //       state: "Initializing" || "Active" || "CreateFailed" || "DeleteFailed" || "Deleting" || "Deleted", // required
 * //       errorMessage: "STRING_VALUE",
 * //       webAppDnsDomain: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"),
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       instanceName: "STRING_VALUE",
 * //       instanceDescription: "STRING_VALUE",
 * //       kmsKeyArn: "STRING_VALUE",
 * //       versionNumber: Number("double"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstancesCommandInput - {@link ListInstancesCommandInput}
 * @returns {@link ListInstancesCommandOutput}
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example Successful ListInstance request with no input data
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instances: [
 *     {
 *       awsAccountId: "123456789012",
 *       createdTime: 172615383136,
 *       instanceDescription: "example instance description",
 *       instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *       instanceName: "example instance name",
 *       kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *       lastModifiedTime: 172615383136,
 *       state: "Active",
 *       versionNumber: 2.0
 *     },
 *     {
 *       awsAccountId: "123456789012",
 *       createdTime: 17261674383136,
 *       instanceDescription: "example instance description",
 *       instanceId: "3ad8116a-644d-4172-8dcb-20e51d314c14",
 *       kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *       lastModifiedTime: 17261674383136,
 *       state: "Initializing",
 *       versionNumber: 2.0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Successful ListInstance request with filters
 * ```javascript
 * //
 * const input = {
 *   instanceNameFilter: [
 *     "example instance name"
 *   ],
 *   instanceStateFilter: [
 *     "Active"
 *   ]
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instances: [
 *     {
 *       awsAccountId: "123456789012",
 *       createdTime: 172615383136,
 *       instanceDescription: "example instance description",
 *       instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *       instanceName: "example instance name",
 *       kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *       lastModifiedTime: 172615383136,
 *       state: "Active",
 *       versionNumber: 2.0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Successful ListInstance request with maxResult override
 * ```javascript
 * //
 * const input = {
 *   maxResults: 1
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instances: [
 *     {
 *       awsAccountId: "123456789012",
 *       createdTime: 172615383136,
 *       instanceDescription: "example instance description",
 *       instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *       instanceName: "example instance name",
 *       kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *       lastModifiedTime: 172615383136,
 *       state: "Active",
 *       versionNumber: 2.0
 *     }
 *   ],
 *   nextToken: "AAQA-EFRSURBSGhtcng0c0dxbENwUHdnckVIbkFYNU1QVjRTZWN2ak5iMFVicC8zemlHOVF3SEpjSC9WTWJVVXBMV2Z1N3ZvZlQ0WEFBQUFmakI4QmdrcWhraUc5dzBCQndhZ2J6QnRBZ0VBTUdnR0NTcUdTSWIzRFFFSEFUQWVCZ2xnaGtnQlpRTUVBUzR3RVFRTTJibW9LemgrSWZTY0RaZEdBZ0VRZ0R2dDhsQnVGbGJ0dnFTZityWmNSWEVPbG93emJoSjhxOGNMbGQ1UGMvY0VRbWlTR3pQUFd4N2RraXY5Y0ovcS9vSmFYZVBGdWVHaU0zWmd0dz09n-rC1ejA5--7ltJxpDT2xP_i8xGqDPMOZfjpp8q6l5NuP9_bnBURvwwYhdqDriMK5_f96LuPEnPbuML-ItfgEiCcUy0p2tApvpZkZqOG5fbqP-4C5aDYPTffHLyq-MMqvfrGVJzL1nvkpZcnTkVR9VJsu5b8I0qqDW0H8EMKGgTo78U9lr4sj3Usi9VMwZxgKCBmr03HhFLYXOW--XMbIx0CTZF0fYIcRxmA_sVS6J7gpaB9yMcnzs5VUKokoA5JTcAPY5d1Y1VyE8KKxv51cfPgXw8OYCDbFQncw8mZPmE-VqxjFbksmk_FmghpPn9j2Ppoe-zr0LQ%3D"
 * }
 * *\/
 * ```
 *
 * @example Successful ListInstance request with nextToken
 * ```javascript
 * //
 * const input = {
 *   maxResults: 1,
 *   nextToken: "AAQA-EFRSURBSGhtcng0c0dxbENwUHdnckVIbkFYNU1QVjRTZWN2ak5iMFVicC8zemlHOVF3SEpjSC9WTWJVVXBMV2Z1N3ZvZlQ0WEFBQUFmakI4QmdrcWhraUc5dzBCQndhZ2J6QnRBZ0VBTUdnR0NTcUdTSWIzRFFFSEFUQWVCZ2xnaGtnQlpRTUVBUzR3RVFRTTJibW9LemgrSWZTY0RaZEdBZ0VRZ0R2dDhsQnVGbGJ0dnFTZityWmNSWEVPbG93emJoSjhxOGNMbGQ1UGMvY0VRbWlTR3pQUFd4N2RraXY5Y0ovcS9vSmFYZVBGdWVHaU0zWmd0dz09n-rC1ejA5--7ltJxpDT2xP_i8xGqDPMOZfjpp8q6l5NuP9_bnBURvwwYhdqDriMK5_f96LuPEnPbuML-ItfgEiCcUy0p2tApvpZkZqOG5fbqP-4C5aDYPTffHLyq-MMqvfrGVJzL1nvkpZcnTkVR9VJsu5b8I0qqDW0H8EMKGgTo78U9lr4sj3Usi9VMwZxgKCBmr03HhFLYXOW--XMbIx0CTZF0fYIcRxmA_sVS6J7gpaB9yMcnzs5VUKokoA5JTcAPY5d1Y1VyE8KKxv51cfPgXw8OYCDbFQncw8mZPmE-VqxjFbksmk_FmghpPn9j2Ppoe-zr0LQ%3D"
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instances: [
 *     {
 *       awsAccountId: "123456789012",
 *       createdTime: 17261674383136,
 *       instanceDescription: "example instance description",
 *       instanceId: "3ad8116a-644d-4172-8dcb-20e51d314c14",
 *       kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *       lastModifiedTime: 17261674383136,
 *       state: "Initializing",
 *       versionNumber: 2.0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListInstancesCommand extends $Command
  .classBuilder<
    ListInstancesCommandInput,
    ListInstancesCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "ListInstances", {})
  .n("SupplyChainClient", "ListInstancesCommand")
  .sc(ListInstances$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstancesRequest;
      output: ListInstancesResponse;
    };
    sdk: {
      input: ListInstancesCommandInput;
      output: ListInstancesCommandOutput;
    };
  };
}

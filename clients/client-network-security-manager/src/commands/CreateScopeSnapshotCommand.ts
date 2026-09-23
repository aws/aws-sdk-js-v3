// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScopeSnapshotInput, CreateScopeSnapshotOutput } from "../models/models_0";
import { CreateScopeSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScopeSnapshotCommand}.
 */
export interface CreateScopeSnapshotCommandInput extends CreateScopeSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreateScopeSnapshotCommand}.
 */
export interface CreateScopeSnapshotCommandOutput extends CreateScopeSnapshotOutput, __MetadataBearer {}

/**
 * <p>Creates a snapshot of the current published version of the specified scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateScopeSnapshotCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateScopeSnapshotCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateScopeSnapshotInput
 *   scopeIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScopeSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateScopeSnapshotOutput
 * //   scopeId: "STRING_VALUE", // required
 * //   scopeArn: "STRING_VALUE", // required
 * //   scopeName: "STRING_VALUE", // required
 * //   scopeDescription: "STRING_VALUE",
 * //   scopeConfiguration: { // ScopeConfiguration
 * //     accountFilter: { // AccountFilter Union: only one key present
 * //       includeAll: {},
 * //       include: { // AccountSet
 * //         accountIds: [ // AccountList
 * //           "STRING_VALUE",
 * //         ],
 * //         organizationalUnits: [ // OrganizationalUnitList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       exclude: {
 * //         accountIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         organizationalUnits: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     resourceScopes: { // ResourceScopeMap // required
 * //       "<keys>": { // ResourceScope
 * //         includeAll: true || false,
 * //         include: { // ResourceSet
 * //           explicitArns: [ // ResourceArnList
 * //             "STRING_VALUE",
 * //           ],
 * //           expression: { // ResourceLogicalExpression Union: only one key present
 * //             criteria: { // ResourceCriteria Union: only one key present
 * //               tags: { // StringMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               albConfig: { // AlbConfiguration
 * //                 scheme: "internet-facing" || "internal",
 * //                 ipAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 * //               },
 * //             },
 * //             and: [ // ResourceLogicalExpressionList
 * //               {//  Union: only one key present
 * //                 criteria: {//  Union: only one key present
 * //                   tags: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   albConfig: {
 * //                     scheme: "internet-facing" || "internal",
 * //                     ipAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 * //                   },
 * //                 },
 * //                 and: [
 * //                   "<ResourceLogicalExpression>",
 * //                 ],
 * //                 or: [
 * //                   "<ResourceLogicalExpression>",
 * //                 ],
 * //                 not: "<ResourceLogicalExpression>",
 * //               },
 * //             ],
 * //             or: [
 * //               "<ResourceLogicalExpression>",
 * //             ],
 * //             not: "<ResourceLogicalExpression>",
 * //           },
 * //         },
 * //         exclude: {
 * //           explicitArns: [
 * //             "STRING_VALUE",
 * //           ],
 * //           expression: "<ResourceLogicalExpression>",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   version: "STRING_VALUE", // required
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateScopeSnapshotCommandInput - {@link CreateScopeSnapshotCommandInput}
 * @returns {@link CreateScopeSnapshotCommandOutput}
 * @see {@link CreateScopeSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateScopeSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the resource was modified concurrently, or it is in a state that does not allow the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
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
 * @example Create a scope snapshot
 * ```javascript
 * // Creates an immutable snapshot of the current published version of a scope. The snapshot is addressable by a version-qualified ARN.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440010",
 *   scopeIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123"
 * };
 * const command = new CreateScopeSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   isSnapshot: true,
 *   scopeArn: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123:2",
 *   scopeConfiguration: {
 *     accountFilter: {
 *       includeAll:       { /* empty *\/ }
 *     },
 *     resourceScopes:     { /* empty *\/ }
 *   },
 *   scopeId: "abc123",
 *   scopeName: "production-web-apps",
 *   status: "ACTIVE",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateScopeSnapshotCommand extends command<CreateScopeSnapshotCommandInput, CreateScopeSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateScopeSnapshot",
  CreateScopeSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScopeSnapshotInput;
      output: CreateScopeSnapshotOutput;
    };
    sdk: {
      input: CreateScopeSnapshotCommandInput;
      output: CreateScopeSnapshotCommandOutput;
    };
  };
}

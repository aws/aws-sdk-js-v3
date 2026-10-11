// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScopeInput, CreateScopeOutput } from "../models/models_0";
import { CreateScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScopeCommand}.
 */
export interface CreateScopeCommandInput extends CreateScopeInput {}
/**
 * @public
 *
 * The output of {@link CreateScopeCommand}.
 */
export interface CreateScopeCommandOutput extends CreateScopeOutput, __MetadataBearer {}

/**
 * <p>Creates a scope. A scope selects the accounts and resources that a deployment applies to. Use <code>isPublished</code> to create the scope in published (<code>ACTIVE</code>) or draft (<code>DRAFT</code>) state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateScopeCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateScopeCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateScopeInput
 *   clientToken: "STRING_VALUE",
 *   scopeName: "STRING_VALUE", // required
 *   scopeDescription: "STRING_VALUE",
 *   scopeConfiguration: { // ScopeConfiguration
 *     accountFilter: { // AccountFilter Union: only one key present
 *       includeAll: {},
 *       include: { // AccountSet
 *         accountIds: [ // AccountList
 *           "STRING_VALUE",
 *         ],
 *         organizationalUnits: [ // OrganizationalUnitList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       exclude: {
 *         accountIds: [
 *           "STRING_VALUE",
 *         ],
 *         organizationalUnits: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     resourceScopes: { // ResourceScopeMap // required
 *       "<keys>": { // ResourceScope
 *         includeAll: true || false,
 *         include: { // ResourceSet
 *           explicitArns: [ // ResourceArnList
 *             "STRING_VALUE",
 *           ],
 *           expression: { // ResourceLogicalExpression Union: only one key present
 *             criteria: { // ResourceCriteria Union: only one key present
 *               tags: { // StringMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               albConfig: { // AlbConfiguration
 *                 scheme: "internet-facing" || "internal",
 *                 ipAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 *               },
 *             },
 *             and: [ // ResourceLogicalExpressionList
 *               {//  Union: only one key present
 *                 criteria: {//  Union: only one key present
 *                   tags: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   albConfig: {
 *                     scheme: "internet-facing" || "internal",
 *                     ipAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 *                   },
 *                 },
 *                 and: [
 *                   "<ResourceLogicalExpression>",
 *                 ],
 *                 or: [
 *                   "<ResourceLogicalExpression>",
 *                 ],
 *                 not: "<ResourceLogicalExpression>",
 *               },
 *             ],
 *             or: [
 *               "<ResourceLogicalExpression>",
 *             ],
 *             not: "<ResourceLogicalExpression>",
 *           },
 *         },
 *         exclude: {
 *           explicitArns: [
 *             "STRING_VALUE",
 *           ],
 *           expression: "<ResourceLogicalExpression>",
 *         },
 *       },
 *     },
 *   },
 *   isPublished: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScopeCommand(input);
 * const response = await client.send(command);
 * // { // CreateScopeOutput
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
 * @param CreateScopeCommandInput - {@link CreateScopeCommandInput}
 * @returns {@link CreateScopeCommandOutput}
 * @see {@link CreateScopeCommandInput} for command's `input` shape.
 * @see {@link CreateScopeCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable. This is a retryable error.</p>
 *
 * @throws {@link TagPolicyViolationException} (client fault)
 *  <p>The request violates a tag policy that is in effect for the account or organization.</p>
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
 * @example Create a scope
 * ```javascript
 * // Creates a new scope in published (ACTIVE) state.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440001",
 *   isPublished: true,
 *   scopeConfiguration: {
 *     accountFilter: {
 *       includeAll:       { /* empty *\/ }
 *     },
 *     resourceScopes:     { /* empty *\/ }
 *   },
 *   scopeDescription: "Scope covering all production web application resources",
 *   scopeName: "production-web-apps"
 * };
 * const command = new CreateScopeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   scopeArn: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123",
 *   scopeConfiguration: {
 *     accountFilter: {
 *       includeAll:       { /* empty *\/ }
 *     },
 *     resourceScopes:     { /* empty *\/ }
 *   },
 *   scopeDescription: "Scope covering all production web application resources",
 *   scopeId: "abc123",
 *   scopeName: "production-web-apps",
 *   status: "ACTIVE",
 *   updateToken: "b0c4d1e2-3f4a-4b5c-8d6e-7f8a9b0c1d2e",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateScopeCommand extends command<CreateScopeCommandInput, CreateScopeCommandOutput>(
  _ep0,
  _mw0,
  "CreateScope",
  CreateScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScopeInput;
      output: CreateScopeOutput;
    };
    sdk: {
      input: CreateScopeCommandInput;
      output: CreateScopeCommandOutput;
    };
  };
}

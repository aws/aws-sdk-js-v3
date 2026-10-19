// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateScopeInput, UpdateScopeOutput } from "../models/models_0";
import { UpdateScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateScopeCommand}.
 */
export interface UpdateScopeCommandInput extends UpdateScopeInput {}
/**
 * @public
 *
 * The output of {@link UpdateScopeCommand}.
 */
export interface UpdateScopeCommandOutput extends UpdateScopeOutput, __MetadataBearer {}

/**
 * <p>Updates the specified scope. To prevent conflicting concurrent updates, provide the current <code>updateToken</code>. Use <code>isPublished</code> to publish the update or keep the scope as a draft.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, UpdateScopeCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, UpdateScopeCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // UpdateScopeInput
 *   scopeIdentifier: "STRING_VALUE", // required
 *   updateToken: "STRING_VALUE", // required
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
 *   isPublished: true || false, // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateScopeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScopeOutput
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
 * @param UpdateScopeCommandInput - {@link UpdateScopeCommandInput}
 * @returns {@link UpdateScopeCommandOutput}
 * @see {@link UpdateScopeCommandInput} for command's `input` shape.
 * @see {@link UpdateScopeCommandOutput} for command's `response` shape.
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
 * @example Update a scope and publish it
 * ```javascript
 * // Updates the scope's description and configuration and publishes the change. The updateToken from the most recent read is required for optimistic locking.
 * const input = {
 *   isPublished: true,
 *   scopeConfiguration: {
 *     accountFilter: {
 *       includeAll:       { /* empty *\/ }
 *     },
 *     resourceScopes:     { /* empty *\/ }
 *   },
 *   scopeDescription: "Scope covering all production web application resources in US East 1",
 *   scopeIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123",
 *   updateToken: "b0c4d1e2-3f4a-4b5c-8d6e-7f8a9b0c1d2e"
 * };
 * const command = new UpdateScopeCommand(input);
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
 *   scopeDescription: "Scope covering all production web application resources in US East 1",
 *   scopeId: "abc123",
 *   scopeName: "production-web-apps",
 *   status: "ACTIVE",
 *   updateToken: "c1d2e3f4-4a5b-4c6d-9e7f-8a9b0c1d2e3f",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateScopeCommand extends command<UpdateScopeCommandInput, UpdateScopeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateScope",
  UpdateScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScopeInput;
      output: UpdateScopeOutput;
    };
    sdk: {
      input: UpdateScopeCommandInput;
      output: UpdateScopeCommandOutput;
    };
  };
}

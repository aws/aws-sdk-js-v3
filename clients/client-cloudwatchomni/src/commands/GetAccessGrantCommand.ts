// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessGrantInput, GetAccessGrantOutput } from "../models/models_0";
import { GetAccessGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessGrantCommand}.
 */
export interface GetAccessGrantCommandInput extends GetAccessGrantInput {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantCommand}.
 */
export interface GetAccessGrantCommandOutput extends GetAccessGrantOutput, __MetadataBearer {}

/**
 * Retrieves the full detail of a single AccessGrant by ID.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetAccessGrantCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetAccessGrantCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetAccessGrantInput
 *   grantId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantOutput
 * //   accessGrant: { // AccessGrant
 * //     grantId: "STRING_VALUE", // required
 * //     grantArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     accountId: "STRING_VALUE", // required
 * //     domainId: "STRING_VALUE", // required
 * //     principal: { // AccessGrantPrincipal
 * //       principalType: "IDC_USER" || "IDC_GROUP" || "IAM_USER" || "IAM_ROLE" || "IAM_ROOT" || "ACCESS_PROFILE" || "ALERT" || "AGENT", // required
 * //       principalId: "STRING_VALUE",
 * //       principalAttributes: [ // AccessGrantPrincipalAttributeList
 * //         { // AccessGrantPrincipalAttribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     permission: "SPACE_ADMIN" || "READ" || "READ_WRITE_DELETE" || "CUSTOM", // required
 * //     grantType: "SERVICE_MANAGED" || "CUSTOMER_MANAGED", // required
 * //     createdBy: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     spaceId: "STRING_VALUE", // required
 * //     scopedActions: [ // ScopedActionsList
 * //       { // ScopedActions
 * //         actions: [ // ScopedActionNameList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         resources: [ // ResourceScopeList
 * //           { // ResourceScope
 * //             resourceType: "STRING_VALUE", // required
 * //             resourceArns: [ // ResourceArnList
 * //               "STRING_VALUE",
 * //             ],
 * //             tags: { // ResourceScopeTagMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             signalTypes: [ // SignalTypeList
 * //               "LOGS" || "TRACES",
 * //             ],
 * //             rowScopeGroups: [ // RowScopeGroupList
 * //               [ // RowScopeGroup
 * //                 { // RowScope
 * //                   field: "STRING_VALUE", // required
 * //                   operator: "IN", // required
 * //                   values: [ // RowScopeValueList // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //             ],
 * //           },
 * //         ],
 * //         contextConditions: { // ContextConditionsMap
 * //           "<keys>": [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessGrantCommandInput - {@link GetAccessGrantCommandInput}
 * @returns {@link GetAccessGrantCommandOutput}
 * @see {@link GetAccessGrantCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Get an access grant
 * ```javascript
 * // The following example retrieves the full detail of a single access grant by ID. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d"
 * };
 * const command = new GetAccessGrantCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accessGrant: {
 *     accountId: "123456789012",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     createdBy: "arn:aws:iam::123456789012:role/ObservabilityAdmin",
 *     domainId: "d-1a2b3c4d5e",
 *     grantArn: "arn:aws:cloudwatch:us-east-1:123456789012:access-grant/7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *     grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *     grantType: "CUSTOMER_MANAGED",
 *     name: "analyst-read-access",
 *     permission: "CUSTOM",
 *     principal: {
 *       principalId: "94b6c7d8-1a2b-4c3d-9e4f-5a6b7c8d9e0f",
 *       principalType: "IDC_USER"
 *     },
 *     scopedActions: [
 *       {
 *         actions: [
 *           "cloudwatch:GetOmniDashboard",
 *           "cloudwatch:UpdateOmniDashboard"
 *         ],
 *         resources: [
 *           {
 *             resourceArns: [
 *               "arn:aws:cloudwatch:us-east-1:123456789012:omni-dashboard/c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f"
 *             ],
 *             resourceType: "OmniDashboard"
 *           }
 *         ]
 *       }
 *     ],
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccessGrantCommand extends command<GetAccessGrantCommandInput, GetAccessGrantCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessGrant",
  GetAccessGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantInput;
      output: GetAccessGrantOutput;
    };
    sdk: {
      input: GetAccessGrantCommandInput;
      output: GetAccessGrantCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFindingV2Request, GetFindingV2Response } from "../models/models_0";
import { GetFindingV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFindingV2Command}.
 */
export interface GetFindingV2CommandInput extends GetFindingV2Request {}
/**
 * @public
 *
 * The output of {@link GetFindingV2Command}.
 */
export interface GetFindingV2CommandOutput extends GetFindingV2Response, __MetadataBearer {}

/**
 * Retrieves information about the specified finding. GetFinding and GetFindingV2 both use `access-analyzer:GetFinding` in the `Action` element of an IAM policy statement. You must have permission to perform the `access-analyzer:GetFinding` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingV2Command } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingV2Command } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingV2Request
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFindingV2Command(input);
 * const response = await client.send(command);
 * // { // GetFindingV2Response
 * //   analyzedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   error: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * //   resource: "STRING_VALUE",
 * //   resourceType: "STRING_VALUE", // required
 * //   resourceOwnerAccount: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   findingDetails: [ // FindingDetailsList // required
 * //     { // FindingDetails Union: only one key present
 * //       internalAccessDetails: { // InternalAccessDetails
 * //         action: [ // ActionList
 * //           "STRING_VALUE",
 * //         ],
 * //         condition: { // ConditionKeyMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         principal: { // PrincipalMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         principalOwnerAccount: "STRING_VALUE",
 * //         accessType: "STRING_VALUE",
 * //         principalType: "STRING_VALUE",
 * //         sources: [ // FindingSourceList
 * //           { // FindingSource
 * //             type: "STRING_VALUE", // required
 * //             detail: { // FindingSourceDetail
 * //               accessPointArn: "STRING_VALUE",
 * //               accessPointAccount: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         resourceControlPolicyRestriction: "STRING_VALUE",
 * //         serviceControlPolicyRestriction: "STRING_VALUE",
 * //       },
 * //       externalAccessDetails: { // ExternalAccessDetails
 * //         action: [
 * //           "STRING_VALUE",
 * //         ],
 * //         condition: { // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         isPublic: true || false,
 * //         principal: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         sources: [
 * //           {
 * //             type: "STRING_VALUE", // required
 * //             detail: {
 * //               accessPointArn: "STRING_VALUE",
 * //               accessPointAccount: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         resourceControlPolicyRestriction: "STRING_VALUE",
 * //       },
 * //       unusedPermissionDetails: { // UnusedPermissionDetails
 * //         actions: [ // UnusedActionList
 * //           { // UnusedAction
 * //             action: "STRING_VALUE", // required
 * //             lastAccessed: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         serviceNamespace: "STRING_VALUE", // required
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //       unusedIamUserAccessKeyDetails: { // UnusedIamUserAccessKeyDetails
 * //         accessKeyId: "STRING_VALUE", // required
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //       unusedIamRoleDetails: { // UnusedIamRoleDetails
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //       unusedIamUserPasswordDetails: { // UnusedIamUserPasswordDetails
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   findingType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingV2CommandInput - {@link GetFindingV2CommandInput}
 * @returns {@link GetFindingV2CommandOutput}
 * @see {@link GetFindingV2CommandInput} for command's `input` shape.
 * @see {@link GetFindingV2CommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
 *
 * @public
 */
export class GetFindingV2Command extends command<GetFindingV2CommandInput, GetFindingV2CommandOutput>(
  _ep0,
  _mw0,
  "GetFindingV2",
  GetFindingV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingV2Request;
      output: GetFindingV2Response;
    };
    sdk: {
      input: GetFindingV2CommandInput;
      output: GetFindingV2CommandOutput;
    };
  };
}

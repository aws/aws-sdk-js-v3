// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingV2Request, GetFindingV2Response } from "../models/models_0";
import { de_GetFindingV2Command, se_GetFindingV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves information about the specified finding. GetFinding and GetFindingV2 both use
 *             <code>access-analyzer:GetFinding</code> in the <code>Action</code> element of an IAM
 *          policy statement. You must have permission to perform the
 *             <code>access-analyzer:GetFinding</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingV2Command } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingV2Command } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
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
 * //       externalAccessDetails: { // ExternalAccessDetails
 * //         action: [ // ActionList
 * //           "STRING_VALUE",
 * //         ],
 * //         condition: { // ConditionKeyMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         isPublic: true || false,
 * //         principal: { // PrincipalMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class GetFindingV2Command extends $Command
  .classBuilder<
    GetFindingV2CommandInput,
    GetFindingV2CommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "GetFindingV2", {})
  .n("AccessAnalyzerClient", "GetFindingV2Command")
  .f(void 0, void 0)
  .ser(se_GetFindingV2Command)
  .de(de_GetFindingV2Command)
  .build() {
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

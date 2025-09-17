// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingRequest, GetFindingResponse } from "../models/models_0";
import { de_GetFindingCommand, se_GetFindingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingCommand}.
 */
export interface GetFindingCommandInput extends GetFindingRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingCommand}.
 */
export interface GetFindingCommandOutput extends GetFindingResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified finding. GetFinding and GetFindingV2 both use <code>access-analyzer:GetFinding</code> in the <code>Action</code> element of an IAM policy statement. You must have permission to perform the <code>access-analyzer:GetFinding</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetFindingCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingResponse
 * //   finding: { // Finding
 * //     id: "STRING_VALUE", // required
 * //     principal: { // PrincipalMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     action: [ // ActionList
 * //       "STRING_VALUE",
 * //     ],
 * //     resource: "STRING_VALUE",
 * //     isPublic: true || false,
 * //     resourceType: "STRING_VALUE", // required
 * //     condition: { // ConditionKeyMap // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     analyzedAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     resourceOwnerAccount: "STRING_VALUE", // required
 * //     error: "STRING_VALUE",
 * //     sources: [ // FindingSourceList
 * //       { // FindingSource
 * //         type: "STRING_VALUE", // required
 * //         detail: { // FindingSourceDetail
 * //           accessPointArn: "STRING_VALUE",
 * //           accessPointAccount: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     resourceControlPolicyRestriction: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingCommandInput - {@link GetFindingCommandInput}
 * @returns {@link GetFindingCommandOutput}
 * @see {@link GetFindingCommandInput} for command's `input` shape.
 * @see {@link GetFindingCommandOutput} for command's `response` shape.
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
export class GetFindingCommand extends $Command
  .classBuilder<
    GetFindingCommandInput,
    GetFindingCommandOutput,
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
  .s("AccessAnalyzer", "GetFinding", {})
  .n("AccessAnalyzerClient", "GetFindingCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingCommand)
  .de(de_GetFindingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingRequest;
      output: GetFindingResponse;
    };
    sdk: {
      input: GetFindingCommandInput;
      output: GetFindingCommandOutput;
    };
  };
}

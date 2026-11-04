// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFindingRequest, GetFindingResponse } from "../models/models_0";
import { GetFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about the specified finding. GetFinding and GetFindingV2 both use `access-analyzer:GetFinding` in the `Action` element of an IAM policy statement. You must have permission to perform the `access-analyzer:GetFinding` action.
 *
 * > **Note:** GetFinding is supported only for external access analyzers. You must use GetFindingV2 for internal and unused access analyzers.
 *
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
export class GetFindingCommand extends command<GetFindingCommandInput, GetFindingCommandOutput>(
  _ep0,
  _mw0,
  "GetFinding",
  GetFinding$
) {
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

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRLSPolicyRequest, GetRLSPolicyResponse } from "../models/models_0";
import { GetRLSPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRLSPolicyCommand}.
 */
export interface GetRLSPolicyCommandInput extends GetRLSPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRLSPolicyCommand}.
 */
export interface GetRLSPolicyCommandOutput extends GetRLSPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the definition of a row-level security policy, including its attachment columns and filter expression.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetRLSPolicyCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetRLSPolicyCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetRLSPolicyRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetRLSPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRLSPolicyResponse
 * //   RLSPolicy: { // RLSPolicy
 * //     CatalogId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     AttachmentColumns: [ // ColumnList
 * //       { // Column
 * //         Name: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FilterExpression: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRLSPolicyCommandInput - {@link GetRLSPolicyCommandInput}
 * @returns {@link GetRLSPolicyCommandOutput}
 * @see {@link GetRLSPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRLSPolicyCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetRLSPolicyCommand extends command<GetRLSPolicyCommandInput, GetRLSPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetRLSPolicy",
  GetRLSPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRLSPolicyRequest;
      output: GetRLSPolicyResponse;
    };
    sdk: {
      input: GetRLSPolicyCommandInput;
      output: GetRLSPolicyCommandOutput;
    };
  };
}

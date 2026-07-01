// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetMemberAccountDetailsRequest, BatchGetMemberAccountDetailsResponse } from "../models/models_0";
import { BatchGetMemberAccountDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetMemberAccountDetailsCommand}.
 */
export interface BatchGetMemberAccountDetailsCommandInput extends BatchGetMemberAccountDetailsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMemberAccountDetailsCommand}.
 */
export interface BatchGetMemberAccountDetailsCommandOutput extends BatchGetMemberAccountDetailsResponse, __MetadataBearer {}

/**
 * <p>Provides information on whether the supplied account IDs are associated with a membership.</p> <note> <p> AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be <code>123123123</code> which is nine digits, and with zero-prepend would be <code>000123123123</code>. Not zero-prepending to 12 digits could result in errors. </p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, BatchGetMemberAccountDetailsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, BatchGetMemberAccountDetailsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // BatchGetMemberAccountDetailsRequest
 *   membershipId: "STRING_VALUE", // required
 *   accountIds: [ // AWSAccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetMemberAccountDetailsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMemberAccountDetailsResponse
 * //   items: [ // GetMembershipAccountDetailItems
 * //     { // GetMembershipAccountDetailItem
 * //       accountId: "STRING_VALUE",
 * //       relationshipStatus: "Associated" || "Disassociated" || "Unassociated",
 * //       relationshipType: "Organization" || "Unrelated",
 * //     },
 * //   ],
 * //   errors: [ // GetMembershipAccountDetailErrors
 * //     { // GetMembershipAccountDetailError
 * //       accountId: "STRING_VALUE", // required
 * //       error: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMemberAccountDetailsCommandInput - {@link BatchGetMemberAccountDetailsCommandInput}
 * @returns {@link BatchGetMemberAccountDetailsCommandOutput}
 * @see {@link BatchGetMemberAccountDetailsCommandInput} for command's `input` shape.
 * @see {@link BatchGetMemberAccountDetailsCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Invoke BatchGetMemberAccountDetails
 * ```javascript
 * //
 * const input = {
 *   accountIds: [
 *     "123412341234"
 *   ],
 *   membershipId: "m-abcd1234efgh"
 * };
 * const command = new BatchGetMemberAccountDetailsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       accountId: "123412341234",
 *       relationshipStatus: "Associated",
 *       relationshipType: "Organization"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetMemberAccountDetailsCommand extends command<BatchGetMemberAccountDetailsCommandInput, BatchGetMemberAccountDetailsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetMemberAccountDetails",
  BatchGetMemberAccountDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetMemberAccountDetailsRequest;
      output: BatchGetMemberAccountDetailsResponse;
    };
    sdk: {
      input: BatchGetMemberAccountDetailsCommandInput;
      output: BatchGetMemberAccountDetailsCommandOutput;
    };
  };
}

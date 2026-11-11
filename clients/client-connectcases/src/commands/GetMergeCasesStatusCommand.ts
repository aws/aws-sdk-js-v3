// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMergeCasesStatusRequest, GetMergeCasesStatusResponse } from "../models/models_0";
import { GetMergeCasesStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMergeCasesStatusCommand}.
 */
export interface GetMergeCasesStatusCommandInput extends GetMergeCasesStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetMergeCasesStatusCommand}.
 */
export interface GetMergeCasesStatusCommandOutput extends GetMergeCasesStatusResponse, __MetadataBearer {}

/**
 * <p>Returns the merge status of a case. Use this operation to track a merge that you started with <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_StartMergeCases.html">StartMergeCases</a>, or to check whether a case is part of a merge before you modify it.</p> <p>The operation returns the following, depending on the case:</p> <ul> <li> <p>For the primary case or the secondary case of a merge that is running, it returns <code>IN_PROGRESS</code>.</p> </li> <li> <p>For a case that was merged into another case as the secondary case, it returns <code>COMPLETED</code>.</p> </li> <li> <p>For any other case, it returns a <code>ResourceNotFoundException</code>. This includes the primary case after its merge finishes.</p> </li> </ul> <p> <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Connect Customer endpoints and quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetMergeCasesStatusCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetMergeCasesStatusCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // GetMergeCasesStatusRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new GetMergeCasesStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetMergeCasesStatusResponse
 * //   status: "STRING_VALUE", // required
 * //   primaryCaseId: "STRING_VALUE",
 * //   secondaryCaseIds: [ // CaseIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMergeCasesStatusCommandInput - {@link GetMergeCasesStatusCommandInput}
 * @returns {@link GetMergeCasesStatusCommandOutput}
 * @see {@link GetMergeCasesStatusCommandInput} for command's `input` shape.
 * @see {@link GetMergeCasesStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class GetMergeCasesStatusCommand extends command<GetMergeCasesStatusCommandInput, GetMergeCasesStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetMergeCasesStatus",
  GetMergeCasesStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMergeCasesStatusRequest;
      output: GetMergeCasesStatusResponse;
    };
    sdk: {
      input: GetMergeCasesStatusCommandInput;
      output: GetMergeCasesStatusCommandOutput;
    };
  };
}

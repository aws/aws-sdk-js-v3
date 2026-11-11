// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMergeCasesRequest, StartMergeCasesResponse } from "../models/models_0";
import { StartMergeCases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMergeCasesCommand}.
 */
export interface StartMergeCasesCommandInput extends StartMergeCasesRequest {}
/**
 * @public
 *
 * The output of {@link StartMergeCasesCommand}.
 */
export interface StartMergeCasesCommandOutput extends StartMergeCasesResponse, __MetadataBearer {}

/**
 * <p>Merges a secondary case into a primary case. The primary case, which you specify in the request URI, remains active. Both cases must belong to the same domain.</p> <p>The merge runs asynchronously. To track its progress, call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_GetMergeCasesStatus.html">GetMergeCasesStatus</a>. When the merge finishes, the selected field values and related items from the secondary case are on the primary case, the two cases are linked, and the secondary case is closed. Both cases record the merge in their audit history. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_GetCaseAuditEvents.html">GetCaseAuditEvents</a>.</p> <p> <b>Important things to know</b> </p> <ul> <li> <p>Both cases must have the same customer, or at least one of them must have no customer.</p> </li> <li> <p>While the merge runs, you can't modify the secondary case or its related items, and you can't delete the primary case. These requests return a <code>ConflictException</code>.</p> </li> <li> <p>After the merge, the secondary case can be reopened, updated, and deleted, but it can't be merged again.</p> </li> </ul> <p>The request fails with a <code>ValidationException</code>, and no merge starts, if:</p> <ul> <li> <p>The primary case and the secondary case are the same case.</p> </li> <li> <p>Either case is closed.</p> </li> <li> <p>Both cases have a customer, and the customers are different.</p> </li> <li> <p> <code>fieldsConfiguration</code> selects a field that can't be merged, or a field that the secondary case doesn't have.</p> </li> <li> <p>After the merge, the primary case would have more than 500 field values, or would exceed the maximum case size.</p> </li> </ul> <p>The request fails with a <code>ServiceQuotaExceededException</code> if, after the merge, either case would exceed the quota for related items per case. For the primary case, the count is its existing related items, plus the related items moved from the secondary case, plus the new case link. See <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#cases-quotas">Connect Customer Cases quotas</a>.</p> <p>The request fails with a <code>ConflictException</code> if either case is already part of a merge that is running, or was previously merged into another case as the secondary case.</p> <p> <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Connect Customer endpoints and quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, StartMergeCasesCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, StartMergeCasesCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // StartMergeCasesRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   secondaryCaseIds: [ // CaseIdList // required
 *     "STRING_VALUE",
 *   ],
 *   fieldsConfiguration: [ // FieldsConfigurationList
 *     { // FieldsConfiguration
 *       fieldIds: [ // FieldIdentifierList // required
 *         { // FieldIdentifier
 *           id: "STRING_VALUE", // required
 *         },
 *       ],
 *       sourceCaseId: "STRING_VALUE", // required
 *     },
 *   ],
 *   relatedItemsConfiguration: { // RelatedItemsConfiguration
 *     comment: true || false,
 *     connectCase: true || false,
 *     contact: true || false,
 *     custom: true || false,
 *   },
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 * };
 * const command = new StartMergeCasesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMergeCasesCommandInput - {@link StartMergeCasesCommandInput}
 * @returns {@link StartMergeCasesCommandOutput}
 * @see {@link StartMergeCasesCommandInput} for command's `input` shape.
 * @see {@link StartMergeCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Connect Customer Service Quotas</a> in the <i>Connect Customer Administrator Guide</i>.</p>
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
export class StartMergeCasesCommand extends command<StartMergeCasesCommandInput, StartMergeCasesCommandOutput>(
  _ep0,
  _mw0,
  "StartMergeCases",
  StartMergeCases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMergeCasesRequest;
      output: {};
    };
    sdk: {
      input: StartMergeCasesCommandInput;
      output: StartMergeCasesCommandOutput;
    };
  };
}

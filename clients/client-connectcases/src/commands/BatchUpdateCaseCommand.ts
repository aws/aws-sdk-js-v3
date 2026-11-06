// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateCaseRequest, BatchUpdateCaseResponse } from "../models/models_0";
import { BatchUpdateCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateCaseCommand}.
 */
export interface BatchUpdateCaseCommandInput extends BatchUpdateCaseRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateCaseCommand}.
 */
export interface BatchUpdateCaseCommandOutput extends BatchUpdateCaseResponse, __MetadataBearer {}

/**
 * <p>Updates fields on multiple cases in a single request. All cases must belong to the same domain. Set the title, status, and customer ID through the top-level <code>title</code>, <code>status</code>, and <code>customerId</code> parameters, and set other fields through the <code>fields</code> array.</p> <p>Each case is processed independently. If some cases fail, the remaining cases are still updated. To determine whether individual cases failed, inspect the <code>failedCases</code> array in the response.</p> <p>The entire request fails, and no cases are updated, in the following cases:</p> <ul> <li> <p>The specified domain doesn't exist.</p> </li> <li> <p>A reference ID doesn't match any case in the domain.</p> </li> <li> <p>The request contains duplicate case IDs.</p> </li> <li> <p>The request doesn't specify any update. Provide at least one entry in <code>fields</code>, or a <code>title</code>, <code>status</code>, or <code>customerId</code>.</p> </li> <li> <p>A field identifier in <code>fields</code> doesn't resolve to a field in the domain, for example, an unknown field name.</p> </li> <li> <p>A field name contains a pipe (<code>|</code>) or comma (<code>,</code>) character.</p> </li> <li> <p> <code>fields</code> includes <code>title</code>, <code>status</code>, or <code>customerId</code>.</p> </li> </ul> <note> <p>This operation uses the same IAM action as <a href="https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateCase.html">UpdateCase</a> (<code>cases:UpdateCase</code>). You can use the <code>cases:IsBatchAction</code> condition key in IAM policies to allow or deny batch operations independently from single-case operations.</p> </note> <note> <p>If you provide a value for <code>performedBy.userArn</code>, you must also have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html">DescribeUser</a> permission on the ARN of the user that you provide.</p> </note> <p> <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Connect Customer endpoints and quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchUpdateCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchUpdateCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchUpdateCaseRequest
 *   domainId: "STRING_VALUE", // required
 *   cases: [ // BatchUpdateCaseIdentifierList // required
 *     { // BatchUpdateCaseIdentifier
 *       caseIdentifier: { // CaseIdentifierUnion Union: only one key present
 *         caseId: "STRING_VALUE",
 *         referenceId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   fields: [ // FieldValueInputList // required
 *     { // FieldValueInput
 *       fieldIdentifier: { // FieldIdentifierUnion Union: only one key present
 *         id: "STRING_VALUE",
 *         name: "STRING_VALUE",
 *       },
 *       value: { // FieldValueUnion Union: only one key present
 *         stringValue: "STRING_VALUE",
 *         doubleValue: Number("double"),
 *         booleanValue: true || false,
 *         emptyValue: {},
 *         userArnValue: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 *   title: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   customerId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchUpdateCaseCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateCaseResponse
 * //   successfulCases: [ // BatchUpdateCaseSuccessEntryList // required
 * //     { // BatchUpdateCaseSuccessEntry
 * //       caseIdentifier: { // CaseIdentifier
 * //         caseId: "STRING_VALUE",
 * //         referenceNumber: "STRING_VALUE",
 * //         referenceId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedCases: [ // BatchUpdateCaseErrorEntryList // required
 * //     { // BatchUpdateCaseErrorEntry
 * //       caseIdentifier: {
 * //         caseId: "STRING_VALUE",
 * //         referenceNumber: "STRING_VALUE",
 * //         referenceId: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateCaseCommandInput - {@link BatchUpdateCaseCommandInput}
 * @returns {@link BatchUpdateCaseCommandOutput}
 * @see {@link BatchUpdateCaseCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateCaseCommandOutput} for command's `response` shape.
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
export class BatchUpdateCaseCommand extends command<BatchUpdateCaseCommandInput, BatchUpdateCaseCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateCase",
  BatchUpdateCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateCaseRequest;
      output: BatchUpdateCaseResponse;
    };
    sdk: {
      input: BatchUpdateCaseCommandInput;
      output: BatchUpdateCaseCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateFindingsV2Request, BatchUpdateFindingsV2Response } from "../models/models_2";
import { BatchUpdateFindingsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateFindingsV2Command}.
 */
export interface BatchUpdateFindingsV2CommandInput extends BatchUpdateFindingsV2Request {}
/**
 * @public
 *
 * The output of {@link BatchUpdateFindingsV2Command}.
 */
export interface BatchUpdateFindingsV2CommandOutput extends BatchUpdateFindingsV2Response, __MetadataBearer {}

/**
 * Updates information about a customer's investigation into a finding. Delegated administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their own account.
 *
 * `BatchUpdateFindings` and `BatchUpdateFindingsV2` both use `securityhub:BatchUpdateFindings` in the `Action` element of an IAM policy statement. You must have permission to perform the `securityhub:BatchUpdateFindings` action. You can configure IAM policies to restrict access to specific finding fields or field values by using the `securityhub:OCSFSyntaxPath/<fieldName>` condition key, where `<fieldName>` is one of the following supported fields: `SeverityId`, `StatusId`, or `Comment`.
 *
 * To prevent a user from updating a specific field, use a `Null` condition with `securityhub:OCSFSyntaxPath/<fieldName>` set to `"false"`. To prevent a user from setting a field to a specific value, use a `StringEquals` condition with `securityhub:OCSFSyntaxPath/<fieldName>` set to the disallowed value or list of values.
 *
 * Updates from `BatchUpdateFindingsV2` don't affect the value of `finding_info.modified_time`, `finding_info.modified_time_dt`, `time`, or `time_dt` for a finding.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateFindingsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateFindingsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // BatchUpdateFindingsV2Request
 *   MetadataUids: [ // MetadataUidList
 *     "STRING_VALUE",
 *   ],
 *   FindingIdentifiers: [ // OcsfFindingIdentifierList
 *     { // OcsfFindingIdentifier
 *       CloudAccountUid: "STRING_VALUE", // required
 *       FindingInfoUid: "STRING_VALUE", // required
 *       MetadataProductUid: "STRING_VALUE", // required
 *     },
 *   ],
 *   Comment: "STRING_VALUE",
 *   SeverityId: Number("int"),
 *   StatusId: Number("int"),
 * };
 * const command = new BatchUpdateFindingsV2Command(input);
 * const response = await client.send(command);
 * // { // BatchUpdateFindingsV2Response
 * //   ProcessedFindings: [ // BatchUpdateFindingsV2ProcessedFindingsList // required
 * //     { // BatchUpdateFindingsV2ProcessedFinding
 * //       FindingIdentifier: { // OcsfFindingIdentifier
 * //         CloudAccountUid: "STRING_VALUE", // required
 * //         FindingInfoUid: "STRING_VALUE", // required
 * //         MetadataProductUid: "STRING_VALUE", // required
 * //       },
 * //       MetadataUid: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedFindings: [ // BatchUpdateFindingsV2UnprocessedFindingsList // required
 * //     { // BatchUpdateFindingsV2UnprocessedFinding
 * //       FindingIdentifier: {
 * //         CloudAccountUid: "STRING_VALUE", // required
 * //         FindingInfoUid: "STRING_VALUE", // required
 * //         MetadataProductUid: "STRING_VALUE", // required
 * //       },
 * //       MetadataUid: "STRING_VALUE",
 * //       ErrorCode: "ResourceNotFoundException" || "ValidationException" || "InternalServerException" || "ConflictException",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateFindingsV2CommandInput - {@link BatchUpdateFindingsV2CommandInput}
 * @returns {@link BatchUpdateFindingsV2CommandOutput}
 * @see {@link BatchUpdateFindingsV2CommandInput} for command's `input` shape.
 * @see {@link BatchUpdateFindingsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request causes conflict with the current state of the service resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class BatchUpdateFindingsV2Command extends command<BatchUpdateFindingsV2CommandInput, BatchUpdateFindingsV2CommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateFindingsV2",
  BatchUpdateFindingsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateFindingsV2Request;
      output: BatchUpdateFindingsV2Response;
    };
    sdk: {
      input: BatchUpdateFindingsV2CommandInput;
      output: BatchUpdateFindingsV2CommandOutput;
    };
  };
}

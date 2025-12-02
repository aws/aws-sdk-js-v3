// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchUpdateFindingsV2Request, BatchUpdateFindingsV2Response } from "../models/models_2";
import { BatchUpdateFindingsV2 } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Used by customers to update information about their investigation into a finding.
 *          Requested by delegated administrator accounts or member accounts.
 *          Delegated administrator accounts can update findings for their account and their member accounts.
 *          Member accounts can update findings for their account. <code>BatchUpdateFindings</code> and <code>BatchUpdateFindingV2</code> both use <code>securityhub:BatchUpdateFindings</code> in the <code>Action</code> element of an IAM policy statement.
 *          You must have permission to perform the <code>securityhub:BatchUpdateFindings</code> action.
 *          Updates from <code>BatchUpdateFindingsV2</code> don't affect the value of f<code>inding_info.modified_time</code>, <code>finding_info.modified_time_dt</code>, <code>time</code>, <code>time_dt for a finding</code>.</p>
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
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class BatchUpdateFindingsV2Command extends $Command
  .classBuilder<
    BatchUpdateFindingsV2CommandInput,
    BatchUpdateFindingsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "BatchUpdateFindingsV2", {})
  .n("SecurityHubClient", "BatchUpdateFindingsV2Command")
  .sc(BatchUpdateFindingsV2)
  .build() {
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

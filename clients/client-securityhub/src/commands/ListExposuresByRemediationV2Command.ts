// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExposuresByRemediationV2Request, ListExposuresByRemediationV2Response } from "../models/models_3";
import { ListExposuresByRemediationV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExposuresByRemediationV2Command}.
 */
export interface ListExposuresByRemediationV2CommandInput extends ListExposuresByRemediationV2Request {}
/**
 * @public
 *
 * The output of {@link ListExposuresByRemediationV2Command}.
 */
export interface ListExposuresByRemediationV2CommandOutput extends ListExposuresByRemediationV2Response, __MetadataBearer {}

/**
 * <p>Retrieves the exposure findings tied to a specific remediation target. Results are sorted by
 *          previous severity, highest first, and are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListExposuresByRemediationV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListExposuresByRemediationV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListExposuresByRemediationV2Request
 *   TargetUid: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExposuresByRemediationV2Command(input);
 * const response = await client.send(command);
 * // { // ListExposuresByRemediationV2Response
 * //   Items: [ // ExposureFindingItemsList // required
 * //     { // ExposureFinding
 * //       MetadataUid: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       PreviousSeverity: "Informational" || "Low" || "Medium" || "High" || "Critical", // required
 * //       ProjectedSeverity: "Informational" || "Low" || "Medium" || "High" || "Critical", // required
 * //       Impact: "Reduces" || "Resolves" || "Unchanged", // required
 * //     },
 * //   ],
 * //   TargetUid: "STRING_VALUE", // required
 * //   Resource: { // RemediationResource
 * //     AccountId: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE", // required
 * //     ResourceOwnerAccountId: "STRING_VALUE",
 * //     ResourceOwnerOrgId: "STRING_VALUE",
 * //     Type: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     Id: "STRING_VALUE", // required
 * //     ResourceGuid: "STRING_VALUE",
 * //     ResourceRegion: "STRING_VALUE", // required
 * //     CloudProvider: "Azure" || "AWS", // required
 * //   },
 * //   TotalCount: Number("int"), // required
 * //   Trait: { // RemediationTrait
 * //     Type: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE", // required
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExposuresByRemediationV2CommandInput - {@link ListExposuresByRemediationV2CommandInput}
 * @returns {@link ListExposuresByRemediationV2CommandOutput}
 * @see {@link ListExposuresByRemediationV2CommandInput} for command's `input` shape.
 * @see {@link ListExposuresByRemediationV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
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
export class ListExposuresByRemediationV2Command extends command<ListExposuresByRemediationV2CommandInput, ListExposuresByRemediationV2CommandOutput>(
  _ep0,
  _mw0,
  "ListExposuresByRemediationV2",
  ListExposuresByRemediationV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExposuresByRemediationV2Request;
      output: ListExposuresByRemediationV2Response;
    };
    sdk: {
      input: ListExposuresByRemediationV2CommandInput;
      output: ListExposuresByRemediationV2CommandOutput;
    };
  };
}

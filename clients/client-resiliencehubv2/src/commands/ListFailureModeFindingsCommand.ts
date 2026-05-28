// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFailureModeFindingsRequest, ListFailureModeFindingsResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { ListFailureModeFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFailureModeFindingsCommand}.
 */
export interface ListFailureModeFindingsCommandInput extends ListFailureModeFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListFailureModeFindingsCommand}.
 */
export interface ListFailureModeFindingsCommandOutput extends ListFailureModeFindingsResponse, __MetadataBearer {}

/**
 * <p>List findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListFailureModeFindingsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListFailureModeFindingsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListFailureModeFindingsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   severity: "LOW" || "MEDIUM" || "HIGH",
 *   failureCategory: "SHARED_FATE" || "EXCESSIVE_LOAD" || "EXCESSIVE_LATENCY" || "MISCONFIGURATION_AND_BUGS" || "SINGLE_POINT_OF_FAILURE",
 *   status: "OPEN" || "RESOLVED" || "IRRELEVANT",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFailureModeFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFailureModeFindingsResponse
 * //   findingsSummary: [ // FindingsList // required
 * //     { // FindingSummary
 * //       serviceArn: "STRING_VALUE",
 * //       findingId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       failureCategory: "SHARED_FATE" || "EXCESSIVE_LOAD" || "EXCESSIVE_LATENCY" || "MISCONFIGURATION_AND_BUGS" || "SINGLE_POINT_OF_FAILURE",
 * //       severity: "LOW" || "MEDIUM" || "HIGH",
 * //       status: "OPEN" || "RESOLVED" || "IRRELEVANT",
 * //       policyComponent: "AVAILABILITY_SLO" || "MULTI_AZ_DISASTER_RECOVERY" || "MULTI_REGION_DISASTER_RECOVERY" || "DATA_RECOVERY",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFailureModeFindingsCommandInput - {@link ListFailureModeFindingsCommandInput}
 * @returns {@link ListFailureModeFindingsCommandOutput}
 * @see {@link ListFailureModeFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFailureModeFindingsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListFailureModeFindingsCommand extends $Command
  .classBuilder<
    ListFailureModeFindingsCommandInput,
    ListFailureModeFindingsCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "ListFailureModeFindings", {})
  .n("Resiliencehubv2Client", "ListFailureModeFindingsCommand")
  .sc(ListFailureModeFindings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFailureModeFindingsRequest;
      output: ListFailureModeFindingsResponse;
    };
    sdk: {
      input: ListFailureModeFindingsCommandInput;
      output: ListFailureModeFindingsCommandOutput;
    };
  };
}

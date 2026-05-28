// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReportsRequest, ListReportsResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { ListReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportsCommand}.
 */
export interface ListReportsCommandInput extends ListReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListReportsCommand}.
 */
export interface ListReportsCommandOutput extends ListReportsResponse, __MetadataBearer {}

/**
 * <p>List reports for a service, or all reports owned by the account if serviceArn is not provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListReportsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListReportsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListReportsRequest
 *   serviceArn: "STRING_VALUE",
 *   reportType: "FAILURE_MODE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportsResponse
 * //   reportGenerationResults: [ // ReportGenerationResultList // required
 * //     { // ReportGenerationResult
 * //       reportType: "FAILURE_MODE", // required
 * //       status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //       serviceArn: "STRING_VALUE",
 * //       assessmentId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       reportOutput: { // ReportOutput Union: only one key present
 * //         s3ReportOutput: { // S3ReportOutput
 * //           s3ObjectKey: "STRING_VALUE", // required
 * //         },
 * //         failedReportOutput: { // FailedReportOutput
 * //           errorCode: "INSUFFICIENT_PERMISSIONS" || "CONFIGURATION_ERROR" || "INTERNAL_ERROR", // required
 * //           errorMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportsCommandInput - {@link ListReportsCommandInput}
 * @returns {@link ListReportsCommandOutput}
 * @see {@link ListReportsCommandInput} for command's `input` shape.
 * @see {@link ListReportsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests — rate limit exceeded.</p>
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
export class ListReportsCommand extends $Command
  .classBuilder<
    ListReportsCommandInput,
    ListReportsCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "ListReports", {})
  .n("Resiliencehubv2Client", "ListReportsCommand")
  .sc(ListReports$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportsRequest;
      output: ListReportsResponse;
    };
    sdk: {
      input: ListReportsCommandInput;
      output: ListReportsCommandOutput;
    };
  };
}

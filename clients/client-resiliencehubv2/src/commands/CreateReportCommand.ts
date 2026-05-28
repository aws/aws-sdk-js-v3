// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateReportRequest, CreateReportResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { CreateReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReportCommand}.
 */
export interface CreateReportCommandInput extends CreateReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateReportCommand}.
 */
export interface CreateReportCommandOutput extends CreateReportResponse, __MetadataBearer {}

/**
 * <p>On-demand report creation. Idempotent — duplicate requests with same clientToken return existing result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateReportCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateReportCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateReportRequest
 *   serviceArn: "STRING_VALUE", // required
 *   reportType: "FAILURE_MODE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateReportResponse
 * //   reportGenerationResult: { // ReportGenerationResult
 * //     reportType: "FAILURE_MODE", // required
 * //     status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //     serviceArn: "STRING_VALUE",
 * //     assessmentId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     reportOutput: { // ReportOutput Union: only one key present
 * //       s3ReportOutput: { // S3ReportOutput
 * //         s3ObjectKey: "STRING_VALUE", // required
 * //       },
 * //       failedReportOutput: { // FailedReportOutput
 * //         errorCode: "INSUFFICIENT_PERMISSIONS" || "CONFIGURATION_ERROR" || "INTERNAL_ERROR", // required
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReportCommandInput - {@link CreateReportCommandInput}
 * @returns {@link CreateReportCommandOutput}
 * @see {@link CreateReportCommandInput} for command's `input` shape.
 * @see {@link CreateReportCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
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
export class CreateReportCommand extends $Command
  .classBuilder<
    CreateReportCommandInput,
    CreateReportCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "CreateReport", {})
  .n("Resiliencehubv2Client", "CreateReportCommand")
  .sc(CreateReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReportRequest;
      output: CreateReportResponse;
    };
    sdk: {
      input: CreateReportCommandInput;
      output: CreateReportCommandOutput;
    };
  };
}

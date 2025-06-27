// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetCisScanReportRequest, GetCisScanReportResponse } from "../models/models_1";
import { de_GetCisScanReportCommand, se_GetCisScanReportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCisScanReportCommand}.
 */
export interface GetCisScanReportCommandInput extends GetCisScanReportRequest {}
/**
 * @public
 *
 * The output of {@link GetCisScanReportCommand}.
 */
export interface GetCisScanReportCommandOutput extends GetCisScanReportResponse, __MetadataBearer {}

/**
 * <p>Retrieves a CIS scan report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetCisScanReportCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetCisScanReportCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // GetCisScanReportRequest
 *   scanArn: "STRING_VALUE", // required
 *   targetAccounts: [ // ReportTargetAccounts
 *     "STRING_VALUE",
 *   ],
 *   reportFormat: "PDF" || "CSV",
 * };
 * const command = new GetCisScanReportCommand(input);
 * const response = await client.send(command);
 * // { // GetCisScanReportResponse
 * //   url: "STRING_VALUE",
 * //   status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * // };
 *
 * ```
 *
 * @param GetCisScanReportCommandInput - {@link GetCisScanReportCommandInput}
 * @returns {@link GetCisScanReportCommandOutput}
 * @see {@link GetCisScanReportCommandInput} for command's `input` shape.
 * @see {@link GetCisScanReportCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example Sample GetCisScanReport Call
 * ```javascript
 * //
 * const input = {
 *   reportFormat: "PDF",
 *   scanArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-scan/624b746d-e080-44ae-8c1d-48e653365a38"
 * };
 * const command = new GetCisScanReportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   status: "SUCCEEDED",
 *   url: "www.s3.amazon.com/abcdef"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCisScanReportCommand extends $Command
  .classBuilder<
    GetCisScanReportCommandInput,
    GetCisScanReportCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "GetCisScanReport", {})
  .n("Inspector2Client", "GetCisScanReportCommand")
  .f(void 0, void 0)
  .ser(se_GetCisScanReportCommand)
  .de(de_GetCisScanReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCisScanReportRequest;
      output: GetCisScanReportResponse;
    };
    sdk: {
      input: GetCisScanReportCommandInput;
      output: GetCisScanReportCommandOutput;
    };
  };
}

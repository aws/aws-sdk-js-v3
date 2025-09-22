// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTermForReportRequest, GetTermForReportResponse } from "../models/models_0";
import { GetTermForReport } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTermForReportCommand}.
 */
export interface GetTermForReportCommandInput extends GetTermForReportRequest {}
/**
 * @public
 *
 * The output of {@link GetTermForReportCommand}.
 */
export interface GetTermForReportCommandOutput extends GetTermForReportResponse, __MetadataBearer {}

/**
 * <p>Get the Term content associated with a single report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetTermForReportCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetTermForReportCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // GetTermForReportRequest
 *   reportId: "STRING_VALUE", // required
 *   reportVersion: Number("long"),
 * };
 * const command = new GetTermForReportCommand(input);
 * const response = await client.send(command);
 * // { // GetTermForReportResponse
 * //   documentPresignedUrl: "STRING_VALUE",
 * //   termToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTermForReportCommandInput - {@link GetTermForReportCommandInput}
 * @returns {@link GetTermForReportCommandOutput}
 * @see {@link GetTermForReportCommandInput} for command's `input` shape.
 * @see {@link GetTermForReportCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request to create/modify content would result in a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ArtifactServiceException}
 * <p>Base exception class for all service exceptions from Artifact service.</p>
 *
 *
 * @example Invoke GetTermForReport operation on the latest version of a specific report
 * ```javascript
 * // The GetTermForReport operation is invoked on a reportId and on a optional version.
 *                         If callers do not provide a version, it will default to the report's latest version.
 * const input = {
 *   reportId: "report-abcdef0123456789"
 * };
 * const command = new GetTermForReportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   documentPresignedUrl: "<Presigned S3 URL>",
 *   termToken: "term-token-abcdefghijklm01234567890"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTermForReportCommand extends $Command
  .classBuilder<
    GetTermForReportCommandInput,
    GetTermForReportCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Artifact", "GetTermForReport", {})
  .n("ArtifactClient", "GetTermForReportCommand")
  .sc(GetTermForReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTermForReportRequest;
      output: GetTermForReportResponse;
    };
    sdk: {
      input: GetTermForReportCommandInput;
      output: GetTermForReportCommandOutput;
    };
  };
}

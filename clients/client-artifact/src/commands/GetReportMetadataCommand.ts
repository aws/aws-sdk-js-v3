// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetReportMetadataRequest, GetReportMetadataResponse } from "../models/models_0";
import { GetReportMetadata } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReportMetadataCommand}.
 */
export interface GetReportMetadataCommandInput extends GetReportMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetReportMetadataCommand}.
 */
export interface GetReportMetadataCommandOutput extends GetReportMetadataResponse, __MetadataBearer {}

/**
 * <p>Get the metadata for a single report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetReportMetadataCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetReportMetadataCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // GetReportMetadataRequest
 *   reportId: "STRING_VALUE", // required
 *   reportVersion: Number("long"),
 * };
 * const command = new GetReportMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetReportMetadataResponse
 * //   reportDetails: { // ReportDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     periodStart: new Date("TIMESTAMP"),
 * //     periodEnd: new Date("TIMESTAMP"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastModifiedAt: new Date("TIMESTAMP"),
 * //     deletedAt: new Date("TIMESTAMP"),
 * //     state: "PUBLISHED" || "UNPUBLISHED",
 * //     arn: "STRING_VALUE",
 * //     series: "STRING_VALUE",
 * //     category: "STRING_VALUE",
 * //     companyName: "STRING_VALUE",
 * //     productName: "STRING_VALUE",
 * //     termArn: "STRING_VALUE",
 * //     version: Number("long"),
 * //     acceptanceType: "PASSTHROUGH" || "EXPLICIT",
 * //     sequenceNumber: Number("long"),
 * //     uploadState: "PROCESSING" || "COMPLETE" || "FAILED" || "FAULT",
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReportMetadataCommandInput - {@link GetReportMetadataCommandInput}
 * @returns {@link GetReportMetadataCommandOutput}
 * @see {@link GetReportMetadataCommandInput} for command's `input` shape.
 * @see {@link GetReportMetadataCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
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
 * @example Invoke GetReportMetadata operation on the latest version of a specific report
 * ```javascript
 * // The GetReportMetadata operation is invoked on a reportId and on a optional version.
 *                         If callers do not provide a version, it will default to the report's latest version.
 * const input = {
 *   reportId: "report-bqhUJF3FrQZsMJpb"
 * };
 * const command = new GetReportMetadataCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   reportDetails: {
 *     arn: "arn:aws:artifact:us-east-1::report/report-abcdef0123456789:1",
 *     category: "Artifact Category",
 *     companyName: "AWS",
 *     createdAt: "2022-05-27T23:17:00.343940Z",
 *     description: "Description of report",
 *     id: "report-abcdef0123456789",
 *     name: "Name of report",
 *     periodEnd: "2022-04-01T20:32:04Z",
 *     periodStart: "2022-04-01T20:32:04Z",
 *     productName: "Product of report",
 *     series: "Artifact Series",
 *     state: "PUBLISHED",
 *     termArn: "arn:aws:artifact:us-east-1::term/term-abcdef0123456789:1",
 *     version: 1
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetReportMetadataCommand extends $Command
  .classBuilder<
    GetReportMetadataCommandInput,
    GetReportMetadataCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Artifact", "GetReportMetadata", {})
  .n("ArtifactClient", "GetReportMetadataCommand")
  .sc(GetReportMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReportMetadataRequest;
      output: GetReportMetadataResponse;
    };
    sdk: {
      input: GetReportMetadataCommandInput;
      output: GetReportMetadataCommandOutput;
    };
  };
}

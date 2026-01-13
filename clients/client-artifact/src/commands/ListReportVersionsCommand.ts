// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReportVersionsRequest, ListReportVersionsResponse } from "../models/models_0";
import { ListReportVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportVersionsCommand}.
 */
export interface ListReportVersionsCommandInput extends ListReportVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListReportVersionsCommand}.
 */
export interface ListReportVersionsCommandOutput extends ListReportVersionsResponse, __MetadataBearer {}

/**
 * <p>List available report versions for a given report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, ListReportVersionsCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, ListReportVersionsCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // ListReportVersionsRequest
 *   reportId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListReportVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportVersionsResponse
 * //   reports: [ // ReportsList // required
 * //     { // ReportSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       state: "PUBLISHED" || "UNPUBLISHED",
 * //       arn: "STRING_VALUE",
 * //       version: Number("long"),
 * //       uploadState: "PROCESSING" || "COMPLETE" || "FAILED" || "FAULT",
 * //       description: "STRING_VALUE",
 * //       periodStart: new Date("TIMESTAMP"),
 * //       periodEnd: new Date("TIMESTAMP"),
 * //       series: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //       companyName: "STRING_VALUE",
 * //       productName: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       acceptanceType: "PASSTHROUGH" || "EXPLICIT",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportVersionsCommandInput - {@link ListReportVersionsCommandInput}
 * @returns {@link ListReportVersionsCommandOutput}
 * @see {@link ListReportVersionsCommandInput} for command's `input` shape.
 * @see {@link ListReportVersionsCommandOutput} for command's `response` shape.
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
 * @example Invoke ListReportVersions operation
 * ```javascript
 * // The ListReportVersions operation returns a collection of report versions
 *                         for a given resource.
 * const input = {
 *   reportId: "report-abcdef0123456789"
 * };
 * const command = new ListReportVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "gPFEGk7CF4wS901w7ppYclt7gPFEGk7CF4wS901w7ppYclt7gPFEGk7CF4wS901w7ppYclt7",
 *   reports: [
 *     {
 *       arn: "arn:aws:artifact:us-east-1::report:report-abcdef0123456789:1",
 *       category: "category",
 *       companyName: "companyName",
 *       description: "description",
 *       id: "report-abcdef0123456789",
 *       name: "name",
 *       periodEnd: "2022-04-01T20:32:04Z",
 *       periodStart: "2022-04-01T20:32:04Z",
 *       productName: "productName",
 *       series: "series",
 *       state: "PUBLISHED",
 *       version: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListReportVersionsCommand extends $Command
  .classBuilder<
    ListReportVersionsCommandInput,
    ListReportVersionsCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Artifact", "ListReportVersions", {})
  .n("ArtifactClient", "ListReportVersionsCommand")
  .sc(ListReportVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportVersionsRequest;
      output: ListReportVersionsResponse;
    };
    sdk: {
      input: ListReportVersionsCommandInput;
      output: ListReportVersionsCommandOutput;
    };
  };
}

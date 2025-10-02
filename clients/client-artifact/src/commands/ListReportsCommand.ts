// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReportsRequest, ListReportsResponse } from "../models/models_0";
import { de_ListReportsCommand, se_ListReportsCommand } from "../protocols/Aws_restJson1";

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
 * <p>List available reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, ListReportsCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, ListReportsCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // ListReportsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportsResponse
 * //   reports: [ // ReportsList
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
 * @param ListReportsCommandInput - {@link ListReportsCommandInput}
 * @returns {@link ListReportsCommandOutput}
 * @see {@link ListReportsCommandInput} for command's `input` shape.
 * @see {@link ListReportsCommandOutput} for command's `response` shape.
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
 * @example Invoke ListReports operation
 * ```javascript
 * // The ListReports operation returns a collection of report resources.
 * const input = { /* empty *\/ };
 * const command = new ListReportsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "gPFEGk7CF4wS901w7ppYclt7gPFEGk7CF4wS901w7ppYclt7gPFEGk7CF4wS901w7ppYclt7",
 *   reports: [
 *     {
 *       arn: "arn:aws:artifact:us-east-1::report/report-abcdef0123456789",
 *       category: "Artifact Category",
 *       companyName: "AWS",
 *       description: "Description of report",
 *       id: "report-abcdef0123456789",
 *       name: "Name of report",
 *       periodEnd: "2022-04-01T20:32:04Z",
 *       periodStart: "2022-04-01T20:32:04Z",
 *       productName: "Product of report",
 *       series: "Artifact Series",
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
export class ListReportsCommand extends $Command
  .classBuilder<
    ListReportsCommandInput,
    ListReportsCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Artifact", "ListReports", {})
  .n("ArtifactClient", "ListReportsCommand")
  .f(void 0, void 0)
  .ser(se_ListReportsCommand)
  .de(de_ListReportsCommand)
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetExportJobsRequest, GetExportJobsResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetExportJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportJobsCommand}.
 */
export interface GetExportJobsCommandInput extends GetExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetExportJobsCommand}.
 */
export interface GetExportJobsCommandOutput extends GetExportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of all the export jobs for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetExportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetExportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetExportJobsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetExportJobsResponse
 * //   ExportJobsResponse: { // ExportJobsResponse
 * //     Item: [ // ListOfExportJobResponse // required
 * //       { // ExportJobResponse
 * //         ApplicationId: "STRING_VALUE", // required
 * //         CompletedPieces: Number("int"),
 * //         CompletionDate: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE", // required
 * //         Definition: { // ExportJobResource
 * //           RoleArn: "STRING_VALUE", // required
 * //           S3UrlPrefix: "STRING_VALUE", // required
 * //           SegmentId: "STRING_VALUE",
 * //           SegmentVersion: Number("int"),
 * //         },
 * //         FailedPieces: Number("int"),
 * //         Failures: [ // ListOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         Id: "STRING_VALUE", // required
 * //         JobStatus: "CREATED" || "PREPARING_FOR_INITIALIZATION" || "INITIALIZING" || "PROCESSING" || "PENDING_JOB" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED", // required
 * //         TotalFailures: Number("int"),
 * //         TotalPieces: Number("int"),
 * //         TotalProcessed: Number("int"),
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExportJobsCommandInput - {@link GetExportJobsCommandInput}
 * @returns {@link GetExportJobsCommandOutput}
 * @see {@link GetExportJobsCommandInput} for command's `input` shape.
 * @see {@link GetExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class GetExportJobsCommand extends $Command
  .classBuilder<
    GetExportJobsCommandInput,
    GetExportJobsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetExportJobs", {})
  .n("PinpointClient", "GetExportJobsCommand")
  .sc(GetExportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportJobsRequest;
      output: GetExportJobsResponse;
    };
    sdk: {
      input: GetExportJobsCommandInput;
      output: GetExportJobsCommandOutput;
    };
  };
}

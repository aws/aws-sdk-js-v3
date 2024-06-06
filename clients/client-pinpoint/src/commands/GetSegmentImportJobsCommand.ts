// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSegmentImportJobsRequest, GetSegmentImportJobsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetSegmentImportJobsCommand, se_GetSegmentImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSegmentImportJobsCommand}.
 */
export interface GetSegmentImportJobsCommandInput extends GetSegmentImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentImportJobsCommand}.
 */
export interface GetSegmentImportJobsCommandOutput extends GetSegmentImportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of the import jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetSegmentImportJobsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   SegmentId: "STRING_VALUE", // required
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetSegmentImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentImportJobsResponse
 * //   ImportJobsResponse: { // ImportJobsResponse
 * //     Item: [ // ListOfImportJobResponse // required
 * //       { // ImportJobResponse
 * //         ApplicationId: "STRING_VALUE", // required
 * //         CompletedPieces: Number("int"),
 * //         CompletionDate: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE", // required
 * //         Definition: { // ImportJobResource
 * //           DefineSegment: true || false,
 * //           ExternalId: "STRING_VALUE",
 * //           Format: "CSV" || "JSON", // required
 * //           RegisterEndpoints: true || false,
 * //           RoleArn: "STRING_VALUE", // required
 * //           S3Url: "STRING_VALUE", // required
 * //           SegmentId: "STRING_VALUE",
 * //           SegmentName: "STRING_VALUE",
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
 * @param GetSegmentImportJobsCommandInput - {@link GetSegmentImportJobsCommandInput}
 * @returns {@link GetSegmentImportJobsCommandOutput}
 * @see {@link GetSegmentImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentImportJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetSegmentImportJobsCommand extends $Command
  .classBuilder<
    GetSegmentImportJobsCommandInput,
    GetSegmentImportJobsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetSegmentImportJobs", {})
  .n("PinpointClient", "GetSegmentImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_GetSegmentImportJobsCommand)
  .de(de_GetSegmentImportJobsCommand)
  .build() {}

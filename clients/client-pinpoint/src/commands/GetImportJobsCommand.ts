// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetImportJobsRequest, GetImportJobsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetImportJobsCommand, se_GetImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImportJobsCommand}.
 */
export interface GetImportJobsCommandInput extends GetImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetImportJobsCommand}.
 */
export interface GetImportJobsCommandOutput extends GetImportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of all the import jobs for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetImportJobsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetImportJobsResponse
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
 * @param GetImportJobsCommandInput - {@link GetImportJobsCommandInput}
 * @returns {@link GetImportJobsCommandOutput}
 * @see {@link GetImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetImportJobsCommandOutput} for command's `response` shape.
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
export class GetImportJobsCommand extends $Command
  .classBuilder<
    GetImportJobsCommandInput,
    GetImportJobsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetImportJobs", {})
  .n("PinpointClient", "GetImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_GetImportJobsCommand)
  .de(de_GetImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImportJobsRequest;
      output: GetImportJobsResponse;
    };
    sdk: {
      input: GetImportJobsCommandInput;
      output: GetImportJobsCommandOutput;
    };
  };
}

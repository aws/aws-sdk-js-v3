// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetExportJobRequest, GetExportJobResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetExportJob } from "../schemas/schemas_7_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportJobCommand}.
 */
export interface GetExportJobCommandInput extends GetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetExportJobCommand}.
 */
export interface GetExportJobCommandOutput extends GetExportJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of a specific export job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetExportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetExportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetExportJobRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetExportJobResponse
 * //   ExportJobResponse: { // ExportJobResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CompletedPieces: Number("int"),
 * //     CompletionDate: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE", // required
 * //     Definition: { // ExportJobResource
 * //       RoleArn: "STRING_VALUE", // required
 * //       S3UrlPrefix: "STRING_VALUE", // required
 * //       SegmentId: "STRING_VALUE",
 * //       SegmentVersion: Number("int"),
 * //     },
 * //     FailedPieces: Number("int"),
 * //     Failures: [ // ListOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Id: "STRING_VALUE", // required
 * //     JobStatus: "CREATED" || "PREPARING_FOR_INITIALIZATION" || "INITIALIZING" || "PROCESSING" || "PENDING_JOB" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED", // required
 * //     TotalFailures: Number("int"),
 * //     TotalPieces: Number("int"),
 * //     TotalProcessed: Number("int"),
 * //     Type: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExportJobCommandInput - {@link GetExportJobCommandInput}
 * @returns {@link GetExportJobCommandOutput}
 * @see {@link GetExportJobCommandInput} for command's `input` shape.
 * @see {@link GetExportJobCommandOutput} for command's `response` shape.
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
export class GetExportJobCommand extends $Command
  .classBuilder<
    GetExportJobCommandInput,
    GetExportJobCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetExportJob", {})
  .n("PinpointClient", "GetExportJobCommand")
  .sc(GetExportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportJobRequest;
      output: GetExportJobResponse;
    };
    sdk: {
      input: GetExportJobCommandInput;
      output: GetExportJobCommandOutput;
    };
  };
}

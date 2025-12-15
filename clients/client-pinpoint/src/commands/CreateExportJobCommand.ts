// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateExportJobRequest, CreateExportJobResponse } from "../models/models_0";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExportJobCommand}.
 */
export interface CreateExportJobCommandInput extends CreateExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportJobCommand}.
 */
export interface CreateExportJobCommandOutput extends CreateExportJobResponse, __MetadataBearer {}

/**
 * <p>Creates an export job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateExportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateExportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreateExportJobRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ExportJobRequest: { // ExportJobRequest
 *     RoleArn: "STRING_VALUE", // required
 *     S3UrlPrefix: "STRING_VALUE", // required
 *     SegmentId: "STRING_VALUE",
 *     SegmentVersion: Number("int"),
 *   },
 * };
 * const command = new CreateExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportJobResponse
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
 * @param CreateExportJobCommandInput - {@link CreateExportJobCommandInput}
 * @returns {@link CreateExportJobCommandOutput}
 * @see {@link CreateExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateExportJobCommandOutput} for command's `response` shape.
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
export class CreateExportJobCommand extends $Command
  .classBuilder<
    CreateExportJobCommandInput,
    CreateExportJobCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "CreateExportJob", {})
  .n("PinpointClient", "CreateExportJobCommand")
  .sc(CreateExportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExportJobRequest;
      output: CreateExportJobResponse;
    };
    sdk: {
      input: CreateExportJobCommandInput;
      output: CreateExportJobCommandOutput;
    };
  };
}

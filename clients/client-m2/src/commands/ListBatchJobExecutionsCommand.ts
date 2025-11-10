// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListBatchJobExecutionsRequest, ListBatchJobExecutionsResponse } from "../models/models_0";
import { ListBatchJobExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBatchJobExecutionsCommand}.
 */
export interface ListBatchJobExecutionsCommandInput extends ListBatchJobExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchJobExecutionsCommand}.
 */
export interface ListBatchJobExecutionsCommandOutput extends ListBatchJobExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists historical, current, and scheduled batch job executions for a specific
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListBatchJobExecutionsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListBatchJobExecutionsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListBatchJobExecutionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 *   executionIds: [ // IdentifierList
 *     "STRING_VALUE",
 *   ],
 *   jobName: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   startedAfter: new Date("TIMESTAMP"),
 *   startedBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListBatchJobExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchJobExecutionsResponse
 * //   batchJobExecutions: [ // BatchJobExecutionSummaryList // required
 * //     { // BatchJobExecutionSummary
 * //       executionId: "STRING_VALUE", // required
 * //       applicationId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       jobType: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       returnCode: "STRING_VALUE",
 * //       batchJobIdentifier: { // BatchJobIdentifier Union: only one key present
 * //         fileBatchJobIdentifier: { // FileBatchJobIdentifier
 * //           fileName: "STRING_VALUE", // required
 * //           folderPath: "STRING_VALUE",
 * //         },
 * //         scriptBatchJobIdentifier: { // ScriptBatchJobIdentifier
 * //           scriptName: "STRING_VALUE", // required
 * //         },
 * //         s3BatchJobIdentifier: { // S3BatchJobIdentifier
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //           identifier: { // JobIdentifier Union: only one key present
 * //             fileName: "STRING_VALUE",
 * //             scriptName: "STRING_VALUE",
 * //           },
 * //         },
 * //         restartBatchJobIdentifier: { // RestartBatchJobIdentifier
 * //           executionId: "STRING_VALUE", // required
 * //           jobStepRestartMarker: { // JobStepRestartMarker
 * //             fromStep: "STRING_VALUE", // required
 * //             fromProcStep: "STRING_VALUE",
 * //             toStep: "STRING_VALUE",
 * //             toProcStep: "STRING_VALUE",
 * //             stepCheckpoint: Number("int"),
 * //             skip: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchJobExecutionsCommandInput - {@link ListBatchJobExecutionsCommandInput}
 * @returns {@link ListBatchJobExecutionsCommandOutput}
 * @see {@link ListBatchJobExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListBatchJobExecutionsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListBatchJobExecutionsCommand extends $Command
  .classBuilder<
    ListBatchJobExecutionsCommandInput,
    ListBatchJobExecutionsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "ListBatchJobExecutions", {})
  .n("M2Client", "ListBatchJobExecutionsCommand")
  .sc(ListBatchJobExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchJobExecutionsRequest;
      output: ListBatchJobExecutionsResponse;
    };
    sdk: {
      input: ListBatchJobExecutionsCommandInput;
      output: ListBatchJobExecutionsCommandOutput;
    };
  };
}

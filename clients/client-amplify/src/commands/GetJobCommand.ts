// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobRequest, GetJobResult } from "../models/models_0";
import { de_GetJobCommand, se_GetJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobCommand}.
 */
export interface GetJobCommandInput extends GetJobRequest {}
/**
 * @public
 *
 * The output of {@link GetJobCommand}.
 */
export interface GetJobCommandOutput extends GetJobResult, __MetadataBearer {}

/**
 * <p> Returns a job for a branch of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetJobCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetJobCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // GetJobRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * // { // GetJobResult
 * //   job: { // Job
 * //     summary: { // JobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       commitId: "STRING_VALUE", // required
 * //       commitMessage: "STRING_VALUE", // required
 * //       commitTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       status: "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       jobType: "RELEASE" || "RETRY" || "MANUAL" || "WEB_HOOK", // required
 * //     },
 * //     steps: [ // Steps // required
 * //       { // Step
 * //         stepName: "STRING_VALUE", // required
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         status: "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //         logUrl: "STRING_VALUE",
 * //         artifactsUrl: "STRING_VALUE",
 * //         testArtifactsUrl: "STRING_VALUE",
 * //         testConfigUrl: "STRING_VALUE",
 * //         screenshots: { // Screenshots
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         statusReason: "STRING_VALUE",
 * //         context: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobCommandInput - {@link GetJobCommandInput}
 * @returns {@link GetJobCommandOutput}
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 * @public
 */
export class GetJobCommand extends $Command
  .classBuilder<
    GetJobCommandInput,
    GetJobCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "GetJob", {})
  .n("AmplifyClient", "GetJobCommand")
  .f(void 0, void 0)
  .ser(se_GetJobCommand)
  .de(de_GetJobCommand)
  .build() {}

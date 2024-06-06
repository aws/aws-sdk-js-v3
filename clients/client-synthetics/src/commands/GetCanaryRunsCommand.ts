// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCanaryRunsRequest, GetCanaryRunsResponse } from "../models/models_0";
import { de_GetCanaryRunsCommand, se_GetCanaryRunsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCanaryRunsCommand}.
 */
export interface GetCanaryRunsCommandInput extends GetCanaryRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetCanaryRunsCommand}.
 */
export interface GetCanaryRunsCommandOutput extends GetCanaryRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of runs for a specified canary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryRunsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryRunsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // GetCanaryRunsRequest
 *   Name: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetCanaryRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetCanaryRunsResponse
 * //   CanaryRuns: [ // CanaryRuns
 * //     { // CanaryRun
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: { // CanaryRunStatus
 * //         State: "RUNNING" || "PASSED" || "FAILED",
 * //         StateReason: "STRING_VALUE",
 * //         StateReasonCode: "CANARY_FAILURE" || "EXECUTION_FAILURE",
 * //       },
 * //       Timeline: { // CanaryRunTimeline
 * //         Started: new Date("TIMESTAMP"),
 * //         Completed: new Date("TIMESTAMP"),
 * //       },
 * //       ArtifactS3Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCanaryRunsCommandInput - {@link GetCanaryRunsCommandInput}
 * @returns {@link GetCanaryRunsCommandOutput}
 * @see {@link GetCanaryRunsCommandInput} for command's `input` shape.
 * @see {@link GetCanaryRunsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 * @public
 */
export class GetCanaryRunsCommand extends $Command
  .classBuilder<
    GetCanaryRunsCommandInput,
    GetCanaryRunsCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Synthetics", "GetCanaryRuns", {})
  .n("SyntheticsClient", "GetCanaryRunsCommand")
  .f(void 0, void 0)
  .ser(se_GetCanaryRunsCommand)
  .de(de_GetCanaryRunsCommand)
  .build() {}

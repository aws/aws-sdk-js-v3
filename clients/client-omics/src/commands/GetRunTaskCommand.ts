// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRunTaskRequest, GetRunTaskResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetRunTaskCommand, se_GetRunTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRunTaskCommand}.
 */
export interface GetRunTaskCommandInput extends GetRunTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetRunTaskCommand}.
 */
export interface GetRunTaskCommandOutput extends GetRunTaskResponse, __MetadataBearer {}

/**
 * <p>Gets information about a workflow run task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetRunTaskCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetRunTaskCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OmicsClient(config);
 * const input = { // GetRunTaskRequest
 *   id: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new GetRunTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetRunTaskResponse
 * //   taskId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   cpus: Number("int"),
 * //   cacheHit: true || false,
 * //   cacheS3Uri: "STRING_VALUE",
 * //   memory: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   startTime: new Date("TIMESTAMP"),
 * //   stopTime: new Date("TIMESTAMP"),
 * //   statusMessage: "STRING_VALUE",
 * //   logStream: "STRING_VALUE",
 * //   gpus: Number("int"),
 * //   instanceType: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRunTaskCommandInput - {@link GetRunTaskCommandInput}
 * @returns {@link GetRunTaskCommandOutput}
 * @see {@link GetRunTaskCommandInput} for command's `input` shape.
 * @see {@link GetRunTaskCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 * @public
 */
export class GetRunTaskCommand extends $Command
  .classBuilder<
    GetRunTaskCommandInput,
    GetRunTaskCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetRunTask", {})
  .n("OmicsClient", "GetRunTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetRunTaskCommand)
  .de(de_GetRunTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRunTaskRequest;
      output: GetRunTaskResponse;
    };
    sdk: {
      input: GetRunTaskCommandInput;
      output: GetRunTaskCommandOutput;
    };
  };
}

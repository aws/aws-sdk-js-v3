// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCalculationExecutionStatusRequest, GetCalculationExecutionStatusResponse } from "../models/models_0";
import { GetCalculationExecutionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCalculationExecutionStatusCommand}.
 */
export interface GetCalculationExecutionStatusCommandInput extends GetCalculationExecutionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetCalculationExecutionStatusCommand}.
 */
export interface GetCalculationExecutionStatusCommandOutput
  extends GetCalculationExecutionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Gets the status of a current calculation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCalculationExecutionStatusCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCalculationExecutionStatusCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetCalculationExecutionStatusRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetCalculationExecutionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetCalculationExecutionStatusResponse
 * //   Status: { // CalculationStatus
 * //     SubmissionDateTime: new Date("TIMESTAMP"),
 * //     CompletionDateTime: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * //     StateChangeReason: "STRING_VALUE",
 * //   },
 * //   Statistics: { // CalculationStatistics
 * //     DpuExecutionInMillis: Number("long"),
 * //     Progress: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCalculationExecutionStatusCommandInput - {@link GetCalculationExecutionStatusCommandInput}
 * @returns {@link GetCalculationExecutionStatusCommandOutput}
 * @see {@link GetCalculationExecutionStatusCommandInput} for command's `input` shape.
 * @see {@link GetCalculationExecutionStatusCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetCalculationExecutionStatusCommand extends $Command
  .classBuilder<
    GetCalculationExecutionStatusCommandInput,
    GetCalculationExecutionStatusCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetCalculationExecutionStatus", {})
  .n("AthenaClient", "GetCalculationExecutionStatusCommand")
  .sc(GetCalculationExecutionStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCalculationExecutionStatusRequest;
      output: GetCalculationExecutionStatusResponse;
    };
    sdk: {
      input: GetCalculationExecutionStatusCommandInput;
      output: GetCalculationExecutionStatusCommandOutput;
    };
  };
}

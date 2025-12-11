// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvokeActStepRequest, InvokeActStepResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { InvokeActStep } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeActStepCommand}.
 */
export interface InvokeActStepCommandInput extends InvokeActStepRequest {}
/**
 * @public
 *
 * The output of {@link InvokeActStepCommand}.
 */
export interface InvokeActStepCommandOutput extends InvokeActStepResponse, __MetadataBearer {}

/**
 * <p>Executes the next step of an act, processing tool call results and returning new tool calls if needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, InvokeActStepCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, InvokeActStepCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // InvokeActStepRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   actId: "STRING_VALUE", // required
 *   callResults: [ // CallResults // required
 *     { // CallResult
 *       callId: "STRING_VALUE",
 *       content: [ // CallResultContents // required
 *         { // CallResultContent Union: only one key present
 *           text: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   previousStepId: "STRING_VALUE",
 * };
 * const command = new InvokeActStepCommand(input);
 * const response = await client.send(command);
 * // { // InvokeActStepResponse
 * //   calls: [ // Calls // required
 * //     { // Call
 * //       callId: "STRING_VALUE", // required
 * //       input: "DOCUMENT_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   stepId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeActStepCommandInput - {@link InvokeActStepCommandInput}
 * @returns {@link InvokeActStepCommandOutput}
 * @see {@link InvokeActStepCommandInput} for command's `input` shape.
 * @see {@link InvokeActStepCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for the request are invalid.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class InvokeActStepCommand extends $Command
  .classBuilder<
    InvokeActStepCommandInput,
    InvokeActStepCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "InvokeActStep", {})
  .n("NovaActClient", "InvokeActStepCommand")
  .sc(InvokeActStep)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeActStepRequest;
      output: InvokeActStepResponse;
    };
    sdk: {
      input: InvokeActStepCommandInput;
      output: InvokeActStepCommandOutput;
    };
  };
}

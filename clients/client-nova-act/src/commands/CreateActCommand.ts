// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateActRequest, CreateActResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { CreateAct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateActCommand}.
 */
export interface CreateActCommandInput extends CreateActRequest {}
/**
 * @public
 *
 * The output of {@link CreateActCommand}.
 */
export interface CreateActCommandOutput extends CreateActResponse, __MetadataBearer {}

/**
 * <p>Creates a new AI task (act) within a session that can interact with tools and perform specific actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, CreateActCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, CreateActCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // CreateActRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   task: "STRING_VALUE", // required
 *   toolSpecs: [ // ToolSpecs
 *     { // ToolSpec
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE", // required
 *       inputSchema: { // ToolInputSchema Union: only one key present
 *         json: "DOCUMENT_VALUE",
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateActCommand(input);
 * const response = await client.send(command);
 * // { // CreateActResponse
 * //   actId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "PENDING_CLIENT_ACTION" || "PENDING_HUMAN_ACTION" || "SUCCEEDED" || "FAILED" || "TIMED_OUT", // required
 * // };
 *
 * ```
 *
 * @param CreateActCommandInput - {@link CreateActCommandInput}
 * @returns {@link CreateActCommandOutput}
 * @see {@link CreateActCommandInput} for command's `input` shape.
 * @see {@link CreateActCommandOutput} for command's `response` shape.
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
export class CreateActCommand extends $Command
  .classBuilder<
    CreateActCommandInput,
    CreateActCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "CreateAct", {})
  .n("NovaActClient", "CreateActCommand")
  .sc(CreateAct$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateActRequest;
      output: CreateActResponse;
    };
    sdk: {
      input: CreateActCommandInput;
      output: CreateActCommandOutput;
    };
  };
}

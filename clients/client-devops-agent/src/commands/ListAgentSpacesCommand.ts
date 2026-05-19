// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAgentSpacesInput, ListAgentSpacesOutput } from "../models/models_0";
import { ListAgentSpaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentSpacesCommand}.
 */
export interface ListAgentSpacesCommandInput extends ListAgentSpacesInput {}
/**
 * @public
 *
 * The output of {@link ListAgentSpacesCommand}.
 */
export interface ListAgentSpacesCommandOutput extends ListAgentSpacesOutput, __MetadataBearer {}

/**
 * <p>Lists all AgentSpaces with optional pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListAgentSpacesCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListAgentSpacesCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListAgentSpacesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentSpacesOutput
 * //   nextToken: "STRING_VALUE",
 * //   agentSpaces: [ // AgentSpaceList // required
 * //     { // AgentSpace
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       locale: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       kmsKeyArn: "STRING_VALUE",
 * //       agentSpaceId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAgentSpacesCommandInput - {@link ListAgentSpacesCommandInput}
 * @returns {@link ListAgentSpacesCommandOutput}
 * @see {@link ListAgentSpacesCommandInput} for command's `input` shape.
 * @see {@link ListAgentSpacesCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class ListAgentSpacesCommand extends $Command
  .classBuilder<
    ListAgentSpacesCommandInput,
    ListAgentSpacesCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "ListAgentSpaces", {})
  .n("DevOpsAgentClient", "ListAgentSpacesCommand")
  .sc(ListAgentSpaces$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentSpacesInput;
      output: ListAgentSpacesOutput;
    };
    sdk: {
      input: ListAgentSpacesCommandInput;
      output: ListAgentSpacesCommandOutput;
    };
  };
}

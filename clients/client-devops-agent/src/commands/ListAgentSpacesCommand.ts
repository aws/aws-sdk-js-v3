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
 * Lists all AgentSpaces with optional pagination.
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
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
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

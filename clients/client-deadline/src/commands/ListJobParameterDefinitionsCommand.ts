// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobParameterDefinitionsRequest, ListJobParameterDefinitionsResponse } from "../models/models_0";
import { ListJobParameterDefinitions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobParameterDefinitionsCommand}.
 */
export interface ListJobParameterDefinitionsCommandInput extends ListJobParameterDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobParameterDefinitionsCommand}.
 */
export interface ListJobParameterDefinitionsCommandOutput
  extends ListJobParameterDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists parameter definitions of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListJobParameterDefinitionsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListJobParameterDefinitionsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListJobParameterDefinitionsRequest
 *   farmId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListJobParameterDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobParameterDefinitionsResponse
 * //   jobParameterDefinitions: [ // JobParameterDefinitions // required
 * //     "DOCUMENT_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobParameterDefinitionsCommandInput - {@link ListJobParameterDefinitionsCommandInput}
 * @returns {@link ListJobParameterDefinitionsCommandOutput}
 * @see {@link ListJobParameterDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListJobParameterDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListJobParameterDefinitionsCommand extends $Command
  .classBuilder<
    ListJobParameterDefinitionsCommandInput,
    ListJobParameterDefinitionsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListJobParameterDefinitions", {})
  .n("DeadlineClient", "ListJobParameterDefinitionsCommand")
  .sc(ListJobParameterDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobParameterDefinitionsRequest;
      output: ListJobParameterDefinitionsResponse;
    };
    sdk: {
      input: ListJobParameterDefinitionsCommandInput;
      output: ListJobParameterDefinitionsCommandOutput;
    };
  };
}

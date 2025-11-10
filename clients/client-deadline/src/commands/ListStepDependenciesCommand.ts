// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStepDependenciesRequest, ListStepDependenciesResponse } from "../models/models_0";
import { ListStepDependencies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStepDependenciesCommand}.
 */
export interface ListStepDependenciesCommandInput extends ListStepDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListStepDependenciesCommand}.
 */
export interface ListStepDependenciesCommandOutput extends ListStepDependenciesResponse, __MetadataBearer {}

/**
 * <p>Lists the dependencies for a step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStepDependenciesCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStepDependenciesCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListStepDependenciesRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   stepId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStepDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListStepDependenciesResponse
 * //   dependencies: [ // StepDependencies // required
 * //     { // StepDependency
 * //       stepId: "STRING_VALUE", // required
 * //       status: "RESOLVED" || "UNRESOLVED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStepDependenciesCommandInput - {@link ListStepDependenciesCommandInput}
 * @returns {@link ListStepDependenciesCommandOutput}
 * @see {@link ListStepDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListStepDependenciesCommandOutput} for command's `response` shape.
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
export class ListStepDependenciesCommand extends $Command
  .classBuilder<
    ListStepDependenciesCommandInput,
    ListStepDependenciesCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListStepDependencies", {})
  .n("DeadlineClient", "ListStepDependenciesCommand")
  .sc(ListStepDependencies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStepDependenciesRequest;
      output: ListStepDependenciesResponse;
    };
    sdk: {
      input: ListStepDependenciesCommandInput;
      output: ListStepDependenciesCommandOutput;
    };
  };
}

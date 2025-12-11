// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTaskDefinitionFamiliesRequest, ListTaskDefinitionFamiliesResponse } from "../models/models_0";
import { ListTaskDefinitionFamilies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTaskDefinitionFamiliesCommand}.
 */
export interface ListTaskDefinitionFamiliesCommandInput extends ListTaskDefinitionFamiliesRequest {}
/**
 * @public
 *
 * The output of {@link ListTaskDefinitionFamiliesCommand}.
 */
export interface ListTaskDefinitionFamiliesCommandOutput extends ListTaskDefinitionFamiliesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of task definition families that are registered to your account. This
 * 			list includes task definition families that no longer have any <code>ACTIVE</code> task
 * 			definition revisions.</p>
 *          <p>You can filter out task definition families that don't contain any <code>ACTIVE</code>
 * 			task definition revisions by setting the <code>status</code> parameter to
 * 				<code>ACTIVE</code>. You can also filter the results with the
 * 				<code>familyPrefix</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionFamiliesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionFamiliesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListTaskDefinitionFamiliesRequest
 *   familyPrefix: "STRING_VALUE",
 *   status: "ACTIVE" || "INACTIVE" || "ALL",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * // { // ListTaskDefinitionFamiliesResponse
 * //   families: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaskDefinitionFamiliesCommandInput - {@link ListTaskDefinitionFamiliesCommandInput}
 * @returns {@link ListTaskDefinitionFamiliesCommandOutput}
 * @see {@link ListTaskDefinitionFamiliesCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionFamiliesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To filter your registered task definition families
 * ```javascript
 * // This example lists the task definition revisions that start with "hpcc".
 * const input = {
 *   familyPrefix: "hpcc"
 * };
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   families: [
 *     "hpcc",
 *     "hpcc-c4-8xlarge"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list your registered task definition families
 * ```javascript
 * // This example lists all of your registered task definition families.
 * const input = { /* empty *\/ };
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   families: [
 *     "node-js-app",
 *     "web-timer",
 *     "hpcc",
 *     "hpcc-c4-8xlarge"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTaskDefinitionFamiliesCommand extends $Command
  .classBuilder<
    ListTaskDefinitionFamiliesCommandInput,
    ListTaskDefinitionFamiliesCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "ListTaskDefinitionFamilies", {})
  .n("ECSClient", "ListTaskDefinitionFamiliesCommand")
  .sc(ListTaskDefinitionFamilies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTaskDefinitionFamiliesRequest;
      output: ListTaskDefinitionFamiliesResponse;
    };
    sdk: {
      input: ListTaskDefinitionFamiliesCommandInput;
      output: ListTaskDefinitionFamiliesCommandOutput;
    };
  };
}

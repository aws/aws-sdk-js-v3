// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { de_ListTagsForResourceCommand, se_ListTagsForResourceCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkspacesInstancesClientResolvedConfig,
} from "../WorkspacesInstancesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>Retrieves tags for a WorkSpace Instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, ListTagsForResourceCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, ListTagsForResourceCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // ListTagsForResourceRequest
 *   WorkspaceInstanceId: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates the requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates the request rate has exceeded limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates invalid input parameters in the request.</p>
 *
 * @throws {@link WorkspacesInstancesServiceException}
 * <p>Base exception class for all service exceptions from WorkspacesInstances service.</p>
 *
 *
 * @public
 */
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EUCMIFrontendAPIService", "ListTagsForResource", {})
  .n("WorkspacesInstancesClient", "ListTagsForResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsForResourceCommand)
  .de(de_ListTagsForResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceRequest;
      output: ListTagsForResourceResponse;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}

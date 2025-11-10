// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRegionsRequest, ListRegionsResponse } from "../models/models_0";
import { ListRegions } from "../schemas/schemas_0";
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
 * The input for {@link ListRegionsCommand}.
 */
export interface ListRegionsCommandInput extends ListRegionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegionsCommand}.
 */
export interface ListRegionsCommandOutput extends ListRegionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of AWS regions supported by Amazon WorkSpaces Instances, enabling region discovery for workspace deployments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, ListRegionsCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, ListRegionsCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // ListRegionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRegionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegionsResponse
 * //   Regions: [ // RegionList // required
 * //     { // Region
 * //       RegionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegionsCommandInput - {@link ListRegionsCommandInput}
 * @returns {@link ListRegionsCommandOutput}
 * @see {@link ListRegionsCommandInput} for command's `input` shape.
 * @see {@link ListRegionsCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
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
export class ListRegionsCommand extends $Command
  .classBuilder<
    ListRegionsCommandInput,
    ListRegionsCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EUCMIFrontendAPIService", "ListRegions", {})
  .n("WorkspacesInstancesClient", "ListRegionsCommand")
  .sc(ListRegions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegionsRequest;
      output: ListRegionsResponse;
    };
    sdk: {
      input: ListRegionsCommandInput;
      output: ListRegionsCommandOutput;
    };
  };
}

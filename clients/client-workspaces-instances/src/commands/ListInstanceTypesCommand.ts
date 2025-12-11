// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInstanceTypesRequest, ListInstanceTypesResponse } from "../models/models_0";
import { ListInstanceTypes } from "../schemas/schemas_0";
import type {
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
 * The input for {@link ListInstanceTypesCommand}.
 */
export interface ListInstanceTypesCommandInput extends ListInstanceTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceTypesCommand}.
 */
export interface ListInstanceTypesCommandOutput extends ListInstanceTypesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of instance types supported by Amazon WorkSpaces Instances, enabling precise workspace infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, ListInstanceTypesCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, ListInstanceTypesCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // ListInstanceTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceTypesResponse
 * //   InstanceTypes: [ // InstanceTypes // required
 * //     { // InstanceTypeInfo
 * //       InstanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceTypesCommandInput - {@link ListInstanceTypesCommandInput}
 * @returns {@link ListInstanceTypesCommandOutput}
 * @see {@link ListInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceTypesCommandOutput} for command's `response` shape.
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
export class ListInstanceTypesCommand extends $Command
  .classBuilder<
    ListInstanceTypesCommandInput,
    ListInstanceTypesCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EUCMIFrontendAPIService", "ListInstanceTypes", {})
  .n("WorkspacesInstancesClient", "ListInstanceTypesCommand")
  .sc(ListInstanceTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstanceTypesRequest;
      output: ListInstanceTypesResponse;
    };
    sdk: {
      input: ListInstanceTypesCommandInput;
      output: ListInstanceTypesCommandOutput;
    };
  };
}

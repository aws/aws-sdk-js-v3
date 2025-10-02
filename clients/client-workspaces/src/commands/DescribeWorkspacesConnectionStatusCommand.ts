// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
} from "../models/models_0";
import {
  de_DescribeWorkspacesConnectionStatusCommand,
  se_DescribeWorkspacesConnectionStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspacesConnectionStatusCommand}.
 */
export interface DescribeWorkspacesConnectionStatusCommandInput extends DescribeWorkspacesConnectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspacesConnectionStatusCommand}.
 */
export interface DescribeWorkspacesConnectionStatusCommandOutput
  extends DescribeWorkspacesConnectionStatusResult,
    __MetadataBearer {}

/**
 * <p>Describes the connection status of the specified WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspacesConnectionStatusRequest
 *   WorkspaceIds: [ // WorkspaceIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspacesConnectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspacesConnectionStatusResult
 * //   WorkspacesConnectionStatus: [ // WorkspaceConnectionStatusList
 * //     { // WorkspaceConnectionStatus
 * //       WorkspaceId: "STRING_VALUE",
 * //       ConnectionState: "CONNECTED" || "DISCONNECTED" || "UNKNOWN",
 * //       ConnectionStateCheckTimestamp: new Date("TIMESTAMP"),
 * //       LastKnownUserConnectionTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspacesConnectionStatusCommandInput - {@link DescribeWorkspacesConnectionStatusCommandInput}
 * @returns {@link DescribeWorkspacesConnectionStatusCommandOutput}
 * @see {@link DescribeWorkspacesConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspacesConnectionStatusCommand extends $Command
  .classBuilder<
    DescribeWorkspacesConnectionStatusCommandInput,
    DescribeWorkspacesConnectionStatusCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeWorkspacesConnectionStatus", {})
  .n("WorkSpacesClient", "DescribeWorkspacesConnectionStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspacesConnectionStatusCommand)
  .de(de_DescribeWorkspacesConnectionStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspacesConnectionStatusRequest;
      output: DescribeWorkspacesConnectionStatusResult;
    };
    sdk: {
      input: DescribeWorkspacesConnectionStatusCommandInput;
      output: DescribeWorkspacesConnectionStatusCommandOutput;
    };
  };
}

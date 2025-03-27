// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkspacesPoolSessionsRequest, DescribeWorkspacesPoolSessionsResult } from "../models/models_0";
import {
  de_DescribeWorkspacesPoolSessionsCommand,
  se_DescribeWorkspacesPoolSessionsCommand,
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
 * The input for {@link DescribeWorkspacesPoolSessionsCommand}.
 */
export interface DescribeWorkspacesPoolSessionsCommandInput extends DescribeWorkspacesPoolSessionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspacesPoolSessionsCommand}.
 */
export interface DescribeWorkspacesPoolSessionsCommandOutput
  extends DescribeWorkspacesPoolSessionsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the streaming sessions for a specified pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesPoolSessionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesPoolSessionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspacesPoolSessionsRequest
 *   PoolId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspacesPoolSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspacesPoolSessionsResult
 * //   Sessions: [ // WorkspacesPoolSessions
 * //     { // WorkspacesPoolSession
 * //       AuthenticationType: "SAML",
 * //       ConnectionState: "CONNECTED" || "NOT_CONNECTED",
 * //       SessionId: "STRING_VALUE", // required
 * //       InstanceId: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE", // required
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       NetworkAccessConfiguration: { // NetworkAccessConfiguration
 * //         EniPrivateIpAddress: "STRING_VALUE",
 * //         EniId: "STRING_VALUE",
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       UserId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspacesPoolSessionsCommandInput - {@link DescribeWorkspacesPoolSessionsCommandInput}
 * @returns {@link DescribeWorkspacesPoolSessionsCommandOutput}
 * @see {@link DescribeWorkspacesPoolSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesPoolSessionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspacesPoolSessionsCommand extends $Command
  .classBuilder<
    DescribeWorkspacesPoolSessionsCommandInput,
    DescribeWorkspacesPoolSessionsCommandOutput,
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
  .s("WorkspacesService", "DescribeWorkspacesPoolSessions", {})
  .n("WorkSpacesClient", "DescribeWorkspacesPoolSessionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspacesPoolSessionsCommand)
  .de(de_DescribeWorkspacesPoolSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspacesPoolSessionsRequest;
      output: DescribeWorkspacesPoolSessionsResult;
    };
    sdk: {
      input: DescribeWorkspacesPoolSessionsCommandInput;
      output: DescribeWorkspacesPoolSessionsCommandOutput;
    };
  };
}

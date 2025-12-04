// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeConnectClientAddInsRequest, DescribeConnectClientAddInsResult } from "../models/models_0";
import { DescribeConnectClientAddIns } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectClientAddInsCommand}.
 */
export interface DescribeConnectClientAddInsCommandInput extends DescribeConnectClientAddInsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectClientAddInsCommand}.
 */
export interface DescribeConnectClientAddInsCommandOutput extends DescribeConnectClientAddInsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of Amazon Connect client add-ins that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectClientAddInsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectClientAddInsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeConnectClientAddInsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeConnectClientAddInsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectClientAddInsResult
 * //   AddIns: [ // ConnectClientAddInList
 * //     { // ConnectClientAddIn
 * //       AddInId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       URL: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectClientAddInsCommandInput - {@link DescribeConnectClientAddInsCommandInput}
 * @returns {@link DescribeConnectClientAddInsCommandOutput}
 * @see {@link DescribeConnectClientAddInsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectClientAddInsCommandOutput} for command's `response` shape.
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
export class DescribeConnectClientAddInsCommand extends $Command
  .classBuilder<
    DescribeConnectClientAddInsCommandInput,
    DescribeConnectClientAddInsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeConnectClientAddIns", {})
  .n("WorkSpacesClient", "DescribeConnectClientAddInsCommand")
  .sc(DescribeConnectClientAddIns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectClientAddInsRequest;
      output: DescribeConnectClientAddInsResult;
    };
    sdk: {
      input: DescribeConnectClientAddInsCommandInput;
      output: DescribeConnectClientAddInsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectClientAddInsRequest, DescribeConnectClientAddInsResult } from "../models/models_0";
import { de_DescribeConnectClientAddInsCommand, se_DescribeConnectClientAddInsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeConnectClientAddIns", {})
  .n("WorkSpacesClient", "DescribeConnectClientAddInsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectClientAddInsCommand)
  .de(de_DescribeConnectClientAddInsCommand)
  .build() {}

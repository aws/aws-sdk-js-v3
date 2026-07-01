// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConnectClientAddInsRequest, DescribeConnectClientAddInsResult } from "../models/models_0";
import { DescribeConnectClientAddIns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Retrieves a list of Connect Customer client add-ins that have been created.</p>
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
export class DescribeConnectClientAddInsCommand extends command<DescribeConnectClientAddInsCommandInput, DescribeConnectClientAddInsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConnectClientAddIns",
  DescribeConnectClientAddIns$
) {
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

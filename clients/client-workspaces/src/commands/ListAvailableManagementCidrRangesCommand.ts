// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult } from "../models/models_0";
import { ListAvailableManagementCidrRanges } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableManagementCidrRangesCommand}.
 */
export interface ListAvailableManagementCidrRangesCommandInput extends ListAvailableManagementCidrRangesRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableManagementCidrRangesCommand}.
 */
export interface ListAvailableManagementCidrRangesCommandOutput
  extends ListAvailableManagementCidrRangesResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
 *          <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL.
 *          If your account isn't enabled for BYOL, you'll receive an
 *             <code>AccessDeniedException</code> error.</p>
 *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
 *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ListAvailableManagementCidrRangesRequest
 *   ManagementCidrRangeConstraint: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAvailableManagementCidrRangesCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableManagementCidrRangesResult
 * //   ManagementCidrRanges: [ // DedicatedTenancyCidrRangeList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableManagementCidrRangesCommandInput - {@link ListAvailableManagementCidrRangesCommandInput}
 * @returns {@link ListAvailableManagementCidrRangesCommandOutput}
 * @see {@link ListAvailableManagementCidrRangesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagementCidrRangesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
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
export class ListAvailableManagementCidrRangesCommand extends $Command
  .classBuilder<
    ListAvailableManagementCidrRangesCommandInput,
    ListAvailableManagementCidrRangesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ListAvailableManagementCidrRanges", {})
  .n("WorkSpacesClient", "ListAvailableManagementCidrRangesCommand")
  .sc(ListAvailableManagementCidrRanges)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableManagementCidrRangesRequest;
      output: ListAvailableManagementCidrRangesResult;
    };
    sdk: {
      input: ListAvailableManagementCidrRangesCommandInput;
      output: ListAvailableManagementCidrRangesCommandOutput;
    };
  };
}

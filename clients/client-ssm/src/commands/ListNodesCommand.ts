// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNodesRequest, ListNodesResult } from "../models/models_1";
import { ListNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNodesCommand}.
 */
export interface ListNodesCommandInput extends ListNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListNodesCommand}.
 */
export interface ListNodesCommandOutput extends ListNodesResult, __MetadataBearer {}

/**
 * <p>Takes in filters and returns a list of managed nodes matching the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListNodesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListNodesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListNodesRequest
 *   SyncName: "STRING_VALUE",
 *   Filters: [ // NodeFilterList
 *     { // NodeFilter
 *       Key: "AgentType" || "AgentVersion" || "ComputerName" || "InstanceId" || "InstanceStatus" || "IpAddress" || "ManagedStatus" || "PlatformName" || "PlatformType" || "PlatformVersion" || "ResourceType" || "OrganizationalUnitId" || "OrganizationalUnitPath" || "Region" || "AccountId" || "SourceType" || "SourceId" || "SourceLocation" || "AvailabilityZone" || "AvailabilityZoneId", // required
 *       Values: [ // NodeFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "BeginWith",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListNodesResult
 * //   Nodes: [ // NodeList
 * //     { // Node
 * //       CaptureTime: new Date("TIMESTAMP"),
 * //       Id: "STRING_VALUE",
 * //       Owner: { // NodeOwnerInfo
 * //         AccountId: "STRING_VALUE",
 * //         OrganizationalUnitId: "STRING_VALUE",
 * //         OrganizationalUnitPath: "STRING_VALUE",
 * //       },
 * //       Region: "STRING_VALUE",
 * //       NodeType: { // NodeType Union: only one key present
 * //         Instance: { // InstanceInfo
 * //           AgentType: "STRING_VALUE",
 * //           AgentVersion: "STRING_VALUE",
 * //           ComputerName: "STRING_VALUE",
 * //           InstanceStatus: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //           ManagedStatus: "All" || "Managed" || "Unmanaged",
 * //           Name: "STRING_VALUE",
 * //           PlatformType: "Windows" || "Linux" || "MacOS",
 * //           PlatformName: "STRING_VALUE",
 * //           PlatformVersion: "STRING_VALUE",
 * //           ResourceType: "ManagedInstance" || "EC2Instance",
 * //           SourceType: "AWS::EC2::Instance" || "AWS::IoT::Thing" || "AWS::SSM::ManagedInstance" || "Microsoft.Compute/virtualMachines",
 * //           SourceId: "STRING_VALUE",
 * //           SourceLocation: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           AvailabilityZoneId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodesCommandInput - {@link ListNodesCommandInput}
 * @returns {@link ListNodesCommandOutput}
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link ResourceDataSyncNotFoundException} (client fault)
 *  <p>The specified sync name wasn't found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This operation is not supported for the current account. You must first enable the Systems Manager integrated experience in your account.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListNodesCommand extends command<ListNodesCommandInput, ListNodesCommandOutput>(
  _ep0,
  _mw0,
  "ListNodes",
  ListNodes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodesRequest;
      output: ListNodesResult;
    };
    sdk: {
      input: ListNodesCommandInput;
      output: ListNodesCommandOutput;
    };
  };
}

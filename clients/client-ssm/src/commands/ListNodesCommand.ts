// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNodesRequest, ListNodesResult, ListNodesResultFilterSensitiveLog } from "../models/models_1";
import { de_ListNodesCommand, se_ListNodesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // ListNodesRequest
 *   SyncName: "STRING_VALUE",
 *   Filters: [ // NodeFilterList
 *     { // NodeFilter
 *       Key: "AgentType" || "AgentVersion" || "ComputerName" || "InstanceId" || "InstanceStatus" || "IpAddress" || "ManagedStatus" || "PlatformName" || "PlatformType" || "PlatformVersion" || "ResourceType" || "OrganizationalUnitId" || "OrganizationalUnitPath" || "Region" || "AccountId", // required
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
 * //           PlatformType: "Windows" || "Linux" || "MacOS",
 * //           PlatformName: "STRING_VALUE",
 * //           PlatformVersion: "STRING_VALUE",
 * //           ResourceType: "ManagedInstance" || "EC2Instance",
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
 * @public
 * @example ListNodes
 * ```javascript
 * // This example illustrates one usage of ListNodes
 * const input = {
 *   "Filters": [
 *     {
 *       "Key": "Region",
 *       "Type": "Equal",
 *       "Values": [
 *         "us-east-2"
 *       ]
 *     }
 *   ],
 *   "MaxResults": 1,
 *   "SyncName": "AWS-QuickSetup-ManagedNode"
 * };
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "A9lT8CAxj9aDFRi+MNAoFq08IEXAMPLE",
 *   "Nodes": [
 *     {
 *       "CaptureTime": "2024-11-19T22:01:18",
 *       "Id": "i-02573cafcfEXAMPLE",
 *       "NodeType": {
 *         "Instance": {
 *           "AgentType": "amazon-ssm-agent",
 *           "AgentVersion": "3.3.859.0",
 *           "ComputerName": "ip-192.0.2.0.ec2.internal",
 *           "InstanceStatus": "Active",
 *           "IpAddress": "192.0.2.0",
 *           "ManagedStatus": "Managed",
 *           "PlatformName": "Amazon Linux",
 *           "PlatformType": "Linux",
 *           "PlatformVersion": "2023",
 *           "ResourceType": "EC2Instance"
 *         }
 *       },
 *       "Owner": {
 *         "AccountId": "111122223333",
 *         "OrganizationalUnitId": "ou-b8dn-sasv9tfp",
 *         "OrganizationalUnitPath": "r-b8dn/ou-b8dn-sasv9tfp"
 *       },
 *       "Region": "us-east-2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listnodes--ec13d561ee02
 * ```
 *
 */
export class ListNodesCommand extends $Command
  .classBuilder<
    ListNodesCommandInput,
    ListNodesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListNodes", {})
  .n("SSMClient", "ListNodesCommand")
  .f(void 0, ListNodesResultFilterSensitiveLog)
  .ser(se_ListNodesCommand)
  .de(de_ListNodesCommand)
  .build() {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVPCConnectionsRequest, ListVPCConnectionsResponse } from "../models/models_4";
import { de_ListVPCConnectionsCommand, se_ListVPCConnectionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVPCConnectionsCommand}.
 */
export interface ListVPCConnectionsCommandInput extends ListVPCConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListVPCConnectionsCommand}.
 */
export interface ListVPCConnectionsCommandOutput extends ListVPCConnectionsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the VPC connections in the current set Amazon Web Services Region of an
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListVPCConnectionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListVPCConnectionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListVPCConnectionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVPCConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListVPCConnectionsResponse
 * //   VPCConnectionSummaries: [ // VPCConnectionSummaryList
 * //     { // VPCConnectionSummary
 * //       VPCConnectionId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VPCId: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsResolvers: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED" || "DELETED",
 * //       AvailabilityStatus: "AVAILABLE" || "UNAVAILABLE" || "PARTIALLY_AVAILABLE",
 * //       NetworkInterfaces: [ // NetworkInterfaceList
 * //         { // NetworkInterface
 * //           SubnetId: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //           Status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED" || "DELETION_SCHEDULED" || "ATTACHMENT_FAILED_ROLLBACK_FAILED",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RoleArn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListVPCConnectionsCommandInput - {@link ListVPCConnectionsCommandInput}
 * @returns {@link ListVPCConnectionsCommandOutput}
 * @see {@link ListVPCConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListVPCConnectionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListVPCConnectionsCommand extends $Command
  .classBuilder<
    ListVPCConnectionsCommandInput,
    ListVPCConnectionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListVPCConnections", {})
  .n("QuickSightClient", "ListVPCConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListVPCConnectionsCommand)
  .de(de_ListVPCConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVPCConnectionsRequest;
      output: ListVPCConnectionsResponse;
    };
    sdk: {
      input: ListVPCConnectionsCommandInput;
      output: ListVPCConnectionsCommandOutput;
    };
  };
}

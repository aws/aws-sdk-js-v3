// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxEnvironmentsRequest, ListKxEnvironmentsResponse } from "../models/models_0";
import { de_ListKxEnvironmentsCommand, se_ListKxEnvironmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxEnvironmentsCommand}.
 */
export interface ListKxEnvironmentsCommandInput extends ListKxEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListKxEnvironmentsCommand}.
 */
export interface ListKxEnvironmentsCommandOutput extends ListKxEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of kdb environments created in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxEnvironmentsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxEnvironmentsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceClient(config);
 * const input = { // ListKxEnvironmentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListKxEnvironmentsResponse
 * //   environments: [ // KxEnvironmentList
 * //     { // KxEnvironment
 * //       name: "STRING_VALUE",
 * //       environmentId: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       status: "CREATE_REQUESTED" || "CREATING" || "CREATED" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "FAILED_CREATION" || "RETRY_DELETION" || "FAILED_DELETION" || "UPDATE_NETWORK_REQUESTED" || "UPDATING_NETWORK" || "FAILED_UPDATING_NETWORK" || "SUSPENDED",
 * //       tgwStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //       dnsStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //       errorMessage: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       environmentArn: "STRING_VALUE",
 * //       kmsKeyId: "STRING_VALUE",
 * //       dedicatedServiceAccountId: "STRING_VALUE",
 * //       transitGatewayConfiguration: { // TransitGatewayConfiguration
 * //         transitGatewayID: "STRING_VALUE", // required
 * //         routableCIDRSpace: "STRING_VALUE", // required
 * //         attachmentNetworkAclConfiguration: [ // NetworkACLConfiguration
 * //           { // NetworkACLEntry
 * //             ruleNumber: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //             ruleAction: "allow" || "deny", // required
 * //             portRange: { // PortRange
 * //               from: Number("int"), // required
 * //               to: Number("int"), // required
 * //             },
 * //             icmpTypeCode: { // IcmpTypeCode
 * //               type: Number("int"), // required
 * //               code: Number("int"), // required
 * //             },
 * //             cidrBlock: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       customDNSConfiguration: [ // CustomDNSConfiguration
 * //         { // CustomDNSServer
 * //           customDNSServerName: "STRING_VALUE", // required
 * //           customDNSServerIP: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       creationTimestamp: new Date("TIMESTAMP"),
 * //       updateTimestamp: new Date("TIMESTAMP"),
 * //       availabilityZoneIds: [ // AvailabilityZoneIds
 * //         "STRING_VALUE",
 * //       ],
 * //       certificateAuthorityArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxEnvironmentsCommandInput - {@link ListKxEnvironmentsCommandInput}
 * @returns {@link ListKxEnvironmentsCommandOutput}
 * @see {@link ListKxEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListKxEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 * @public
 */
export class ListKxEnvironmentsCommand extends $Command
  .classBuilder<
    ListKxEnvironmentsCommandInput,
    ListKxEnvironmentsCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "ListKxEnvironments", {})
  .n("FinspaceClient", "ListKxEnvironmentsCommand")
  .f(void 0, void 0)
  .ser(se_ListKxEnvironmentsCommand)
  .de(de_ListKxEnvironmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxEnvironmentsRequest;
      output: ListKxEnvironmentsResponse;
    };
    sdk: {
      input: ListKxEnvironmentsCommandInput;
      output: ListKxEnvironmentsCommandOutput;
    };
  };
}

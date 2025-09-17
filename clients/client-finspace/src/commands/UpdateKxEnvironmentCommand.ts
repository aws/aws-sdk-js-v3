// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxEnvironmentRequest, UpdateKxEnvironmentResponse } from "../models/models_0";
import { de_UpdateKxEnvironmentCommand, se_UpdateKxEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxEnvironmentCommand}.
 */
export interface UpdateKxEnvironmentCommandInput extends UpdateKxEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxEnvironmentCommand}.
 */
export interface UpdateKxEnvironmentCommandOutput extends UpdateKxEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates information for the given kdb environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxEnvironmentRequest
 *   environmentId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateKxEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxEnvironmentResponse
 * //   name: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   awsAccountId: "STRING_VALUE",
 * //   status: "CREATE_REQUESTED" || "CREATING" || "CREATED" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "FAILED_CREATION" || "RETRY_DELETION" || "FAILED_DELETION" || "UPDATE_NETWORK_REQUESTED" || "UPDATING_NETWORK" || "FAILED_UPDATING_NETWORK" || "SUSPENDED",
 * //   tgwStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //   dnsStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //   errorMessage: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   environmentArn: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   dedicatedServiceAccountId: "STRING_VALUE",
 * //   transitGatewayConfiguration: { // TransitGatewayConfiguration
 * //     transitGatewayID: "STRING_VALUE", // required
 * //     routableCIDRSpace: "STRING_VALUE", // required
 * //     attachmentNetworkAclConfiguration: [ // NetworkACLConfiguration
 * //       { // NetworkACLEntry
 * //         ruleNumber: Number("int"), // required
 * //         protocol: "STRING_VALUE", // required
 * //         ruleAction: "allow" || "deny", // required
 * //         portRange: { // PortRange
 * //           from: Number("int"), // required
 * //           to: Number("int"), // required
 * //         },
 * //         icmpTypeCode: { // IcmpTypeCode
 * //           type: Number("int"), // required
 * //           code: Number("int"), // required
 * //         },
 * //         cidrBlock: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   customDNSConfiguration: [ // CustomDNSConfiguration
 * //     { // CustomDNSServer
 * //       customDNSServerName: "STRING_VALUE", // required
 * //       customDNSServerIP: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * //   updateTimestamp: new Date("TIMESTAMP"),
 * //   availabilityZoneIds: [ // AvailabilityZoneIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateKxEnvironmentCommandInput - {@link UpdateKxEnvironmentCommandInput}
 * @returns {@link UpdateKxEnvironmentCommandOutput}
 * @see {@link UpdateKxEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateKxEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class UpdateKxEnvironmentCommand extends $Command
  .classBuilder<
    UpdateKxEnvironmentCommandInput,
    UpdateKxEnvironmentCommandOutput,
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
  .s("AWSHabaneroManagementService", "UpdateKxEnvironment", {})
  .n("FinspaceClient", "UpdateKxEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKxEnvironmentCommand)
  .de(de_UpdateKxEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxEnvironmentRequest;
      output: UpdateKxEnvironmentResponse;
    };
    sdk: {
      input: UpdateKxEnvironmentCommandInput;
      output: UpdateKxEnvironmentCommandOutput;
    };
  };
}

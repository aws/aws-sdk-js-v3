// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { GetMemberInput, GetMemberOutput } from "../models/models_0";
import { GetMember } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMemberCommand}.
 */
export interface GetMemberCommandInput extends GetMemberInput {}
/**
 * @public
 *
 * The output of {@link GetMemberCommand}.
 */
export interface GetMemberCommandOutput extends GetMemberOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about a member.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetMemberCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetMemberInput
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 * };
 * const command = new GetMemberCommand(input);
 * const response = await client.send(command);
 * // { // GetMemberOutput
 * //   Member: { // Member
 * //     NetworkId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     FrameworkAttributes: { // MemberFrameworkAttributes
 * //       Fabric: { // MemberFabricAttributes
 * //         AdminUsername: "STRING_VALUE",
 * //         CaEndpoint: "STRING_VALUE",
 * //       },
 * //     },
 * //     LogPublishingConfiguration: { // MemberLogPublishingConfiguration
 * //       Fabric: { // MemberFabricLogPublishingConfiguration
 * //         CaLogs: { // LogConfigurations
 * //           Cloudwatch: { // LogConfiguration
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //     Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "INACCESSIBLE_ENCRYPTION_KEY",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMemberCommandInput - {@link GetMemberCommandInput}
 * @returns {@link GetMemberCommandOutput}
 * @see {@link GetMemberCommandInput} for command's `input` shape.
 * @see {@link GetMemberCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 *
 * @public
 */
export class GetMemberCommand extends $Command
  .classBuilder<
    GetMemberCommandInput,
    GetMemberCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "GetMember", {})
  .n("ManagedBlockchainClient", "GetMemberCommand")
  .sc(GetMember)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMemberInput;
      output: GetMemberOutput;
    };
    sdk: {
      input: GetMemberCommandInput;
      output: GetMemberCommandOutput;
    };
  };
}

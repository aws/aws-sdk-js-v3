// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceAccessDetailsRequest, GetInstanceAccessDetailsResult } from "../models/models_1";
import { de_GetInstanceAccessDetailsCommand, se_GetInstanceAccessDetailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceAccessDetailsCommand}.
 */
export interface GetInstanceAccessDetailsCommandInput extends GetInstanceAccessDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceAccessDetailsCommand}.
 */
export interface GetInstanceAccessDetailsCommandOutput extends GetInstanceAccessDetailsResult, __MetadataBearer {}

/**
 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or
 *         <i>instance</i>.</p>
 *          <p>The <code>get instance access details</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by <code>instance name</code>. For more
 *       information, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceAccessDetailsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceAccessDetailsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetInstanceAccessDetailsRequest
 *   instanceName: "STRING_VALUE", // required
 *   protocol: "ssh" || "rdp",
 * };
 * const command = new GetInstanceAccessDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceAccessDetailsResult
 * //   accessDetails: { // InstanceAccessDetails
 * //     certKey: "STRING_VALUE",
 * //     expiresAt: new Date("TIMESTAMP"),
 * //     ipAddress: "STRING_VALUE",
 * //     ipv6Addresses: [ // Ipv6AddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     password: "STRING_VALUE",
 * //     passwordData: { // PasswordData
 * //       ciphertext: "STRING_VALUE",
 * //       keyPairName: "STRING_VALUE",
 * //     },
 * //     privateKey: "STRING_VALUE",
 * //     protocol: "ssh" || "rdp",
 * //     instanceName: "STRING_VALUE",
 * //     username: "STRING_VALUE",
 * //     hostKeys: [ // HostKeysList
 * //       { // HostKeyAttributes
 * //         algorithm: "STRING_VALUE",
 * //         publicKey: "STRING_VALUE",
 * //         witnessedAt: new Date("TIMESTAMP"),
 * //         fingerprintSHA1: "STRING_VALUE",
 * //         fingerprintSHA256: "STRING_VALUE",
 * //         notValidBefore: new Date("TIMESTAMP"),
 * //         notValidAfter: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceAccessDetailsCommandInput - {@link GetInstanceAccessDetailsCommandInput}
 * @returns {@link GetInstanceAccessDetailsCommandOutput}
 * @see {@link GetInstanceAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetInstanceAccessDetailsCommand extends $Command
  .classBuilder<
    GetInstanceAccessDetailsCommandInput,
    GetInstanceAccessDetailsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetInstanceAccessDetails", {})
  .n("LightsailClient", "GetInstanceAccessDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceAccessDetailsCommand)
  .de(de_GetInstanceAccessDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceAccessDetailsRequest;
      output: GetInstanceAccessDetailsResult;
    };
    sdk: {
      input: GetInstanceAccessDetailsCommandInput;
      output: GetInstanceAccessDetailsCommandOutput;
    };
  };
}

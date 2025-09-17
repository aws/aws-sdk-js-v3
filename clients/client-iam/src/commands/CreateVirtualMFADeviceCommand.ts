// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceResponse,
  CreateVirtualMFADeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateVirtualMFADeviceCommand, se_CreateVirtualMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVirtualMFADeviceCommand}.
 */
export interface CreateVirtualMFADeviceCommandInput extends CreateVirtualMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link CreateVirtualMFADeviceCommand}.
 */
export interface CreateVirtualMFADeviceCommandOutput extends CreateVirtualMFADeviceResponse, __MetadataBearer {}

/**
 * <p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual
 *             MFA, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html">EnableMFADevice</a> to
 *             attach the MFA device to an IAM user. For more information about creating and working
 *             with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>The seed information contained in the QR code and the Base32 string should be
 *                 treated like any other secret access information. In other words, protect the seed
 *                 information as you would your Amazon Web Services access keys or your passwords. After you
 *                 provision your virtual device, you should ensure that the information is destroyed
 *                 following secure procedures.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateVirtualMFADeviceRequest
 *   Path: "STRING_VALUE",
 *   VirtualMFADeviceName: "STRING_VALUE", // required
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualMFADeviceResponse
 * //   VirtualMFADevice: { // VirtualMFADevice
 * //     SerialNumber: "STRING_VALUE", // required
 * //     Base32StringSeed: new Uint8Array(),
 * //     QRCodePNG: new Uint8Array(),
 * //     User: { // User
 * //       Path: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       PasswordLastUsed: new Date("TIMESTAMP"),
 * //       PermissionsBoundary: { // AttachedPermissionsBoundary
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     EnableDate: new Date("TIMESTAMP"),
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVirtualMFADeviceCommandInput - {@link CreateVirtualMFADeviceCommandInput}
 * @returns {@link CreateVirtualMFADeviceCommandOutput}
 * @see {@link CreateVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class CreateVirtualMFADeviceCommand extends $Command
  .classBuilder<
    CreateVirtualMFADeviceCommandInput,
    CreateVirtualMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "CreateVirtualMFADevice", {})
  .n("IAMClient", "CreateVirtualMFADeviceCommand")
  .f(void 0, CreateVirtualMFADeviceResponseFilterSensitiveLog)
  .ser(se_CreateVirtualMFADeviceCommand)
  .de(de_CreateVirtualMFADeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVirtualMFADeviceRequest;
      output: CreateVirtualMFADeviceResponse;
    };
    sdk: {
      input: CreateVirtualMFADeviceCommandInput;
      output: CreateVirtualMFADeviceCommandOutput;
    };
  };
}

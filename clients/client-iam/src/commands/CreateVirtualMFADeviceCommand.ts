// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVirtualMFADeviceRequest, CreateVirtualMFADeviceResponse } from "../models/models_0";
import { CreateVirtualMFADevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use [EnableMFADevice](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html) to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see [Using a virtual MFA device](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html) in the *IAM User Guide*.
 *
 * For information about the maximum number of MFA devices you can create, see [IAM and STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
 *
 * > **Important:** The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.
 *
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
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class CreateVirtualMFADeviceCommand extends command<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput>(
  _ep0,
  _mw0,
  "CreateVirtualMFADevice",
  CreateVirtualMFADevice$
) {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListVirtualMFADevicesRequest, ListVirtualMFADevicesResponse } from "../models/models_0";
import { ListVirtualMFADevices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualMFADevicesCommand}.
 */
export interface ListVirtualMFADevicesCommandInput extends ListVirtualMFADevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListVirtualMFADevicesCommand}.
 */
export interface ListVirtualMFADevicesCommandOutput extends ListVirtualMFADevicesResponse, __MetadataBearer {}

/**
 * <p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If
 *             you do not specify an assignment status, the operation returns a list of all virtual MFA
 *             devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or
 *                 <code>Any</code>.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html">ListMFADeviceTags</a>.</p>
 *          </note>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListVirtualMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListVirtualMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListVirtualMFADevicesRequest
 *   AssignmentStatus: "Assigned" || "Unassigned" || "Any",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListVirtualMFADevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualMFADevicesResponse
 * //   VirtualMFADevices: [ // virtualMFADeviceListType // required
 * //     { // VirtualMFADevice
 * //       SerialNumber: "STRING_VALUE", // required
 * //       Base32StringSeed: new Uint8Array(),
 * //       QRCodePNG: new Uint8Array(),
 * //       User: { // User
 * //         Path: "STRING_VALUE", // required
 * //         UserName: "STRING_VALUE", // required
 * //         UserId: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         CreateDate: new Date("TIMESTAMP"), // required
 * //         PasswordLastUsed: new Date("TIMESTAMP"),
 * //         PermissionsBoundary: { // AttachedPermissionsBoundary
 * //           PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //           PermissionsBoundaryArn: "STRING_VALUE",
 * //         },
 * //         Tags: [ // tagListType
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       EnableDate: new Date("TIMESTAMP"),
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualMFADevicesCommandInput - {@link ListVirtualMFADevicesCommandInput}
 * @returns {@link ListVirtualMFADevicesCommandOutput}
 * @see {@link ListVirtualMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To list virtual MFA devices
 * ```javascript
 * // The following command lists the virtual MFA devices that have been configured for the current account.
 * const input = { /* empty *\/ };
 * const command = new ListVirtualMFADevicesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VirtualMFADevices: [
 *     {
 *       SerialNumber: "arn:aws:iam::123456789012:mfa/ExampleMFADevice"
 *     },
 *     {
 *       SerialNumber: "arn:aws:iam::123456789012:mfa/Juan"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListVirtualMFADevicesCommand extends $Command
  .classBuilder<
    ListVirtualMFADevicesCommandInput,
    ListVirtualMFADevicesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListVirtualMFADevices", {})
  .n("IAMClient", "ListVirtualMFADevicesCommand")
  .sc(ListVirtualMFADevices$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualMFADevicesRequest;
      output: ListVirtualMFADevicesResponse;
    };
    sdk: {
      input: ListVirtualMFADevicesCommandInput;
      output: ListVirtualMFADevicesCommandOutput;
    };
  };
}

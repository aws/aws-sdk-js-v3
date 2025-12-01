// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListMFADevicesRequest, ListMFADevicesResponse } from "../models/models_0";
import { ListMFADevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMFADevicesCommand}.
 */
export interface ListMFADevicesCommandInput extends ListMFADevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListMFADevicesCommand}.
 */
export interface ListMFADevicesCommandOutput extends ListMFADevicesResponse, __MetadataBearer {}

/**
 * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name,
 *             then this operation lists all the MFA devices associated with the specified user. If you
 *             do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services
 *             access key ID signing the request for this operation.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListMFADevicesRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListMFADevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListMFADevicesResponse
 * //   MFADevices: [ // mfaDeviceListType // required
 * //     { // MFADevice
 * //       UserName: "STRING_VALUE", // required
 * //       SerialNumber: "STRING_VALUE", // required
 * //       EnableDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMFADevicesCommandInput - {@link ListMFADevicesCommandInput}
 * @returns {@link ListMFADevicesCommandOutput}
 * @see {@link ListMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
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
export class ListMFADevicesCommand extends $Command
  .classBuilder<
    ListMFADevicesCommandInput,
    ListMFADevicesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListMFADevices", {})
  .n("IAMClient", "ListMFADevicesCommand")
  .sc(ListMFADevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMFADevicesRequest;
      output: ListMFADevicesResponse;
    };
    sdk: {
      input: ListMFADevicesCommandInput;
      output: ListMFADevicesCommandOutput;
    };
  };
}

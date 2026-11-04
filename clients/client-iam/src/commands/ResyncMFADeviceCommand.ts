// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResyncMFADeviceRequest } from "../models/models_0";
import { ResyncMFADevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResyncMFADeviceCommand}.
 */
export interface ResyncMFADeviceCommandInput extends ResyncMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link ResyncMFADeviceCommand}.
 */
export interface ResyncMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.
 *
 * For more information about creating and working with virtual MFA devices, see [Using a virtual MFA device](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResyncMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResyncMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ResyncMFADeviceRequest
 *   UserName: "STRING_VALUE", // required
 *   SerialNumber: "STRING_VALUE", // required
 *   AuthenticationCode1: "STRING_VALUE", // required
 *   AuthenticationCode2: "STRING_VALUE", // required
 * };
 * const command = new ResyncMFADeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResyncMFADeviceCommandInput - {@link ResyncMFADeviceCommandInput}
 * @returns {@link ResyncMFADeviceCommandOutput}
 * @see {@link ResyncMFADeviceCommandInput} for command's `input` shape.
 * @see {@link ResyncMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link InvalidAuthenticationCodeException} (client fault)
 *
 * The request was rejected because the authentication code was not recognized. The error message describes the specific error.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
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
export class ResyncMFADeviceCommand extends command<ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput>(
  _ep0,
  _mw0,
  "ResyncMFADevice",
  ResyncMFADevice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResyncMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: ResyncMFADeviceCommandInput;
      output: ResyncMFADeviceCommandOutput;
    };
  };
}

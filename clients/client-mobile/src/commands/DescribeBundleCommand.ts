// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { DescribeBundleRequest, DescribeBundleResult } from "../models/models_0";
import { de_DescribeBundleCommand, se_DescribeBundleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBundleCommand}.
 */
export interface DescribeBundleCommandInput extends DescribeBundleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBundleCommand}.
 */
export interface DescribeBundleCommandOutput extends DescribeBundleResult, __MetadataBearer {}

/**
 * <p>
 *             Get the bundle details for the requested bundle id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const input = { // DescribeBundleRequest
 *   bundleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBundleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBundleResult
 * //   details: { // BundleDetails
 * //     bundleId: "STRING_VALUE",
 * //     title: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     iconUrl: "STRING_VALUE",
 * //     availablePlatforms: [ // Platforms
 * //       "OSX" || "WINDOWS" || "LINUX" || "OBJC" || "SWIFT" || "ANDROID" || "JAVASCRIPT",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBundleCommandInput - {@link DescribeBundleCommandInput}
 * @returns {@link DescribeBundleCommandOutput}
 * @see {@link DescribeBundleCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>
 *             The request cannot be processed because some parameter is not valid or the project
 *             state prevents the operation from being performed.
 *         </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>
 *             The service has encountered an unexpected error condition which prevents it from
 *             servicing the request.
 *         </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>
 *             No entity can be found with the specified identifier.
 *         </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>
 *             Credentials of the caller are insufficient to authorize the request.
 *         </p>
 *
 * @throws {@link MobileServiceException}
 * <p>Base exception class for all service exceptions from Mobile service.</p>
 *
 * @public
 */
export class DescribeBundleCommand extends $Command
  .classBuilder<
    DescribeBundleCommandInput,
    DescribeBundleCommandOutput,
    MobileClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MobileClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMobileService", "DescribeBundle", {})
  .n("MobileClient", "DescribeBundleCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBundleCommand)
  .de(de_DescribeBundleCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { GetDistributionBundlesRequest, GetDistributionBundlesResult } from "../models/models_0";
import { GetDistributionBundles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionBundlesCommand}.
 */
export interface GetDistributionBundlesCommandInput extends GetDistributionBundlesRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionBundlesCommand}.
 */
export interface GetDistributionBundlesCommandOutput extends GetDistributionBundlesResult, __MetadataBearer {}

/**
 * <p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network
 *       (CDN) distributions.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new GetDistributionBundlesCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionBundlesResult
 * //   bundles: [ // DistributionBundleList
 * //     { // DistributionBundle
 * //       bundleId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       price: Number("float"),
 * //       transferPerMonthInGb: Number("int"),
 * //       isActive: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDistributionBundlesCommandInput - {@link GetDistributionBundlesCommandInput}
 * @returns {@link GetDistributionBundlesCommandOutput}
 * @see {@link GetDistributionBundlesCommandInput} for command's `input` shape.
 * @see {@link GetDistributionBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
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
export class GetDistributionBundlesCommand extends $Command
  .classBuilder<
    GetDistributionBundlesCommandInput,
    GetDistributionBundlesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetDistributionBundles", {})
  .n("LightsailClient", "GetDistributionBundlesCommand")
  .sc(GetDistributionBundles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDistributionBundlesResult;
    };
    sdk: {
      input: GetDistributionBundlesCommandInput;
      output: GetDistributionBundlesCommandOutput;
    };
  };
}

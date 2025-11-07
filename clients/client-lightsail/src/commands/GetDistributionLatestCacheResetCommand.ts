// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDistributionLatestCacheResetRequest, GetDistributionLatestCacheResetResult } from "../models/models_1";
import { GetDistributionLatestCacheReset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionLatestCacheResetCommand}.
 */
export interface GetDistributionLatestCacheResetCommandInput extends GetDistributionLatestCacheResetRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionLatestCacheResetCommand}.
 */
export interface GetDistributionLatestCacheResetCommandOutput
  extends GetDistributionLatestCacheResetResult,
    __MetadataBearer {}

/**
 * <p>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail
 *       content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionLatestCacheResetCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionLatestCacheResetCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetDistributionLatestCacheResetRequest
 *   distributionName: "STRING_VALUE",
 * };
 * const command = new GetDistributionLatestCacheResetCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionLatestCacheResetResult
 * //   status: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDistributionLatestCacheResetCommandInput - {@link GetDistributionLatestCacheResetCommandInput}
 * @returns {@link GetDistributionLatestCacheResetCommandOutput}
 * @see {@link GetDistributionLatestCacheResetCommandInput} for command's `input` shape.
 * @see {@link GetDistributionLatestCacheResetCommandOutput} for command's `response` shape.
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
export class GetDistributionLatestCacheResetCommand extends $Command
  .classBuilder<
    GetDistributionLatestCacheResetCommandInput,
    GetDistributionLatestCacheResetCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetDistributionLatestCacheReset", {})
  .n("LightsailClient", "GetDistributionLatestCacheResetCommand")
  .sc(GetDistributionLatestCacheReset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDistributionLatestCacheResetRequest;
      output: GetDistributionLatestCacheResetResult;
    };
    sdk: {
      input: GetDistributionLatestCacheResetCommandInput;
      output: GetDistributionLatestCacheResetCommandOutput;
    };
  };
}

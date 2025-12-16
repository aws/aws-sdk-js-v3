// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/models_0";
import { DescribePatchProperties$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchPropertiesCommand}.
 */
export interface DescribePatchPropertiesCommandInput extends DescribePatchPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribePatchPropertiesCommand}.
 */
export interface DescribePatchPropertiesCommandOutput extends DescribePatchPropertiesResult, __MetadataBearer {}

/**
 * <p>Lists the properties of available patches organized by product, product family,
 *    classification, severity, and other properties of available patches. You can use the reported
 *    properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p>
 *          <p>The following section lists the properties that can be used in filters for each major
 *    operating system type:</p>
 *          <dl>
 *             <dt>AMAZON_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>AMAZON_LINUX_2</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>AMAZON_LINUX_2023</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>CENTOS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>DEBIAN</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code>
 *                </p>
 *             </dd>
 *             <dt>MACOS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code>
 *                </p>
 *             </dd>
 *             <dt>ORACLE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>REDHAT_ENTERPRISE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>SUSE</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>UBUNTU</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code>
 *                </p>
 *             </dd>
 *             <dt>WINDOWS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> |
 *        <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchPropertiesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchPropertiesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribePatchPropertiesRequest
 *   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023", // required
 *   Property: "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "MSRC_SEVERITY" || "PRIORITY" || "SEVERITY", // required
 *   PatchSet: "OS" || "APPLICATION",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePatchPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchPropertiesResult
 * //   Properties: [ // PatchPropertiesList
 * //     { // PatchPropertyEntry
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePatchPropertiesCommandInput - {@link DescribePatchPropertiesCommandInput}
 * @returns {@link DescribePatchPropertiesCommandOutput}
 * @see {@link DescribePatchPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchPropertiesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribePatchPropertiesCommand extends $Command
  .classBuilder<
    DescribePatchPropertiesCommandInput,
    DescribePatchPropertiesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribePatchProperties", {})
  .n("SSMClient", "DescribePatchPropertiesCommand")
  .sc(DescribePatchProperties$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePatchPropertiesRequest;
      output: DescribePatchPropertiesResult;
    };
    sdk: {
      input: DescribePatchPropertiesCommandInput;
      output: DescribePatchPropertiesCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/models_0";
import { DescribePatchProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as CreatePatchBaseline, UpdatePatchBaseline, DescribeAvailablePatches, and DescribePatchBaselines.
 *
 * The following section lists the properties that can be used in filters for each major operating system type:
 *
 * - **AMAZON_LINUX**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **AMAZON_LINUX_2**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **AMAZON_LINUX_2023**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **CENTOS**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **DEBIAN**
 *
 *   Valid properties: `PRODUCT` | `PRIORITY`
 *
 * - **MACOS**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION`
 *
 * - **ORACLE_LINUX**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **REDHAT_ENTERPRISE_LINUX**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **SUSE**
 *
 *   Valid properties: `PRODUCT` | `CLASSIFICATION` | `SEVERITY`
 *
 * - **UBUNTU**
 *
 *   Valid properties: `PRODUCT` | `PRIORITY`
 *
 * - **WINDOWS**
 *
 *   Valid properties: `PRODUCT` | `PRODUCT_FAMILY` | `CLASSIFICATION` | `MSRC_SEVERITY`
 *
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribePatchPropertiesCommand extends command<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "DescribePatchProperties",
  DescribePatchProperties$
) {
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

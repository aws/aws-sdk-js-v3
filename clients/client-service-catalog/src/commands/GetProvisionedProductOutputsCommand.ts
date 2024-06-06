// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetProvisionedProductOutputsInput, GetProvisionedProductOutputsOutput } from "../models/models_0";
import {
  de_GetProvisionedProductOutputsCommand,
  se_GetProvisionedProductOutputsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProvisionedProductOutputsCommand}.
 */
export interface GetProvisionedProductOutputsCommandInput extends GetProvisionedProductOutputsInput {}
/**
 * @public
 *
 * The output of {@link GetProvisionedProductOutputsCommand}.
 */
export interface GetProvisionedProductOutputsCommandOutput
  extends GetProvisionedProductOutputsOutput,
    __MetadataBearer {}

/**
 * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetProvisionedProductOutputsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetProvisionedProductOutputsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // GetProvisionedProductOutputsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE",
 *   ProvisionedProductName: "STRING_VALUE",
 *   OutputKeys: [ // OutputKeys
 *     "STRING_VALUE",
 *   ],
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new GetProvisionedProductOutputsCommand(input);
 * const response = await client.send(command);
 * // { // GetProvisionedProductOutputsOutput
 * //   Outputs: [ // RecordOutputs
 * //     { // RecordOutput
 * //       OutputKey: "STRING_VALUE",
 * //       OutputValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProvisionedProductOutputsCommandInput - {@link GetProvisionedProductOutputsCommandInput}
 * @returns {@link GetProvisionedProductOutputsCommandOutput}
 * @see {@link GetProvisionedProductOutputsCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedProductOutputsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class GetProvisionedProductOutputsCommand extends $Command
  .classBuilder<
    GetProvisionedProductOutputsCommandInput,
    GetProvisionedProductOutputsCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "GetProvisionedProductOutputs", {})
  .n("ServiceCatalogClient", "GetProvisionedProductOutputsCommand")
  .f(void 0, void 0)
  .ser(se_GetProvisionedProductOutputsCommand)
  .de(de_GetProvisionedProductOutputsCommand)
  .build() {}

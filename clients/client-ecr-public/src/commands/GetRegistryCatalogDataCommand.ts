// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRegistryCatalogDataRequest, GetRegistryCatalogDataResponse } from "../models/models_0";
import { de_GetRegistryCatalogDataCommand, se_GetRegistryCatalogDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryCatalogDataCommand}.
 */
export interface GetRegistryCatalogDataCommandInput extends GetRegistryCatalogDataRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistryCatalogDataCommand}.
 */
export interface GetRegistryCatalogDataCommandOutput extends GetRegistryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves catalog metadata for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = {};
 * const command = new GetRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryCatalogDataResponse
 * //   registryCatalogData: { // RegistryCatalogData
 * //     displayName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRegistryCatalogDataCommandInput - {@link GetRegistryCatalogDataCommandInput}
 * @returns {@link GetRegistryCatalogDataCommandOutput}
 * @see {@link GetRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 * @public
 */
export class GetRegistryCatalogDataCommand extends $Command
  .classBuilder<
    GetRegistryCatalogDataCommandInput,
    GetRegistryCatalogDataCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SpencerFrontendService", "GetRegistryCatalogData", {})
  .n("ECRPUBLICClient", "GetRegistryCatalogDataCommand")
  .f(void 0, void 0)
  .ser(se_GetRegistryCatalogDataCommand)
  .de(de_GetRegistryCatalogDataCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDatasourcePackagesRequest } from "../models/models_0";
import { de_UpdateDatasourcePackagesCommand, se_UpdateDatasourcePackagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasourcePackagesCommand}.
 */
export interface UpdateDatasourcePackagesCommandInput extends UpdateDatasourcePackagesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasourcePackagesCommand}.
 */
export interface UpdateDatasourcePackagesCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts a data source package for the Detective behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, UpdateDatasourcePackagesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, UpdateDatasourcePackagesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // UpdateDatasourcePackagesRequest
 *   GraphArn: "STRING_VALUE", // required
 *   DatasourcePackages: [ // DatasourcePackageList // required
 *     "DETECTIVE_CORE" || "EKS_AUDIT" || "ASFF_SECURITYHUB_FINDING",
 *   ],
 * };
 * const command = new UpdateDatasourcePackagesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatasourcePackagesCommandInput - {@link UpdateDatasourcePackagesCommandInput}
 * @returns {@link UpdateDatasourcePackagesCommandOutput}
 * @see {@link UpdateDatasourcePackagesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasourcePackagesCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>This request cannot be completed if it would cause the number of member accounts in the
 *             behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200
 *             member accounts.</p>
 *             </li>
 *             <li>
 *                <p>This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class UpdateDatasourcePackagesCommand extends $Command
  .classBuilder<
    UpdateDatasourcePackagesCommandInput,
    UpdateDatasourcePackagesCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDetective", "UpdateDatasourcePackages", {})
  .n("DetectiveClient", "UpdateDatasourcePackagesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDatasourcePackagesCommand)
  .de(de_UpdateDatasourcePackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasourcePackagesRequest;
      output: {};
    };
    sdk: {
      input: UpdateDatasourcePackagesCommandInput;
      output: UpdateDatasourcePackagesCommandOutput;
    };
  };
}

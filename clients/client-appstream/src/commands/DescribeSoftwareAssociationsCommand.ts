// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSoftwareAssociationsRequest, DescribeSoftwareAssociationsResult } from "../models/models_0";
import { DescribeSoftwareAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSoftwareAssociationsCommand}.
 */
export interface DescribeSoftwareAssociationsCommandInput extends DescribeSoftwareAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSoftwareAssociationsCommand}.
 */
export interface DescribeSoftwareAssociationsCommandOutput
  extends DescribeSoftwareAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves license included application associations for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeSoftwareAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeSoftwareAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeSoftwareAssociationsRequest
 *   AssociatedResource: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSoftwareAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSoftwareAssociationsResult
 * //   AssociatedResource: "STRING_VALUE",
 * //   SoftwareAssociations: [ // SoftwareAssociationsList
 * //     { // SoftwareAssociations
 * //       SoftwareName: "STRING_VALUE",
 * //       Status: "STAGED_FOR_INSTALLATION" || "PENDING_INSTALLATION" || "INSTALLED" || "STAGED_FOR_UNINSTALLATION" || "PENDING_UNINSTALLATION" || "FAILED_TO_INSTALL" || "FAILED_TO_UNINSTALL",
 * //       DeploymentError: [ // ErrorDetailsList
 * //         { // ErrorDetails
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSoftwareAssociationsCommandInput - {@link DescribeSoftwareAssociationsCommandInput}
 * @returns {@link DescribeSoftwareAssociationsCommandOutput}
 * @see {@link DescribeSoftwareAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeSoftwareAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeSoftwareAssociationsCommand extends $Command
  .classBuilder<
    DescribeSoftwareAssociationsCommandInput,
    DescribeSoftwareAssociationsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeSoftwareAssociations", {})
  .n("AppStreamClient", "DescribeSoftwareAssociationsCommand")
  .sc(DescribeSoftwareAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSoftwareAssociationsRequest;
      output: DescribeSoftwareAssociationsResult;
    };
    sdk: {
      input: DescribeSoftwareAssociationsCommandInput;
      output: DescribeSoftwareAssociationsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListApplicationInstanceDependenciesRequest,
  ListApplicationInstanceDependenciesResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_ListApplicationInstanceDependenciesCommand,
  se_ListApplicationInstanceDependenciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationInstanceDependenciesCommand}.
 */
export interface ListApplicationInstanceDependenciesCommandInput extends ListApplicationInstanceDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationInstanceDependenciesCommand}.
 */
export interface ListApplicationInstanceDependenciesCommandOutput
  extends ListApplicationInstanceDependenciesResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of application instance dependencies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListApplicationInstanceDependenciesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListApplicationInstanceDependenciesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ListApplicationInstanceDependenciesRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationInstanceDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationInstanceDependenciesResponse
 * //   PackageObjects: [ // PackageObjects
 * //     { // PackageObject
 * //       Name: "STRING_VALUE", // required
 * //       PackageVersion: "STRING_VALUE", // required
 * //       PatchVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationInstanceDependenciesCommandInput - {@link ListApplicationInstanceDependenciesCommandInput}
 * @returns {@link ListApplicationInstanceDependenciesCommandOutput}
 * @see {@link ListApplicationInstanceDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationInstanceDependenciesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class ListApplicationInstanceDependenciesCommand extends $Command
  .classBuilder<
    ListApplicationInstanceDependenciesCommandInput,
    ListApplicationInstanceDependenciesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "ListApplicationInstanceDependencies", {})
  .n("PanoramaClient", "ListApplicationInstanceDependenciesCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationInstanceDependenciesCommand)
  .de(de_ListApplicationInstanceDependenciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationInstanceDependenciesRequest;
      output: ListApplicationInstanceDependenciesResponse;
    };
    sdk: {
      input: ListApplicationInstanceDependenciesCommandInput;
      output: ListApplicationInstanceDependenciesCommandOutput;
    };
  };
}

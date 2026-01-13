// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPackagesRequest, ListPackagesResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListPackages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPackagesCommand}.
 */
export interface ListPackagesCommandInput extends ListPackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagesCommand}.
 */
export interface ListPackagesCommandOutput extends ListPackagesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListPackagesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListPackagesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListPackagesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagesResponse
 * //   Packages: [ // PackageList
 * //     { // PackageListItem
 * //       PackageId: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPackagesCommandInput - {@link ListPackagesCommandInput}
 * @returns {@link ListPackagesCommandOutput}
 * @see {@link ListPackagesCommandInput} for command's `input` shape.
 * @see {@link ListPackagesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class ListPackagesCommand extends $Command
  .classBuilder<
    ListPackagesCommandInput,
    ListPackagesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListPackages", {})
  .n("PanoramaClient", "ListPackagesCommand")
  .sc(ListPackages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackagesRequest;
      output: ListPackagesResponse;
    };
    sdk: {
      input: ListPackagesCommandInput;
      output: ListPackagesCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListApplicationInstanceNodeInstancesRequest,
  ListApplicationInstanceNodeInstancesResponse,
} from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListApplicationInstanceNodeInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationInstanceNodeInstancesCommand}.
 */
export interface ListApplicationInstanceNodeInstancesCommandInput extends ListApplicationInstanceNodeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationInstanceNodeInstancesCommand}.
 */
export interface ListApplicationInstanceNodeInstancesCommandOutput
  extends ListApplicationInstanceNodeInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of application node instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListApplicationInstanceNodeInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListApplicationInstanceNodeInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListApplicationInstanceNodeInstancesRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationInstanceNodeInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationInstanceNodeInstancesResponse
 * //   NodeInstances: [ // NodeInstances
 * //     { // NodeInstance
 * //       NodeInstanceId: "STRING_VALUE", // required
 * //       NodeId: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE",
 * //       PackageVersion: "STRING_VALUE",
 * //       PackagePatchVersion: "STRING_VALUE",
 * //       NodeName: "STRING_VALUE",
 * //       CurrentStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationInstanceNodeInstancesCommandInput - {@link ListApplicationInstanceNodeInstancesCommandInput}
 * @returns {@link ListApplicationInstanceNodeInstancesCommandOutput}
 * @see {@link ListApplicationInstanceNodeInstancesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationInstanceNodeInstancesCommandOutput} for command's `response` shape.
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
export class ListApplicationInstanceNodeInstancesCommand extends $Command
  .classBuilder<
    ListApplicationInstanceNodeInstancesCommandInput,
    ListApplicationInstanceNodeInstancesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListApplicationInstanceNodeInstances", {})
  .n("PanoramaClient", "ListApplicationInstanceNodeInstancesCommand")
  .sc(ListApplicationInstanceNodeInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationInstanceNodeInstancesRequest;
      output: ListApplicationInstanceNodeInstancesResponse;
    };
    sdk: {
      input: ListApplicationInstanceNodeInstancesCommandInput;
      output: ListApplicationInstanceNodeInstancesCommandOutput;
    };
  };
}

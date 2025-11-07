// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddRegionRequest, AddRegionResult } from "../models/models_0";
import { AddRegion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddRegionCommand}.
 */
export interface AddRegionCommandInput extends AddRegionRequest {}
/**
 * @public
 *
 * The output of {@link AddRegionCommand}.
 */
export interface AddRegionCommandOutput extends AddRegionResult, __MetadataBearer {}

/**
 * <p>Adds two domain controllers in the specified Region for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AddRegionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AddRegionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // AddRegionRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 *   VPCSettings: { // DirectoryVpcSettings
 *     VpcId: "STRING_VALUE", // required
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AddRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRegionCommandInput - {@link AddRegionCommandInput}
 * @returns {@link AddRegionCommandOutput}
 * @see {@link AddRegionCommandInput} for command's `input` shape.
 * @see {@link AddRegionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryAlreadyInRegionException} (client fault)
 *  <p>The Region you specified is the same Region where the Managed Microsoft AD directory was created.
 *       Specify a different Region and try again.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link RegionLimitExceededException} (client fault)
 *  <p>You have reached the limit for maximum number of simultaneous Region replications per
 *       directory.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class AddRegionCommand extends $Command
  .classBuilder<
    AddRegionCommandInput,
    AddRegionCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "AddRegion", {})
  .n("DirectoryServiceClient", "AddRegionCommand")
  .sc(AddRegion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddRegionRequest;
      output: {};
    };
    sdk: {
      input: AddRegionCommandInput;
      output: AddRegionCommandOutput;
    };
  };
}

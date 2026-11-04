// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddRegionRequest, AddRegionResult } from "../models/models_0";
import { AddRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds two domain controllers in the specified Region for the specified directory.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryAlreadyInRegionException} (client fault)
 *
 * The Region you specified is the same Region where the Managed Microsoft AD directory was created. Specify a different Region and try again.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link RegionLimitExceededException} (client fault)
 *
 * You have reached the limit for maximum number of simultaneous Region replications per directory.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class AddRegionCommand extends command<AddRegionCommandInput, AddRegionCommandOutput>(
  _ep0,
  _mw0,
  "AddRegion",
  AddRegion$
) {
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

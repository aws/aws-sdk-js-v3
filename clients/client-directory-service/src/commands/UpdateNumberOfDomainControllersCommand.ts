// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult } from "../models/models_0";
import { UpdateNumberOfDomainControllers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNumberOfDomainControllersCommand}.
 */
export interface UpdateNumberOfDomainControllersCommandInput extends UpdateNumberOfDomainControllersRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNumberOfDomainControllersCommand}.
 */
export interface UpdateNumberOfDomainControllersCommandOutput extends UpdateNumberOfDomainControllersResult, __MetadataBearer {}

/**
 * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateNumberOfDomainControllersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   DesiredNumber: Number("int"), // required
 * };
 * const command = new UpdateNumberOfDomainControllersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNumberOfDomainControllersCommandInput - {@link UpdateNumberOfDomainControllersCommandInput}
 * @returns {@link UpdateNumberOfDomainControllersCommandOutput}
 * @see {@link UpdateNumberOfDomainControllersCommandInput} for command's `input` shape.
 * @see {@link UpdateNumberOfDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link DomainControllerLimitExceededException} (client fault)
 *
 * The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
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
export class UpdateNumberOfDomainControllersCommand extends command<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNumberOfDomainControllers",
  UpdateNumberOfDomainControllers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNumberOfDomainControllersRequest;
      output: {};
    };
    sdk: {
      input: UpdateNumberOfDomainControllersCommandInput;
      output: UpdateNumberOfDomainControllersCommandOutput;
    };
  };
}

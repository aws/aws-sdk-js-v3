// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult } from "../models/models_0";
import {
  de_UpdateNumberOfDomainControllersCommand,
  se_UpdateNumberOfDomainControllersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateNumberOfDomainControllersCommandOutput
  extends UpdateNumberOfDomainControllersResult,
    __MetadataBearer {}

/**
 * <p>Adds or removes domain controllers to or from the directory. Based on the difference
 *       between current value and new value (provided through this API call), domain controllers will
 *       be added or removed. It may take up to 45 minutes for any new domain controllers to become
 *       fully active once the requested number of domain controllers is updated. During this time, you
 *       cannot make another update request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
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
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link DomainControllerLimitExceededException} (client fault)
 *  <p>The maximum allowed number of domain controllers per directory was exceeded. The
 *       default limit per directory is 20 domain controllers.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
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
export class UpdateNumberOfDomainControllersCommand extends $Command
  .classBuilder<
    UpdateNumberOfDomainControllersCommandInput,
    UpdateNumberOfDomainControllersCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "UpdateNumberOfDomainControllers", {})
  .n("DirectoryServiceClient", "UpdateNumberOfDomainControllersCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNumberOfDomainControllersCommand)
  .de(de_UpdateNumberOfDomainControllersCommand)
  .build() {
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

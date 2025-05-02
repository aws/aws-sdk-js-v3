// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveIpRoutesRequest, RemoveIpRoutesResult } from "../models/models_0";
import { de_RemoveIpRoutesCommand, se_RemoveIpRoutesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveIpRoutesCommand}.
 */
export interface RemoveIpRoutesCommandInput extends RemoveIpRoutesRequest {}
/**
 * @public
 *
 * The output of {@link RemoveIpRoutesCommand}.
 */
export interface RemoveIpRoutesCommandOutput extends RemoveIpRoutesResult, __MetadataBearer {}

/**
 * <p>Removes IP address blocks from a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // RemoveIpRoutesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   CidrIps: [ // CidrIps // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveIpRoutesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveIpRoutesCommandInput - {@link RemoveIpRoutesCommandInput}
 * @returns {@link RemoveIpRoutesCommandOutput}
 * @see {@link RemoveIpRoutesCommandInput} for command's `input` shape.
 * @see {@link RemoveIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
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
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To remove IP routes
 * ```javascript
 * // The following example removes IP address blocks from a specified directory.
 * const input = {
 *   CidrIps: [
 *     "12.12.12.12/32"
 *   ],
 *   DirectoryId: "d-92654abfed"
 * };
 * const command = new RemoveIpRoutesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveIpRoutesCommand extends $Command
  .classBuilder<
    RemoveIpRoutesCommandInput,
    RemoveIpRoutesCommandOutput,
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
  .s("DirectoryService_20150416", "RemoveIpRoutes", {})
  .n("DirectoryServiceClient", "RemoveIpRoutesCommand")
  .f(void 0, void 0)
  .ser(se_RemoveIpRoutesCommand)
  .de(de_RemoveIpRoutesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveIpRoutesRequest;
      output: {};
    };
    sdk: {
      input: RemoveIpRoutesCommandInput;
      output: RemoveIpRoutesCommandOutput;
    };
  };
}

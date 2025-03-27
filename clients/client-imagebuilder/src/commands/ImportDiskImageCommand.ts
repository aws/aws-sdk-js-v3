// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ImportDiskImageRequest, ImportDiskImageResponse } from "../models/models_0";
import { de_ImportDiskImageCommand, se_ImportDiskImageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportDiskImageCommand}.
 */
export interface ImportDiskImageCommandInput extends ImportDiskImageRequest {}
/**
 * @public
 *
 * The output of {@link ImportDiskImageCommand}.
 */
export interface ImportDiskImageCommandOutput extends ImportDiskImageResponse, __MetadataBearer {}

/**
 * <p>Import a Windows operating system image from a verified Microsoft ISO disk
 * 			file. The following disk images are supported:</p>
 *          <ul>
 *             <li>
 *                <p>Windows 11 Enterprise</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportDiskImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportDiskImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ImportDiskImageRequest
 *   name: "STRING_VALUE", // required
 *   semanticVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   platform: "STRING_VALUE", // required
 *   osVersion: "STRING_VALUE", // required
 *   executionRole: "STRING_VALUE",
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 *   uri: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new ImportDiskImageCommand(input);
 * const response = await client.send(command);
 * // { // ImportDiskImageResponse
 * //   clientToken: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportDiskImageCommandInput - {@link ImportDiskImageCommandInput}
 * @returns {@link ImportDiskImageCommandOutput}
 * @see {@link ImportDiskImageCommandInput} for command's `input` shape.
 * @see {@link ImportDiskImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class ImportDiskImageCommand extends $Command
  .classBuilder<
    ImportDiskImageCommandInput,
    ImportDiskImageCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ImportDiskImage", {})
  .n("ImagebuilderClient", "ImportDiskImageCommand")
  .f(void 0, void 0)
  .ser(se_ImportDiskImageCommand)
  .de(de_ImportDiskImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportDiskImageRequest;
      output: ImportDiskImageResponse;
    };
    sdk: {
      input: ImportDiskImageCommandInput;
      output: ImportDiskImageCommandOutput;
    };
  };
}

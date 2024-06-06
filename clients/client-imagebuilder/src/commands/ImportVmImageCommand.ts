// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ImportVmImageRequest, ImportVmImageResponse } from "../models/models_0";
import { de_ImportVmImageCommand, se_ImportVmImageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportVmImageCommand}.
 */
export interface ImportVmImageCommandInput extends ImportVmImageRequest {}
/**
 * @public
 *
 * The output of {@link ImportVmImageCommand}.
 */
export interface ImportVmImageCommandOutput extends ImportVmImageResponse, __MetadataBearer {}

/**
 * <p>When you export your virtual machine (VM) from its virtualization environment, that
 * 			process creates a set of one or more disk container files that act as snapshots of your
 * 			VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a>
 * 			action uses those files to import your VM and create an AMI. To import using the CLI
 * 			command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a>
 *          </p>
 *          <p>You can reference the task ID from the VM import to pull in the AMI that the import
 * 			created as the base image for your Image Builder recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportVmImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportVmImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ImportVmImageRequest
 *   name: "STRING_VALUE", // required
 *   semanticVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   platform: "Windows" || "Linux", // required
 *   osVersion: "STRING_VALUE",
 *   vmImportTaskId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new ImportVmImageCommand(input);
 * const response = await client.send(command);
 * // { // ImportVmImageResponse
 * //   requestId: "STRING_VALUE",
 * //   imageArn: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportVmImageCommandInput - {@link ImportVmImageCommandInput}
 * @returns {@link ImportVmImageCommandOutput}
 * @see {@link ImportVmImageCommandInput} for command's `input` shape.
 * @see {@link ImportVmImageCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ImportVmImageCommand extends $Command
  .classBuilder<
    ImportVmImageCommandInput,
    ImportVmImageCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ImportVmImage", {})
  .n("ImagebuilderClient", "ImportVmImageCommand")
  .f(void 0, void 0)
  .ser(se_ImportVmImageCommand)
  .de(de_ImportVmImageCommand)
  .build() {}

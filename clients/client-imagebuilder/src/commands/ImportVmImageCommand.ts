// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportVmImageRequest, ImportVmImageResponse } from "../models/models_0";
import { ImportVmImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Creates an Image Builder image resource from an Amazon EC2 VM import task. The response
 * 			returns as soon as Image Builder creates the image resource in the
 * 			<code>PENDING</code> state. Image Builder then monitors the import task
 * 			asynchronously. When the task completes, Image Builder records the AMI that it
 * 			produced as the new image's output resource and marks the image
 * 			<code>AVAILABLE</code>. You can then use the imported image as the base
 * 			image for your recipes.</p>
 *          <p>To create the VM import task, use the Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a>
 * 			operation, or the <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a>
 * 			CLI command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportVmImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportVmImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ImportVmImageRequest
 *   name: "STRING_VALUE", // required
 *   semanticVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   platform: "Windows" || "Linux" || "macOS", // required
 *   osVersion: "STRING_VALUE",
 *   vmImportTaskId: "STRING_VALUE", // required
 *   loggingConfiguration: { // ImageLoggingConfiguration
 *     logGroupName: "STRING_VALUE",
 *   },
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
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Import a virtual machine as an Image Builder image
 * ```javascript
 * // The following example registers the output of an EC2 VM Import/Export task (import-ami) as a new Image Builder image, so you can use the imported virtual machine as a base image.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE00000",
 *   name: "my-example-imported-image",
 *   osVersion: "Amazon Linux 2",
 *   platform: "Linux",
 *   semanticVersion: "1.0.0",
 *   vmImportTaskId: "import-ami-1234567890abcdef0"
 * };
 * const command = new ImportVmImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE00000",
 *   imageArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-imported-image/1.0.0/1",
 *   requestId: "f8a1d0ce-42b7-4d6a-9b12-3c84a02e5f19"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ImportVmImageCommand extends command<ImportVmImageCommandInput, ImportVmImageCommandOutput>(
  _ep0,
  _mw0,
  "ImportVmImage",
  ImportVmImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportVmImageRequest;
      output: ImportVmImageResponse;
    };
    sdk: {
      input: ImportVmImageCommandInput;
      output: ImportVmImageCommandOutput;
    };
  };
}

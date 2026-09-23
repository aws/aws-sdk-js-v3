// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportDiskImageRequest, ImportDiskImageResponse } from "../models/models_0";
import { ImportDiskImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Imports a Windows operating system image from a verified Microsoft ISO disk
 * 			file. The following disk images are supported:</p>
 *          <ul>
 *             <li>
 *                <p>Windows 11 Enterprise</p>
 *             </li>
 *          </ul>
 *          <p>The response returns as soon as Image Builder creates the new image resource in the
 * 			<code>PENDING</code> state. The conversion from ISO file to AMI then runs
 * 			asynchronously on an EC2 instance that Image Builder launches with the specified
 * 			infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportDiskImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportDiskImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 *   loggingConfiguration: { // ImageLoggingConfiguration
 *     logGroupName: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   registerImageOptions: { // RegisterImageOptions
 *     secureBootEnabled: true || false,
 *     uefiData: "STRING_VALUE",
 *   },
 *   windowsConfiguration: { // WindowsConfiguration
 *     imageIndex: Number("long"), // required
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permissions to perform the requested operation.</p>
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have attempted too many requests for the specific operation.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Import a Windows 11 ISO disk image
 * ```javascript
 * // The following example starts an image build that converts a Windows 11 ISO disk file stored in Amazon S3 into an AMI; the imageBuildVersionArn in the response identifies the Image Builder image resource that tracks the build, not the output AMI.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE12345",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   name: "my-example-imported-image",
 *   osVersion: "Microsoft Windows 11",
 *   platform: "Windows",
 *   semanticVersion: "1.0.0",
 *   uri: "s3://amzn-s3-demo-bucket/Win11_23H2_English_x64.iso"
 * };
 * const command = new ImportDiskImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE12345",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-imported-image/1.0.0/1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ImportDiskImageCommand extends command<ImportDiskImageCommandInput, ImportDiskImageCommandOutput>(
  _ep0,
  _mw0,
  "ImportDiskImage",
  ImportDiskImage$
) {
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

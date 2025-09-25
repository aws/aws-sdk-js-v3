// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppBlockRequest, CreateAppBlockResult } from "../models/models_0";
import { CreateAppBlock } from "../schemas/schemas_3_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppBlockCommand}.
 */
export interface CreateAppBlockCommandInput extends CreateAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppBlockCommand}.
 */
export interface CreateAppBlockCommandOutput extends CreateAppBlockResult, __MetadataBearer {}

/**
 * <p>Creates an app block.</p>
 *          <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the
 *             virtual hard disk in an S3 bucket. It also stores the setup script with details about
 *             how to mount the virtual hard disk. The virtual hard disk includes the application
 *             binaries and other files necessary to launch your applications. Multiple applications
 *             can be assigned to a single app block.</p>
 *          <p>This is only supported for Elastic fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateAppBlockRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   SourceS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   SetupScriptDetails: { // ScriptDetails
 *     ScriptS3Location: {
 *       S3Bucket: "STRING_VALUE", // required
 *       S3Key: "STRING_VALUE",
 *     },
 *     ExecutablePath: "STRING_VALUE", // required
 *     ExecutableParameters: "STRING_VALUE",
 *     TimeoutInSeconds: Number("int"), // required
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PostSetupScriptDetails: {
 *     ScriptS3Location: {
 *       S3Bucket: "STRING_VALUE", // required
 *       S3Key: "STRING_VALUE",
 *     },
 *     ExecutablePath: "STRING_VALUE", // required
 *     ExecutableParameters: "STRING_VALUE",
 *     TimeoutInSeconds: Number("int"), // required
 *   },
 *   PackagingType: "CUSTOM" || "APPSTREAM2",
 * };
 * const command = new CreateAppBlockCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppBlockResult
 * //   AppBlock: { // AppBlock
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     SourceS3Location: { // S3Location
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     SetupScriptDetails: { // ScriptDetails
 * //       ScriptS3Location: {
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       ExecutablePath: "STRING_VALUE", // required
 * //       ExecutableParameters: "STRING_VALUE",
 * //       TimeoutInSeconds: Number("int"), // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     PostSetupScriptDetails: {
 * //       ScriptS3Location: {
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       ExecutablePath: "STRING_VALUE", // required
 * //       ExecutableParameters: "STRING_VALUE",
 * //       TimeoutInSeconds: Number("int"), // required
 * //     },
 * //     PackagingType: "CUSTOM" || "APPSTREAM2",
 * //     State: "INACTIVE" || "ACTIVE",
 * //     AppBlockErrors: [ // ErrorDetailsList
 * //       { // ErrorDetails
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppBlockCommandInput - {@link CreateAppBlockCommandInput}
 * @returns {@link CreateAppBlockCommandOutput}
 * @see {@link CreateAppBlockCommandInput} for command's `input` shape.
 * @see {@link CreateAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CreateAppBlockCommand extends $Command
  .classBuilder<
    CreateAppBlockCommandInput,
    CreateAppBlockCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateAppBlock", {})
  .n("AppStreamClient", "CreateAppBlockCommand")
  .sc(CreateAppBlock)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppBlockRequest;
      output: CreateAppBlockResult;
    };
    sdk: {
      input: CreateAppBlockCommandInput;
      output: CreateAppBlockCommandOutput;
    };
  };
}

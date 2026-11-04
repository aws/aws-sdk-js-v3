// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApplicationRequest, CreateApplicationResult } from "../models/models_0";
import { CreateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResult, __MetadataBearer {}

/**
 * Creates an application.
 *
 * Applications are a WorkSpaces Applications resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch.
 *
 * This is only supported for Elastic fleets.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateApplicationCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateApplicationCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateApplicationRequest
 *   Name: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   IconS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   LaunchPath: "STRING_VALUE", // required
 *   WorkingDirectory: "STRING_VALUE",
 *   LaunchParameters: "STRING_VALUE",
 *   Platforms: [ // Platforms // required
 *     "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "WINDOWS_11" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 *   ],
 *   InstanceFamilies: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   AppBlockArn: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResult
 * //   Application: { // Application
 * //     Name: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     IconURL: "STRING_VALUE",
 * //     LaunchPath: "STRING_VALUE",
 * //     LaunchParameters: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     Metadata: { // Metadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WorkingDirectory: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     AppBlockArn: "STRING_VALUE",
 * //     IconS3Location: { // S3Location
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     Platforms: [ // Platforms
 * //       "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "WINDOWS_11" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 * //     ],
 * //     InstanceFamilies: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class CreateApplicationCommand extends command<CreateApplicationCommandInput, CreateApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreateApplication",
  CreateApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResult;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}

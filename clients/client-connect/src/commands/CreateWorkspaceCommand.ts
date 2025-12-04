// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkspaceRequest, CreateWorkspaceResponse } from "../models/models_0";
import { CreateWorkspace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandInput extends CreateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandOutput extends CreateWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Creates a workspace that defines the user experience by mapping views to pages. Workspaces can be assigned to users or routing profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateWorkspaceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateWorkspaceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateWorkspaceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Theme: { // WorkspaceTheme
 *     Light: { // WorkspaceThemeConfig
 *       Palette: { // WorkspaceThemePalette
 *         Header: { // PaletteHeader
 *           Background: "STRING_VALUE",
 *           Text: "STRING_VALUE",
 *           TextHover: "STRING_VALUE",
 *           InvertActionsColors: true || false,
 *         },
 *         Navigation: { // PaletteNavigation
 *           Background: "STRING_VALUE",
 *           TextBackgroundHover: "STRING_VALUE",
 *           TextBackgroundActive: "STRING_VALUE",
 *           Text: "STRING_VALUE",
 *           TextHover: "STRING_VALUE",
 *           TextActive: "STRING_VALUE",
 *           InvertActionsColors: true || false,
 *         },
 *         Canvas: { // PaletteCanvas
 *           ContainerBackground: "STRING_VALUE",
 *           PageBackground: "STRING_VALUE",
 *           ActiveBackground: "STRING_VALUE",
 *         },
 *         Primary: { // PalettePrimary
 *           Default: "STRING_VALUE",
 *           Active: "STRING_VALUE",
 *           ContrastText: "STRING_VALUE",
 *         },
 *       },
 *       Images: { // WorkspaceThemeImages
 *         Logo: { // ImagesLogo
 *           Default: "STRING_VALUE",
 *           Favicon: "STRING_VALUE",
 *         },
 *       },
 *       Typography: { // WorkspaceThemeTypography
 *         FontFamily: { // FontFamily
 *           Default: "Arial" || "Courier New" || "Georgia" || "Times New Roman" || "Trebuchet" || "Verdana",
 *         },
 *       },
 *     },
 *     Dark: {
 *       Palette: {
 *         Header: {
 *           Background: "STRING_VALUE",
 *           Text: "STRING_VALUE",
 *           TextHover: "STRING_VALUE",
 *           InvertActionsColors: true || false,
 *         },
 *         Navigation: {
 *           Background: "STRING_VALUE",
 *           TextBackgroundHover: "STRING_VALUE",
 *           TextBackgroundActive: "STRING_VALUE",
 *           Text: "STRING_VALUE",
 *           TextHover: "STRING_VALUE",
 *           TextActive: "STRING_VALUE",
 *           InvertActionsColors: true || false,
 *         },
 *         Canvas: {
 *           ContainerBackground: "STRING_VALUE",
 *           PageBackground: "STRING_VALUE",
 *           ActiveBackground: "STRING_VALUE",
 *         },
 *         Primary: {
 *           Default: "STRING_VALUE",
 *           Active: "STRING_VALUE",
 *           ContrastText: "STRING_VALUE",
 *         },
 *       },
 *       Images: {
 *         Logo: {
 *           Default: "STRING_VALUE",
 *           Favicon: "STRING_VALUE",
 *         },
 *       },
 *       Typography: {
 *         FontFamily: {
 *           Default: "Arial" || "Courier New" || "Georgia" || "Times New Roman" || "Trebuchet" || "Verdana",
 *         },
 *       },
 *     },
 *   },
 *   Title: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceResponse
 * //   WorkspaceId: "STRING_VALUE", // required
 * //   WorkspaceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceCommandInput - {@link CreateWorkspaceCommandInput}
 * @returns {@link CreateWorkspaceCommandOutput}
 * @see {@link CreateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateWorkspaceCommand extends $Command
  .classBuilder<
    CreateWorkspaceCommandInput,
    CreateWorkspaceCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateWorkspace", {})
  .n("ConnectClient", "CreateWorkspaceCommand")
  .sc(CreateWorkspace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceRequest;
      output: CreateWorkspaceResponse;
    };
    sdk: {
      input: CreateWorkspaceCommandInput;
      output: CreateWorkspaceCommandOutput;
    };
  };
}

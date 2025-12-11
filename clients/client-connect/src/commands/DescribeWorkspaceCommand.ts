// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceRequest, DescribeWorkspaceResponse } from "../models/models_1";
import { DescribeWorkspace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceCommand}.
 */
export interface DescribeWorkspaceCommandInput extends DescribeWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceCommand}.
 */
export interface DescribeWorkspaceCommandOutput extends DescribeWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a workspace, including its configuration and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeWorkspaceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeWorkspaceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeWorkspaceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceResponse
 * //   Workspace: { // Workspace
 * //     Visibility: "ALL" || "ASSIGNED" || "NONE",
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Theme: { // WorkspaceTheme
 * //       Light: { // WorkspaceThemeConfig
 * //         Palette: { // WorkspaceThemePalette
 * //           Header: { // PaletteHeader
 * //             Background: "STRING_VALUE",
 * //             Text: "STRING_VALUE",
 * //             TextHover: "STRING_VALUE",
 * //             InvertActionsColors: true || false,
 * //           },
 * //           Navigation: { // PaletteNavigation
 * //             Background: "STRING_VALUE",
 * //             TextBackgroundHover: "STRING_VALUE",
 * //             TextBackgroundActive: "STRING_VALUE",
 * //             Text: "STRING_VALUE",
 * //             TextHover: "STRING_VALUE",
 * //             TextActive: "STRING_VALUE",
 * //             InvertActionsColors: true || false,
 * //           },
 * //           Canvas: { // PaletteCanvas
 * //             ContainerBackground: "STRING_VALUE",
 * //             PageBackground: "STRING_VALUE",
 * //             ActiveBackground: "STRING_VALUE",
 * //           },
 * //           Primary: { // PalettePrimary
 * //             Default: "STRING_VALUE",
 * //             Active: "STRING_VALUE",
 * //             ContrastText: "STRING_VALUE",
 * //           },
 * //         },
 * //         Images: { // WorkspaceThemeImages
 * //           Logo: { // ImagesLogo
 * //             Default: "STRING_VALUE",
 * //             Favicon: "STRING_VALUE",
 * //           },
 * //         },
 * //         Typography: { // WorkspaceThemeTypography
 * //           FontFamily: { // FontFamily
 * //             Default: "Arial" || "Courier New" || "Georgia" || "Times New Roman" || "Trebuchet" || "Verdana",
 * //           },
 * //         },
 * //       },
 * //       Dark: {
 * //         Palette: {
 * //           Header: {
 * //             Background: "STRING_VALUE",
 * //             Text: "STRING_VALUE",
 * //             TextHover: "STRING_VALUE",
 * //             InvertActionsColors: true || false,
 * //           },
 * //           Navigation: {
 * //             Background: "STRING_VALUE",
 * //             TextBackgroundHover: "STRING_VALUE",
 * //             TextBackgroundActive: "STRING_VALUE",
 * //             Text: "STRING_VALUE",
 * //             TextHover: "STRING_VALUE",
 * //             TextActive: "STRING_VALUE",
 * //             InvertActionsColors: true || false,
 * //           },
 * //           Canvas: {
 * //             ContainerBackground: "STRING_VALUE",
 * //             PageBackground: "STRING_VALUE",
 * //             ActiveBackground: "STRING_VALUE",
 * //           },
 * //           Primary: {
 * //             Default: "STRING_VALUE",
 * //             Active: "STRING_VALUE",
 * //             ContrastText: "STRING_VALUE",
 * //           },
 * //         },
 * //         Images: {
 * //           Logo: {
 * //             Default: "STRING_VALUE",
 * //             Favicon: "STRING_VALUE",
 * //           },
 * //         },
 * //         Typography: {
 * //           FontFamily: {
 * //             Default: "Arial" || "Courier New" || "Georgia" || "Times New Roman" || "Trebuchet" || "Verdana",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     Title: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceCommandInput - {@link DescribeWorkspaceCommandInput}
 * @returns {@link DescribeWorkspaceCommandOutput}
 * @see {@link DescribeWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class DescribeWorkspaceCommand extends $Command
  .classBuilder<
    DescribeWorkspaceCommandInput,
    DescribeWorkspaceCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeWorkspace", {})
  .n("ConnectClient", "DescribeWorkspaceCommand")
  .sc(DescribeWorkspace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceRequest;
      output: DescribeWorkspaceResponse;
    };
    sdk: {
      input: DescribeWorkspaceCommandInput;
      output: DescribeWorkspaceCommandOutput;
    };
  };
}

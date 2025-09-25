// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetNetworkInsightsAccessScopeContentRequest,
  GetNetworkInsightsAccessScopeContentResult,
} from "../models/models_7";
import { GetNetworkInsightsAccessScopeContent } from "../schemas/schemas_43_NetworkInsightsAccess";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkInsightsAccessScopeContentCommand}.
 */
export interface GetNetworkInsightsAccessScopeContentCommandInput extends GetNetworkInsightsAccessScopeContentRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkInsightsAccessScopeContentCommand}.
 */
export interface GetNetworkInsightsAccessScopeContentCommandOutput
  extends GetNetworkInsightsAccessScopeContentResult,
    __MetadataBearer {}

/**
 * <p>Gets the content for the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetNetworkInsightsAccessScopeContentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetNetworkInsightsAccessScopeContentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetNetworkInsightsAccessScopeContentRequest
 *   NetworkInsightsAccessScopeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetNetworkInsightsAccessScopeContentCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkInsightsAccessScopeContentResult
 * //   NetworkInsightsAccessScopeContent: { // NetworkInsightsAccessScopeContent
 * //     NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //     MatchPaths: [ // AccessScopePathList
 * //       { // AccessScopePath
 * //         Source: { // PathStatement
 * //           PacketHeaderStatement: { // PacketHeaderStatement
 * //             SourceAddresses: [ // ValueStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePrefixLists: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [ // ProtocolList
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: { // ResourceStatement
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [ // ThroughResourcesStatementList
 * //           { // ThroughResourcesStatement
 * //             ResourceStatement: {
 * //               Resources: "<ValueStringList>",
 * //               ResourceTypes: "<ValueStringList>",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ExcludePaths: [
 * //       {
 * //         Source: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [
 * //           {
 * //             ResourceStatement: "<ResourceStatement>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNetworkInsightsAccessScopeContentCommandInput - {@link GetNetworkInsightsAccessScopeContentCommandInput}
 * @returns {@link GetNetworkInsightsAccessScopeContentCommandOutput}
 * @see {@link GetNetworkInsightsAccessScopeContentCommandInput} for command's `input` shape.
 * @see {@link GetNetworkInsightsAccessScopeContentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetNetworkInsightsAccessScopeContentCommand extends $Command
  .classBuilder<
    GetNetworkInsightsAccessScopeContentCommandInput,
    GetNetworkInsightsAccessScopeContentCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetNetworkInsightsAccessScopeContent", {})
  .n("EC2Client", "GetNetworkInsightsAccessScopeContentCommand")
  .sc(GetNetworkInsightsAccessScopeContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkInsightsAccessScopeContentRequest;
      output: GetNetworkInsightsAccessScopeContentResult;
    };
    sdk: {
      input: GetNetworkInsightsAccessScopeContentCommandInput;
      output: GetNetworkInsightsAccessScopeContentCommandOutput;
    };
  };
}

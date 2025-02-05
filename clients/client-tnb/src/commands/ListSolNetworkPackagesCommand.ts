// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolNetworkPackagesInput, ListSolNetworkPackagesOutput } from "../models/models_0";
import { de_ListSolNetworkPackagesCommand, se_ListSolNetworkPackagesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkPackagesCommand}.
 */
export interface ListSolNetworkPackagesCommandInput extends ListSolNetworkPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkPackagesCommand}.
 */
export interface ListSolNetworkPackagesCommandOutput extends ListSolNetworkPackagesOutput, __MetadataBearer {}

/**
 * <p>Lists network packages.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkPackagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkPackagesOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkPackages: [ // ListSolNetworkPackageResources // required
 * //     { // ListSolNetworkPackageInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsdOnboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //       nsdOperationalState: "ENABLED" || "DISABLED", // required
 * //       nsdUsageState: "IN_USE" || "NOT_IN_USE", // required
 * //       nsdId: "STRING_VALUE",
 * //       nsdName: "STRING_VALUE",
 * //       nsdVersion: "STRING_VALUE",
 * //       nsdDesigner: "STRING_VALUE",
 * //       nsdInvariantId: "STRING_VALUE",
 * //       vnfPkgIds: [ // VnfPkgIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       metadata: { // ListSolNetworkPackageMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkPackagesCommandInput - {@link ListSolNetworkPackagesCommandInput}
 * @returns {@link ListSolNetworkPackagesCommandOutput}
 * @see {@link ListSolNetworkPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkPackagesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class ListSolNetworkPackagesCommand extends $Command
  .classBuilder<
    ListSolNetworkPackagesCommandInput,
    ListSolNetworkPackagesCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "ListSolNetworkPackages", {})
  .n("TnbClient", "ListSolNetworkPackagesCommand")
  .f(void 0, void 0)
  .ser(se_ListSolNetworkPackagesCommand)
  .de(de_ListSolNetworkPackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolNetworkPackagesInput;
      output: ListSolNetworkPackagesOutput;
    };
    sdk: {
      input: ListSolNetworkPackagesCommandInput;
      output: ListSolNetworkPackagesCommandOutput;
    };
  };
}

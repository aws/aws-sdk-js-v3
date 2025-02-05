// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolFunctionPackagesInput, ListSolFunctionPackagesOutput } from "../models/models_0";
import { de_ListSolFunctionPackagesCommand, se_ListSolFunctionPackagesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolFunctionPackagesCommand}.
 */
export interface ListSolFunctionPackagesCommandInput extends ListSolFunctionPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListSolFunctionPackagesCommand}.
 */
export interface ListSolFunctionPackagesCommandOutput extends ListSolFunctionPackagesOutput, __MetadataBearer {}

/**
 * <p>Lists information about function packages.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolFunctionPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolFunctionPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TnbClient(config);
 * const input = { // ListSolFunctionPackagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolFunctionPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolFunctionPackagesOutput
 * //   nextToken: "STRING_VALUE",
 * //   functionPackages: [ // ListSolFunctionPackageResources // required
 * //     { // ListSolFunctionPackageInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       onboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //       operationalState: "ENABLED" || "DISABLED", // required
 * //       usageState: "IN_USE" || "NOT_IN_USE", // required
 * //       vnfdId: "STRING_VALUE",
 * //       vnfProvider: "STRING_VALUE",
 * //       vnfProductName: "STRING_VALUE",
 * //       vnfdVersion: "STRING_VALUE",
 * //       metadata: { // ListSolFunctionPackageMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolFunctionPackagesCommandInput - {@link ListSolFunctionPackagesCommandInput}
 * @returns {@link ListSolFunctionPackagesCommandOutput}
 * @see {@link ListSolFunctionPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolFunctionPackagesCommandOutput} for command's `response` shape.
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
export class ListSolFunctionPackagesCommand extends $Command
  .classBuilder<
    ListSolFunctionPackagesCommandInput,
    ListSolFunctionPackagesCommandOutput,
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
  .s("TNB", "ListSolFunctionPackages", {})
  .n("TnbClient", "ListSolFunctionPackagesCommand")
  .f(void 0, void 0)
  .ser(se_ListSolFunctionPackagesCommand)
  .de(de_ListSolFunctionPackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolFunctionPackagesInput;
      output: ListSolFunctionPackagesOutput;
    };
    sdk: {
      input: ListSolFunctionPackagesCommandInput;
      output: ListSolFunctionPackagesCommandOutput;
    };
  };
}

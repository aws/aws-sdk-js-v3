// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateSolNetworkPackageInput,
  CreateSolNetworkPackageInputFilterSensitiveLog,
  CreateSolNetworkPackageOutput,
  CreateSolNetworkPackageOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateSolNetworkPackageCommand, se_CreateSolNetworkPackageCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSolNetworkPackageCommand}.
 */
export interface CreateSolNetworkPackageCommandInput extends CreateSolNetworkPackageInput {}
/**
 * @public
 *
 * The output of {@link CreateSolNetworkPackageCommand}.
 */
export interface CreateSolNetworkPackageCommandOutput extends CreateSolNetworkPackageOutput, __MetadataBearer {}

/**
 * <p>Creates a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.
 *       </p>
 *          <p>A network package consists of a network service descriptor (NSD) file (required) and any additional files (optional), such as scripts specific to your needs. For example, if you have multiple function packages in your network package, you can use the NSD to define which network functions should run in certain VPCs, subnets, or EKS clusters.</p>
 *          <p>This request creates an empty network package container with an ID. Once you create a network package, you can upload the network package content using <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, CreateSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, CreateSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // CreateSolNetworkPackageInput
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * // { // CreateSolNetworkPackageOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsdOnboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //   nsdOperationalState: "ENABLED" || "DISABLED", // required
 * //   nsdUsageState: "IN_USE" || "NOT_IN_USE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSolNetworkPackageCommandInput - {@link CreateSolNetworkPackageCommandInput}
 * @returns {@link CreateSolNetworkPackageCommandOutput}
 * @see {@link CreateSolNetworkPackageCommandInput} for command's `input` shape.
 * @see {@link CreateSolNetworkPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quotas have been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class CreateSolNetworkPackageCommand extends $Command
  .classBuilder<
    CreateSolNetworkPackageCommandInput,
    CreateSolNetworkPackageCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "CreateSolNetworkPackage", {})
  .n("TnbClient", "CreateSolNetworkPackageCommand")
  .f(CreateSolNetworkPackageInputFilterSensitiveLog, CreateSolNetworkPackageOutputFilterSensitiveLog)
  .ser(se_CreateSolNetworkPackageCommand)
  .de(de_CreateSolNetworkPackageCommand)
  .build() {}

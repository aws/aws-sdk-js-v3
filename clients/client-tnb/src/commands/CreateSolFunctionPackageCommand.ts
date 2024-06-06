// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateSolFunctionPackageInput,
  CreateSolFunctionPackageInputFilterSensitiveLog,
  CreateSolFunctionPackageOutput,
  CreateSolFunctionPackageOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateSolFunctionPackageCommand, se_CreateSolFunctionPackageCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSolFunctionPackageCommand}.
 */
export interface CreateSolFunctionPackageCommandInput extends CreateSolFunctionPackageInput {}
/**
 * @public
 *
 * The output of {@link CreateSolFunctionPackageCommand}.
 */
export interface CreateSolFunctionPackageCommandOutput extends CreateSolFunctionPackageOutput, __MetadataBearer {}

/**
 * <p>Creates a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/function-packages.html">Function packages</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.
 *       </p>
 *          <p>Creating a function package is the first step for creating a network in AWS TNB. This request creates an empty container with an ID. The next step is to upload the actual CSAR zip file into that empty container. To upload function package content, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolFunctionPackageContent.html">PutSolFunctionPackageContent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, CreateSolFunctionPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, CreateSolFunctionPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // CreateSolFunctionPackageInput
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * // { // CreateSolFunctionPackageOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   onboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //   operationalState: "ENABLED" || "DISABLED", // required
 * //   usageState: "IN_USE" || "NOT_IN_USE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSolFunctionPackageCommandInput - {@link CreateSolFunctionPackageCommandInput}
 * @returns {@link CreateSolFunctionPackageCommandOutput}
 * @see {@link CreateSolFunctionPackageCommandInput} for command's `input` shape.
 * @see {@link CreateSolFunctionPackageCommandOutput} for command's `response` shape.
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
export class CreateSolFunctionPackageCommand extends $Command
  .classBuilder<
    CreateSolFunctionPackageCommandInput,
    CreateSolFunctionPackageCommandOutput,
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
  .s("TNB", "CreateSolFunctionPackage", {})
  .n("TnbClient", "CreateSolFunctionPackageCommand")
  .f(CreateSolFunctionPackageInputFilterSensitiveLog, CreateSolFunctionPackageOutputFilterSensitiveLog)
  .ser(se_CreateSolFunctionPackageCommand)
  .de(de_CreateSolFunctionPackageCommand)
  .build() {}

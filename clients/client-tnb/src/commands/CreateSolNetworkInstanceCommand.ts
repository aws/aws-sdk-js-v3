// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateSolNetworkInstanceInput,
  CreateSolNetworkInstanceInputFilterSensitiveLog,
  CreateSolNetworkInstanceOutput,
  CreateSolNetworkInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateSolNetworkInstanceCommand, se_CreateSolNetworkInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSolNetworkInstanceCommand}.
 */
export interface CreateSolNetworkInstanceCommandInput extends CreateSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link CreateSolNetworkInstanceCommand}.
 */
export interface CreateSolNetworkInstanceCommandOutput extends CreateSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * <p>Creates a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Creating a network instance is the third step after creating a network
 *          package. For more information about network instances, <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the
 *                <i>Amazon Web Services Telco Network Builder User Guide</i>.</p>
 *          <p>Once you create a network instance, you can instantiate it. To instantiate a network,
 *          see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_InstantiateSolNetworkInstance.html">InstantiateSolNetworkInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, CreateSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, CreateSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TnbClient(config);
 * const input = { // CreateSolNetworkInstanceInput
 *   nsdInfoId: "STRING_VALUE", // required
 *   nsName: "STRING_VALUE", // required
 *   nsDescription: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSolNetworkInstanceOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsdInfoId: "STRING_VALUE", // required
 * //   nsInstanceName: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSolNetworkInstanceCommandInput - {@link CreateSolNetworkInstanceCommandInput}
 * @returns {@link CreateSolNetworkInstanceCommandOutput}
 * @see {@link CreateSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateSolNetworkInstanceCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quotas have been exceeded.</p>
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
export class CreateSolNetworkInstanceCommand extends $Command
  .classBuilder<
    CreateSolNetworkInstanceCommandInput,
    CreateSolNetworkInstanceCommandOutput,
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
  .s("TNB", "CreateSolNetworkInstance", {})
  .n("TnbClient", "CreateSolNetworkInstanceCommand")
  .f(CreateSolNetworkInstanceInputFilterSensitiveLog, CreateSolNetworkInstanceOutputFilterSensitiveLog)
  .ser(se_CreateSolNetworkInstanceCommand)
  .de(de_CreateSolNetworkInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSolNetworkInstanceInput;
      output: CreateSolNetworkInstanceOutput;
    };
    sdk: {
      input: CreateSolNetworkInstanceCommandInput;
      output: CreateSolNetworkInstanceCommandOutput;
    };
  };
}

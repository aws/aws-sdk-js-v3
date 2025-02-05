// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceDeploymentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceDeploymentClient";
import {
  PutDeploymentParameterRequest,
  PutDeploymentParameterRequestFilterSensitiveLog,
  PutDeploymentParameterResponse,
} from "../models/models_0";
import { de_PutDeploymentParameterCommand, se_PutDeploymentParameterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeploymentParameterCommand}.
 */
export interface PutDeploymentParameterCommandInput extends PutDeploymentParameterRequest {}
/**
 * @public
 *
 * The output of {@link PutDeploymentParameterCommand}.
 */
export interface PutDeploymentParameterCommandOutput extends PutDeploymentParameterResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a deployment parameter and is targeted by <code>catalog</code> and <code>agreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, PutDeploymentParameterCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, PutDeploymentParameterCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // PutDeploymentParameterRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 *   deploymentParameter: { // DeploymentParameterInput
 *     name: "STRING_VALUE", // required
 *     secretString: "STRING_VALUE", // required
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   expirationDate: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutDeploymentParameterCommand(input);
 * const response = await client.send(command);
 * // { // PutDeploymentParameterResponse
 * //   resourceArn: "STRING_VALUE", // required
 * //   agreementId: "STRING_VALUE", // required
 * //   deploymentParameterId: "STRING_VALUE", // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeploymentParameterCommandInput - {@link PutDeploymentParameterCommandInput}
 * @returns {@link PutDeploymentParameterCommandOutput}
 * @see {@link PutDeploymentParameterCommandInput} for command's `input` shape.
 * @see {@link PutDeploymentParameterCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDeploymentClientResolvedConfig | config} for MarketplaceDeploymentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The maximum number of requests per account has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *
 * @throws {@link MarketplaceDeploymentServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDeployment service.</p>
 *
 * @public
 */
export class PutDeploymentParameterCommand extends $Command
  .classBuilder<
    PutDeploymentParameterCommandInput,
    PutDeploymentParameterCommandOutput,
    MarketplaceDeploymentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDeploymentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPDeploymentParametersService", "PutDeploymentParameter", {})
  .n("MarketplaceDeploymentClient", "PutDeploymentParameterCommand")
  .f(PutDeploymentParameterRequestFilterSensitiveLog, void 0)
  .ser(se_PutDeploymentParameterCommand)
  .de(de_PutDeploymentParameterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeploymentParameterRequest;
      output: PutDeploymentParameterResponse;
    };
    sdk: {
      input: PutDeploymentParameterCommandInput;
      output: PutDeploymentParameterCommandOutput;
    };
  };
}

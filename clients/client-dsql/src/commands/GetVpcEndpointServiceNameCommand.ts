// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpcEndpointServiceNameInput, GetVpcEndpointServiceNameOutput } from "../models/models_0";
import { de_GetVpcEndpointServiceNameCommand, se_GetVpcEndpointServiceNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpcEndpointServiceNameCommand}.
 */
export interface GetVpcEndpointServiceNameCommandInput extends GetVpcEndpointServiceNameInput {}
/**
 * @public
 *
 * The output of {@link GetVpcEndpointServiceNameCommand}.
 */
export interface GetVpcEndpointServiceNameCommandOutput extends GetVpcEndpointServiceNameOutput, __MetadataBearer {}

/**
 * <p>Retrieves the VPC endpoint service name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, GetVpcEndpointServiceNameCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, GetVpcEndpointServiceNameCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * const client = new DSQLClient(config);
 * const input = { // GetVpcEndpointServiceNameInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetVpcEndpointServiceNameCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcEndpointServiceNameOutput
 * //   serviceName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetVpcEndpointServiceNameCommandInput - {@link GetVpcEndpointServiceNameCommandInput}
 * @returns {@link GetVpcEndpointServiceNameCommandOutput}
 * @see {@link GetVpcEndpointServiceNameCommandInput} for command's `input` shape.
 * @see {@link GetVpcEndpointServiceNameCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @example Get VPC Endpoint Service Name
 * ```javascript
 * //
 * const input = {
 *   identifier: "kiqenqglxyl2snyvkvnj2c3s2e"
 * };
 * const command = new GetVpcEndpointServiceNameCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetVpcEndpointServiceNameCommand extends $Command
  .classBuilder<
    GetVpcEndpointServiceNameCommandInput,
    GetVpcEndpointServiceNameCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DSQL", "GetVpcEndpointServiceName", {})
  .n("DSQLClient", "GetVpcEndpointServiceNameCommand")
  .f(void 0, void 0)
  .ser(se_GetVpcEndpointServiceNameCommand)
  .de(de_GetVpcEndpointServiceNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpcEndpointServiceNameInput;
      output: GetVpcEndpointServiceNameOutput;
    };
    sdk: {
      input: GetVpcEndpointServiceNameCommandInput;
      output: GetVpcEndpointServiceNameCommandOutput;
    };
  };
}

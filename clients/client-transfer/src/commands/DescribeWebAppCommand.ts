// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWebAppRequest, DescribeWebAppResponse } from "../models/models_0";
import { DescribeWebApp } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWebAppCommand}.
 */
export interface DescribeWebAppCommandInput extends DescribeWebAppRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWebAppCommand}.
 */
export interface DescribeWebAppCommandOutput extends DescribeWebAppResponse, __MetadataBearer {}

/**
 * <p>Describes the web app that's identified by <code>WebAppId</code>. The response includes endpoint configuration details such as whether the web app is publicly accessible or VPC hosted.</p> <p>For more information about using VPC endpoints with Transfer Family, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-webapp-in-vpc.html">Create a Transfer Family web app in a VPC</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeWebAppCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeWebAppCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DescribeWebAppRequest
 *   WebAppId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWebAppCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWebAppResponse
 * //   WebApp: { // DescribedWebApp
 * //     Arn: "STRING_VALUE", // required
 * //     WebAppId: "STRING_VALUE", // required
 * //     DescribedIdentityProviderDetails: { // DescribedWebAppIdentityProviderDetails Union: only one key present
 * //       IdentityCenterConfig: { // DescribedIdentityCenterConfig
 * //         ApplicationArn: "STRING_VALUE",
 * //         InstanceArn: "STRING_VALUE",
 * //         Role: "STRING_VALUE",
 * //       },
 * //     },
 * //     AccessEndpoint: "STRING_VALUE",
 * //     WebAppEndpoint: "STRING_VALUE",
 * //     WebAppUnits: { // WebAppUnits Union: only one key present
 * //       Provisioned: Number("int"),
 * //     },
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     WebAppEndpointPolicy: "FIPS" || "STANDARD",
 * //     EndpointType: "PUBLIC" || "VPC",
 * //     DescribedEndpointDetails: { // DescribedWebAppEndpointDetails Union: only one key present
 * //       Vpc: { // DescribedWebAppVpcConfig
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         VpcId: "STRING_VALUE",
 * //         VpcEndpointId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWebAppCommandInput - {@link DescribeWebAppCommandInput}
 * @returns {@link DescribeWebAppCommandOutput}
 * @see {@link DescribeWebAppCommandInput} for command's `input` shape.
 * @see {@link DescribeWebAppCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DescribeWebAppCommand extends $Command
  .classBuilder<
    DescribeWebAppCommandInput,
    DescribeWebAppCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "DescribeWebApp", {})
  .n("TransferClient", "DescribeWebAppCommand")
  .sc(DescribeWebApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWebAppRequest;
      output: DescribeWebAppResponse;
    };
    sdk: {
      input: DescribeWebAppCommandInput;
      output: DescribeWebAppCommandOutput;
    };
  };
}

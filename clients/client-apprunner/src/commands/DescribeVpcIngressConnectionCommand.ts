// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeVpcIngressConnectionRequest, DescribeVpcIngressConnectionResponse } from "../models/models_0";
import { DescribeVpcIngressConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeVpcIngressConnectionCommand}.
 */
export interface DescribeVpcIngressConnectionCommandInput extends DescribeVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcIngressConnectionCommand}.
 */
export interface DescribeVpcIngressConnectionCommandOutput extends DescribeVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * Return a full description of an App Runner VPC Ingress Connection resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeVpcIngressConnectionRequest
 *   VpcIngressConnectionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcIngressConnectionResponse
 * //   VpcIngressConnection: { // VpcIngressConnection
 * //     VpcIngressConnectionArn: "STRING_VALUE",
 * //     VpcIngressConnectionName: "STRING_VALUE",
 * //     ServiceArn: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "PENDING_CREATION" || "PENDING_UPDATE" || "PENDING_DELETION" || "FAILED_CREATION" || "FAILED_UPDATE" || "FAILED_DELETION" || "DELETED",
 * //     AccountId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     IngressVpcConfiguration: { // IngressVpcConfiguration
 * //       VpcId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVpcIngressConnectionCommandInput - {@link DescribeVpcIngressConnectionCommandInput}
 * @returns {@link DescribeVpcIngressConnectionCommandOutput}
 * @see {@link DescribeVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcIngressConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An unexpected service exception occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.
 *
 * @throws {@link AppRunnerServiceException}
 *
 * Base exception class for all service exceptions from AppRunner service.
 *
 * @public
 */
export class DescribeVpcIngressConnectionCommand extends command<DescribeVpcIngressConnectionCommandInput, DescribeVpcIngressConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeVpcIngressConnection",
  DescribeVpcIngressConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcIngressConnectionRequest;
      output: DescribeVpcIngressConnectionResponse;
    };
    sdk: {
      input: DescribeVpcIngressConnectionCommandInput;
      output: DescribeVpcIngressConnectionCommandOutput;
    };
  };
}

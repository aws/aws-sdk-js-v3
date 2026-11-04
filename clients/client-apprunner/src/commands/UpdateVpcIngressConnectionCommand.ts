// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVpcIngressConnectionRequest, UpdateVpcIngressConnectionResponse } from "../models/models_0";
import { UpdateVpcIngressConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVpcIngressConnectionCommand}.
 */
export interface UpdateVpcIngressConnectionCommandInput extends UpdateVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcIngressConnectionCommand}.
 */
export interface UpdateVpcIngressConnectionCommandOutput extends UpdateVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:
 *
 * - AVAILABLE
 * - FAILED_CREATION
 * - FAILED_UPDATE
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, UpdateVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, UpdateVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // UpdateVpcIngressConnectionRequest
 *   VpcIngressConnectionArn: "STRING_VALUE", // required
 *   IngressVpcConfiguration: { // IngressVpcConfiguration
 *     VpcId: "STRING_VALUE",
 *     VpcEndpointId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcIngressConnectionResponse
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
 * @param UpdateVpcIngressConnectionCommandInput - {@link UpdateVpcIngressConnectionCommandInput}
 * @returns {@link UpdateVpcIngressConnectionCommandOutput}
 * @see {@link UpdateVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcIngressConnectionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidStateException} (client fault)
 *
 * You can't perform this action when the resource is in its current state.
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
export class UpdateVpcIngressConnectionCommand extends command<UpdateVpcIngressConnectionCommandInput, UpdateVpcIngressConnectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVpcIngressConnection",
  UpdateVpcIngressConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVpcIngressConnectionRequest;
      output: UpdateVpcIngressConnectionResponse;
    };
    sdk: {
      input: UpdateVpcIngressConnectionCommandInput;
      output: UpdateVpcIngressConnectionCommandOutput;
    };
  };
}

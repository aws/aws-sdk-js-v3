// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVpcEndpointServiceNameInput, GetVpcEndpointServiceNameOutput } from "../models/models_0";
import { GetVpcEndpointServiceName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the VPC endpoint service name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, GetVpcEndpointServiceNameCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, GetVpcEndpointServiceNameCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // GetVpcEndpointServiceNameInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetVpcEndpointServiceNameCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcEndpointServiceNameOutput
 * //   serviceName: "STRING_VALUE", // required
 * //   clusterVpcEndpoint: "STRING_VALUE",
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
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DSQLServiceException}
 *
 * Base exception class for all service exceptions from DSQL service.
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
export class GetVpcEndpointServiceNameCommand extends command<GetVpcEndpointServiceNameCommandInput, GetVpcEndpointServiceNameCommandOutput>(
  _ep0,
  _mw0,
  "GetVpcEndpointServiceName",
  GetVpcEndpointServiceName$
) {
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

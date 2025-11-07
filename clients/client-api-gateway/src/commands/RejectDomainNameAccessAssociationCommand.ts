// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectDomainNameAccessAssociationRequest } from "../models/models_0";
import { RejectDomainNameAccessAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectDomainNameAccessAssociationCommand}.
 */
export interface RejectDomainNameAccessAssociationCommandInput extends RejectDomainNameAccessAssociationRequest {}
/**
 * @public
 *
 * The output of {@link RejectDomainNameAccessAssociationCommand}.
 */
export interface RejectDomainNameAccessAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Rejects a domain name access association with a private custom domain name.</p>
 *          <p>To reject a domain name access association with an access association source in another AWS account, use this operation. To remove a domain name access association with an access association source in your own account, use the DeleteDomainNameAccessAssociation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, RejectDomainNameAccessAssociationCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, RejectDomainNameAccessAssociationCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // RejectDomainNameAccessAssociationRequest
 *   domainNameAccessAssociationArn: "STRING_VALUE", // required
 *   domainNameArn: "STRING_VALUE", // required
 * };
 * const command = new RejectDomainNameAccessAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectDomainNameAccessAssociationCommandInput - {@link RejectDomainNameAccessAssociationCommandInput}
 * @returns {@link RejectDomainNameAccessAssociationCommandOutput}
 * @see {@link RejectDomainNameAccessAssociationCommandInput} for command's `input` shape.
 * @see {@link RejectDomainNameAccessAssociationCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 *
 * @public
 */
export class RejectDomainNameAccessAssociationCommand extends $Command
  .classBuilder<
    RejectDomainNameAccessAssociationCommandInput,
    RejectDomainNameAccessAssociationCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "RejectDomainNameAccessAssociation", {})
  .n("APIGatewayClient", "RejectDomainNameAccessAssociationCommand")
  .sc(RejectDomainNameAccessAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectDomainNameAccessAssociationRequest;
      output: {};
    };
    sdk: {
      input: RejectDomainNameAccessAssociationCommandInput;
      output: RejectDomainNameAccessAssociationCommandOutput;
    };
  };
}

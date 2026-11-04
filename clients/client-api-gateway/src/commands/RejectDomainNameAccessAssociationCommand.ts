// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectDomainNameAccessAssociationRequest } from "../models/models_0";
import { RejectDomainNameAccessAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Rejects a domain name access association with a private custom domain name.
 *
 * To reject a domain name access association with an access association source in another AWS account, use this operation. To remove a domain name access association with an access association source in your own account, use the DeleteDomainNameAccessAssociation operation.
 *
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
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource is not found. Make sure that the request URI is correct.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request has reached its throttling limit. Retry after the specified time period.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request is denied because the caller has insufficient permissions.
 *
 * @throws {@link APIGatewayServiceException}
 *
 * Base exception class for all service exceptions from APIGateway service.
 *
 * @public
 */
export class RejectDomainNameAccessAssociationCommand extends command<RejectDomainNameAccessAssociationCommandInput, RejectDomainNameAccessAssociationCommandOutput>(
  _ep0,
  _mw0,
  "RejectDomainNameAccessAssociation",
  RejectDomainNameAccessAssociation$
) {
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

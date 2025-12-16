// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDomainNameAccessAssociationRequest, DomainNameAccessAssociation } from "../models/models_0";
import { CreateDomainNameAccessAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainNameAccessAssociationCommand}.
 */
export interface CreateDomainNameAccessAssociationCommandInput extends CreateDomainNameAccessAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainNameAccessAssociationCommand}.
 */
export interface CreateDomainNameAccessAssociationCommandOutput extends DomainNameAccessAssociation, __MetadataBearer {}

/**
 * <p> Creates a domain name access association resource between an access association source and a private custom
 *       domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDomainNameAccessAssociationCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateDomainNameAccessAssociationCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateDomainNameAccessAssociationRequest
 *   domainNameArn: "STRING_VALUE", // required
 *   accessAssociationSourceType: "VPCE", // required
 *   accessAssociationSource: "STRING_VALUE", // required
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDomainNameAccessAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DomainNameAccessAssociation
 * //   domainNameAccessAssociationArn: "STRING_VALUE",
 * //   domainNameArn: "STRING_VALUE",
 * //   accessAssociationSourceType: "VPCE",
 * //   accessAssociationSource: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDomainNameAccessAssociationCommandInput - {@link CreateDomainNameAccessAssociationCommandInput}
 * @returns {@link CreateDomainNameAccessAssociationCommandOutput}
 * @see {@link CreateDomainNameAccessAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainNameAccessAssociationCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
export class CreateDomainNameAccessAssociationCommand extends $Command
  .classBuilder<
    CreateDomainNameAccessAssociationCommandInput,
    CreateDomainNameAccessAssociationCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "CreateDomainNameAccessAssociation", {})
  .n("APIGatewayClient", "CreateDomainNameAccessAssociationCommand")
  .sc(CreateDomainNameAccessAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainNameAccessAssociationRequest;
      output: DomainNameAccessAssociation;
    };
    sdk: {
      input: CreateDomainNameAccessAssociationCommandInput;
      output: CreateDomainNameAccessAssociationCommandOutput;
    };
  };
}

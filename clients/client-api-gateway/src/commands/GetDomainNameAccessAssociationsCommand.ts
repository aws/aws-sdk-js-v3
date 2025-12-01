// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DomainNameAccessAssociations, GetDomainNameAccessAssociationsRequest } from "../models/models_0";
import { GetDomainNameAccessAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainNameAccessAssociationsCommand}.
 */
export interface GetDomainNameAccessAssociationsCommandInput extends GetDomainNameAccessAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainNameAccessAssociationsCommand}.
 */
export interface GetDomainNameAccessAssociationsCommandOutput extends DomainNameAccessAssociations, __MetadataBearer {}

/**
 * <p>Represents a collection on DomainNameAccessAssociations resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDomainNameAccessAssociationsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDomainNameAccessAssociationsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetDomainNameAccessAssociationsRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 *   resourceOwner: "SELF" || "OTHER_ACCOUNTS",
 * };
 * const command = new GetDomainNameAccessAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DomainNameAccessAssociations
 * //   items: [ // ListOfDomainNameAccessAssociation
 * //     { // DomainNameAccessAssociation
 * //       domainNameAccessAssociationArn: "STRING_VALUE",
 * //       domainNameArn: "STRING_VALUE",
 * //       accessAssociationSourceType: "VPCE",
 * //       accessAssociationSource: "STRING_VALUE",
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDomainNameAccessAssociationsCommandInput - {@link GetDomainNameAccessAssociationsCommandInput}
 * @returns {@link GetDomainNameAccessAssociationsCommandOutput}
 * @see {@link GetDomainNameAccessAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetDomainNameAccessAssociationsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetDomainNameAccessAssociationsCommand extends $Command
  .classBuilder<
    GetDomainNameAccessAssociationsCommandInput,
    GetDomainNameAccessAssociationsCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetDomainNameAccessAssociations", {})
  .n("APIGatewayClient", "GetDomainNameAccessAssociationsCommand")
  .sc(GetDomainNameAccessAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainNameAccessAssociationsRequest;
      output: DomainNameAccessAssociations;
    };
    sdk: {
      input: GetDomainNameAccessAssociationsCommandInput;
      output: GetDomainNameAccessAssociationsCommandOutput;
    };
  };
}

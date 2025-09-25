// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListGroupCertificateAuthoritiesRequest, ListGroupCertificateAuthoritiesResponse } from "../models/models_0";
import { ListGroupCertificateAuthorities } from "../schemas/schemas_34_ListGroupCertificateAuthorities";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupCertificateAuthoritiesCommand}.
 */
export interface ListGroupCertificateAuthoritiesCommandInput extends ListGroupCertificateAuthoritiesRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupCertificateAuthoritiesCommand}.
 */
export interface ListGroupCertificateAuthoritiesCommandOutput
  extends ListGroupCertificateAuthoritiesResponse,
    __MetadataBearer {}

/**
 * Retrieves the current CAs for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupCertificateAuthoritiesCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupCertificateAuthoritiesCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListGroupCertificateAuthoritiesRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new ListGroupCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupCertificateAuthoritiesResponse
 * //   GroupCertificateAuthorities: [ // __listOfGroupCertificateAuthorityProperties
 * //     { // GroupCertificateAuthorityProperties
 * //       GroupCertificateAuthorityArn: "STRING_VALUE",
 * //       GroupCertificateAuthorityId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGroupCertificateAuthoritiesCommandInput - {@link ListGroupCertificateAuthoritiesCommandInput}
 * @returns {@link ListGroupCertificateAuthoritiesCommandOutput}
 * @see {@link ListGroupCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListGroupCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListGroupCertificateAuthoritiesCommand extends $Command
  .classBuilder<
    ListGroupCertificateAuthoritiesCommandInput,
    ListGroupCertificateAuthoritiesCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListGroupCertificateAuthorities", {})
  .n("GreengrassClient", "ListGroupCertificateAuthoritiesCommand")
  .sc(ListGroupCertificateAuthorities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupCertificateAuthoritiesRequest;
      output: ListGroupCertificateAuthoritiesResponse;
    };
    sdk: {
      input: ListGroupCertificateAuthoritiesCommandInput;
      output: ListGroupCertificateAuthoritiesCommandOutput;
    };
  };
}

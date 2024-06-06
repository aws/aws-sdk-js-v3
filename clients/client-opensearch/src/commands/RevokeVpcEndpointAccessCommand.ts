// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeVpcEndpointAccessRequest, RevokeVpcEndpointAccessResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_RevokeVpcEndpointAccessCommand, se_RevokeVpcEndpointAccessCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeVpcEndpointAccessCommand}.
 */
export interface RevokeVpcEndpointAccessCommandInput extends RevokeVpcEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link RevokeVpcEndpointAccessCommand}.
 */
export interface RevokeVpcEndpointAccessCommandOutput extends RevokeVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Revokes access to an Amazon OpenSearch Service domain that was provided through an interface
 *    VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RevokeVpcEndpointAccessCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RevokeVpcEndpointAccessCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // RevokeVpcEndpointAccessRequest
 *   DomainName: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
 * };
 * const command = new RevokeVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeVpcEndpointAccessCommandInput - {@link RevokeVpcEndpointAccessCommandInput}
 * @returns {@link RevokeVpcEndpointAccessCommandOutput}
 * @see {@link RevokeVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 * @public
 */
export class RevokeVpcEndpointAccessCommand extends $Command
  .classBuilder<
    RevokeVpcEndpointAccessCommandInput,
    RevokeVpcEndpointAccessCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "RevokeVpcEndpointAccess", {})
  .n("OpenSearchClient", "RevokeVpcEndpointAccessCommand")
  .f(void 0, void 0)
  .ser(se_RevokeVpcEndpointAccessCommand)
  .de(de_RevokeVpcEndpointAccessCommand)
  .build() {}

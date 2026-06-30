// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAcmeEndpointRequest } from "../models/models_0";
import { DeleteAcmeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAcmeEndpointCommand}.
 */
export interface DeleteAcmeEndpointCommandInput extends DeleteAcmeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAcmeEndpointCommand}.
 */
export interface DeleteAcmeEndpointCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DeleteAcmeEndpointCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DeleteAcmeEndpointCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DeleteAcmeEndpointRequest
 *   AcmeEndpointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAcmeEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAcmeEndpointCommandInput - {@link DeleteAcmeEndpointCommandInput}
 * @returns {@link DeleteAcmeEndpointCommandOutput}
 * @see {@link DeleteAcmeEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteAcmeEndpointCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class DeleteAcmeEndpointCommand extends $Command
  .classBuilder<
    DeleteAcmeEndpointCommandInput,
    DeleteAcmeEndpointCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ServiceType: { type: "staticContextParams", value: `ACM-ACME` },
  })
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "DeleteAcmeEndpoint", {})
  .n("ACMClient", "DeleteAcmeEndpointCommand")
  .sc(DeleteAcmeEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAcmeEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteAcmeEndpointCommandInput;
      output: DeleteAcmeEndpointCommandOutput;
    };
  };
}

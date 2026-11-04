// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DeleteAcmeEndpointRequest } from "../models/models_0";
import { DeleteAcmeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.
 *
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
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class DeleteAcmeEndpointCommand extends command<DeleteAcmeEndpointCommandInput, DeleteAcmeEndpointCommandOutput>(
  _ep1,
  _mw0,
  "DeleteAcmeEndpoint",
  DeleteAcmeEndpoint$
) {
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

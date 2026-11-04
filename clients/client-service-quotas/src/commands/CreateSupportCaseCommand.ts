// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSupportCaseRequest, CreateSupportCaseResponse } from "../models/models_0";
import { CreateSupportCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSupportCaseCommand}.
 */
export interface CreateSupportCaseCommandInput extends CreateSupportCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateSupportCaseCommand}.
 */
export interface CreateSupportCaseCommandOutput extends CreateSupportCaseResponse, __MetadataBearer {}

/**
 * Creates a Support case for an existing quota increase request. This call only creates a Support case if the request has a `Pending` status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, CreateSupportCaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, CreateSupportCaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // CreateSupportCaseRequest
 *   RequestId: "STRING_VALUE", // required
 * };
 * const command = new CreateSupportCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSupportCaseCommandInput - {@link CreateSupportCaseCommandInput}
 * @returns {@link CreateSupportCaseCommandOutput}
 * @see {@link CreateSupportCaseCommandInput} for command's `input` shape.
 * @see {@link CreateSupportCaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permission to perform this action.
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *
 * You can't perform this action because a dependency does not have access.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Invalid input was provided.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The resource is in an invalid state.
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * Something went wrong.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota.
 *
 * @throws {@link ServiceQuotasServiceException}
 *
 * Base exception class for all service exceptions from ServiceQuotas service.
 *
 * @public
 */
export class CreateSupportCaseCommand extends command<CreateSupportCaseCommandInput, CreateSupportCaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateSupportCase",
  CreateSupportCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSupportCaseRequest;
      output: {};
    };
    sdk: {
      input: CreateSupportCaseCommandInput;
      output: CreateSupportCaseCommandOutput;
    };
  };
}

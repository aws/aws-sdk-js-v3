// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceFunctionRequest, DeleteServiceFunctionResponse } from "../models/models_0";
import { DeleteServiceFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceFunctionCommand}.
 */
export interface DeleteServiceFunctionCommandInput extends DeleteServiceFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceFunctionCommand}.
 */
export interface DeleteServiceFunctionCommandOutput extends DeleteServiceFunctionResponse, __MetadataBearer {}

/**
 * <p>Deletes a service function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteServiceFunctionCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteServiceFunctionCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteServiceFunctionRequest
 *   serviceArn: "STRING_VALUE", // required
 *   serviceFunctionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceFunctionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceFunctionResponse
 * //   serviceFunctionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteServiceFunctionCommandInput - {@link DeleteServiceFunctionCommandInput}
 * @returns {@link DeleteServiceFunctionCommandOutput}
 * @see {@link DeleteServiceFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceFunctionCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class DeleteServiceFunctionCommand extends command<DeleteServiceFunctionCommandInput, DeleteServiceFunctionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceFunction",
  DeleteServiceFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceFunctionRequest;
      output: DeleteServiceFunctionResponse;
    };
    sdk: {
      input: DeleteServiceFunctionCommandInput;
      output: DeleteServiceFunctionCommandOutput;
    };
  };
}

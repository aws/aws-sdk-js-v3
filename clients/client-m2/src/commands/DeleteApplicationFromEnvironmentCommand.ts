// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteApplicationFromEnvironmentRequest,
  DeleteApplicationFromEnvironmentResponse,
} from "../models/models_0";
import { DeleteApplicationFromEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationFromEnvironmentCommand}.
 */
export interface DeleteApplicationFromEnvironmentCommandInput extends DeleteApplicationFromEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationFromEnvironmentCommand}.
 */
export interface DeleteApplicationFromEnvironmentCommandOutput extends DeleteApplicationFromEnvironmentResponse, __MetadataBearer {}

/**
 * Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, DeleteApplicationFromEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, DeleteApplicationFromEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // DeleteApplicationFromEnvironmentRequest
 *   applicationId: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationFromEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationFromEnvironmentCommandInput - {@link DeleteApplicationFromEnvironmentCommandInput}
 * @returns {@link DeleteApplicationFromEnvironmentCommandOutput}
 * @see {@link DeleteApplicationFromEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationFromEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The parameters provided in the request conflict with existing resources.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests made exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameters provided in the request is not valid.
 *
 * @throws {@link M2ServiceException}
 *
 * Base exception class for all service exceptions from M2 service.
 *
 * @public
 */
export class DeleteApplicationFromEnvironmentCommand extends command<DeleteApplicationFromEnvironmentCommandInput, DeleteApplicationFromEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplicationFromEnvironment",
  DeleteApplicationFromEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationFromEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationFromEnvironmentCommandInput;
      output: DeleteApplicationFromEnvironmentCommandOutput;
    };
  };
}

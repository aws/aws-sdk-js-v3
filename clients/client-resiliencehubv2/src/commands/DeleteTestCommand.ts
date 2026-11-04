// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTestRequest, DeleteTestResponse } from "../models/models_0";
import { DeleteTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTestCommand}.
 */
export interface DeleteTestCommandInput extends DeleteTestRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestCommand}.
 */
export interface DeleteTestCommandOutput extends DeleteTestResponse, __MetadataBearer {}

/**
 * Deletes a test.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteTestCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteTestCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteTestRequest
 *   testId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTestResponse
 * //   testId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteTestCommandInput - {@link DeleteTestCommandInput}
 * @returns {@link DeleteTestCommandOutput}
 * @see {@link DeleteTestCommandInput} for command's `input` shape.
 * @see {@link DeleteTestCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class DeleteTestCommand extends command<DeleteTestCommandInput, DeleteTestCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTest",
  DeleteTest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestRequest;
      output: DeleteTestResponse;
    };
    sdk: {
      input: DeleteTestCommandInput;
      output: DeleteTestCommandOutput;
    };
  };
}

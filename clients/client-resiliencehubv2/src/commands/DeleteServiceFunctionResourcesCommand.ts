// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceFunctionResourcesRequest, DeleteServiceFunctionResourcesResponse } from "../models/models_0";
import { DeleteServiceFunctionResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceFunctionResourcesCommand}.
 */
export interface DeleteServiceFunctionResourcesCommandInput extends DeleteServiceFunctionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceFunctionResourcesCommand}.
 */
export interface DeleteServiceFunctionResourcesCommandOutput extends DeleteServiceFunctionResourcesResponse, __MetadataBearer {}

/**
 * Removes resources from a service function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteServiceFunctionResourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteServiceFunctionResourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteServiceFunctionResourcesRequest
 *   serviceArn: "STRING_VALUE", // required
 *   serviceFunctionId: "STRING_VALUE", // required
 *   resources: [ // ResourceList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteServiceFunctionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceFunctionResourcesResponse
 * //   serviceArn: "STRING_VALUE",
 * //   serviceFunctionId: "STRING_VALUE",
 * //   resources: [ // ResourceList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteServiceFunctionResourcesCommandInput - {@link DeleteServiceFunctionResourcesCommandInput}
 * @returns {@link DeleteServiceFunctionResourcesCommandOutput}
 * @see {@link DeleteServiceFunctionResourcesCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceFunctionResourcesCommandOutput} for command's `response` shape.
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
export class DeleteServiceFunctionResourcesCommand extends command<DeleteServiceFunctionResourcesCommandInput, DeleteServiceFunctionResourcesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceFunctionResources",
  DeleteServiceFunctionResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceFunctionResourcesRequest;
      output: DeleteServiceFunctionResourcesResponse;
    };
    sdk: {
      input: DeleteServiceFunctionResourcesCommandInput;
      output: DeleteServiceFunctionResourcesCommandOutput;
    };
  };
}

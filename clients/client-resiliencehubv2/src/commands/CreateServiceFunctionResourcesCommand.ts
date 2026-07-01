// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceFunctionResourcesRequest, CreateServiceFunctionResourcesResponse } from "../models/models_0";
import { CreateServiceFunctionResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceFunctionResourcesCommand}.
 */
export interface CreateServiceFunctionResourcesCommandInput extends CreateServiceFunctionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceFunctionResourcesCommand}.
 */
export interface CreateServiceFunctionResourcesCommandOutput extends CreateServiceFunctionResourcesResponse, __MetadataBearer {}

/**
 * <p>Associates resources with a service function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateServiceFunctionResourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateServiceFunctionResourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateServiceFunctionResourcesRequest
 *   serviceArn: "STRING_VALUE", // required
 *   serviceFunctionId: "STRING_VALUE", // required
 *   resources: [ // ResourceList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateServiceFunctionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceFunctionResourcesResponse
 * //   serviceArn: "STRING_VALUE",
 * //   serviceFunctionId: "STRING_VALUE",
 * //   resources: [ // ResourceList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateServiceFunctionResourcesCommandInput - {@link CreateServiceFunctionResourcesCommandInput}
 * @returns {@link CreateServiceFunctionResourcesCommandOutput}
 * @see {@link CreateServiceFunctionResourcesCommandInput} for command's `input` shape.
 * @see {@link CreateServiceFunctionResourcesCommandOutput} for command's `response` shape.
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
export class CreateServiceFunctionResourcesCommand extends command<CreateServiceFunctionResourcesCommandInput, CreateServiceFunctionResourcesCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceFunctionResources",
  CreateServiceFunctionResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceFunctionResourcesRequest;
      output: CreateServiceFunctionResourcesResponse;
    };
    sdk: {
      input: CreateServiceFunctionResourcesCommandInput;
      output: CreateServiceFunctionResourcesCommandOutput;
    };
  };
}

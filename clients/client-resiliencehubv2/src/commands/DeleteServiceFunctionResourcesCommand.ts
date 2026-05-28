// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteServiceFunctionResourcesRequest, DeleteServiceFunctionResourcesResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { DeleteServiceFunctionResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes resources from a service function.</p>
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
export class DeleteServiceFunctionResourcesCommand extends $Command
  .classBuilder<
    DeleteServiceFunctionResourcesCommandInput,
    DeleteServiceFunctionResourcesCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "DeleteServiceFunctionResources", {})
  .n("Resiliencehubv2Client", "DeleteServiceFunctionResourcesCommand")
  .sc(DeleteServiceFunctionResources$)
  .build() {
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

// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteInputSourceRequest, DeleteInputSourceResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { DeleteInputSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInputSourceCommand}.
 */
export interface DeleteInputSourceCommandInput extends DeleteInputSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInputSourceCommand}.
 */
export interface DeleteInputSourceCommandOutput extends DeleteInputSourceResponse, __MetadataBearer {}

/**
 * <p>Deletes an input source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteInputSourceCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteInputSourceCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteInputSourceRequest
 *   serviceArn: "STRING_VALUE", // required
 *   inputSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInputSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInputSourceResponse
 * //   serviceArn: "STRING_VALUE", // required
 * //   inputSourceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteInputSourceCommandInput - {@link DeleteInputSourceCommandInput}
 * @returns {@link DeleteInputSourceCommandOutput}
 * @see {@link DeleteInputSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteInputSourceCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
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
export class DeleteInputSourceCommand extends $Command
  .classBuilder<
    DeleteInputSourceCommandInput,
    DeleteInputSourceCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "DeleteInputSource", {})
  .n("Resiliencehubv2Client", "DeleteInputSourceCommand")
  .sc(DeleteInputSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInputSourceRequest;
      output: DeleteInputSourceResponse;
    };
    sdk: {
      input: DeleteInputSourceCommandInput;
      output: DeleteInputSourceCommandOutput;
    };
  };
}

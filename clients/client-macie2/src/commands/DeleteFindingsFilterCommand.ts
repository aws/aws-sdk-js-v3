// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { DeleteFindingsFilterRequest, DeleteFindingsFilterResponse } from "../models/models_0";
import { DeleteFindingsFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFindingsFilterCommand}.
 */
export interface DeleteFindingsFilterCommandInput extends DeleteFindingsFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFindingsFilterCommand}.
 */
export interface DeleteFindingsFilterCommandOutput extends DeleteFindingsFilterResponse, __MetadataBearer {}

/**
 * <p>Deletes a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // DeleteFindingsFilterRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteFindingsFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFindingsFilterCommandInput - {@link DeleteFindingsFilterCommandInput}
 * @returns {@link DeleteFindingsFilterCommandOutput}
 * @see {@link DeleteFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class DeleteFindingsFilterCommand extends $Command
  .classBuilder<
    DeleteFindingsFilterCommandInput,
    DeleteFindingsFilterCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "DeleteFindingsFilter", {})
  .n("Macie2Client", "DeleteFindingsFilterCommand")
  .sc(DeleteFindingsFilter$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFindingsFilterRequest;
      output: {};
    };
    sdk: {
      input: DeleteFindingsFilterCommandInput;
      output: DeleteFindingsFilterCommandOutput;
    };
  };
}

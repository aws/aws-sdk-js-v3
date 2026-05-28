// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteUserJourneyRequest, DeleteUserJourneyResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { DeleteUserJourney$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserJourneyCommand}.
 */
export interface DeleteUserJourneyCommandInput extends DeleteUserJourneyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserJourneyCommand}.
 */
export interface DeleteUserJourneyCommandOutput extends DeleteUserJourneyResponse, __MetadataBearer {}

/**
 * <p>Deletes a user journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteUserJourneyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteUserJourneyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteUserJourneyRequest
 *   systemArn: "STRING_VALUE", // required
 *   userJourneyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserJourneyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserJourneyResponse
 * //   userJourneyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteUserJourneyCommandInput - {@link DeleteUserJourneyCommandInput}
 * @returns {@link DeleteUserJourneyCommandOutput}
 * @see {@link DeleteUserJourneyCommandInput} for command's `input` shape.
 * @see {@link DeleteUserJourneyCommandOutput} for command's `response` shape.
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
export class DeleteUserJourneyCommand extends $Command
  .classBuilder<
    DeleteUserJourneyCommandInput,
    DeleteUserJourneyCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "DeleteUserJourney", {})
  .n("Resiliencehubv2Client", "DeleteUserJourneyCommand")
  .sc(DeleteUserJourney$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserJourneyRequest;
      output: DeleteUserJourneyResponse;
    };
    sdk: {
      input: DeleteUserJourneyCommandInput;
      output: DeleteUserJourneyCommandOutput;
    };
  };
}

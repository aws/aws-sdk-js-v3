// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAudienceGenerationJobRequest } from "../models/models_0";
import {
  de_DeleteAudienceGenerationJobCommand,
  se_DeleteAudienceGenerationJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAudienceGenerationJobCommand}.
 */
export interface DeleteAudienceGenerationJobCommandInput extends DeleteAudienceGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAudienceGenerationJobCommand}.
 */
export interface DeleteAudienceGenerationJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified audience generation job, and removes all data associated with the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteAudienceGenerationJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteAudienceGenerationJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteAudienceGenerationJobRequest
 *   audienceGenerationJobArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAudienceGenerationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAudienceGenerationJobCommandInput - {@link DeleteAudienceGenerationJobCommandInput}
 * @returns {@link DeleteAudienceGenerationJobCommandOutput}
 * @see {@link DeleteAudienceGenerationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteAudienceGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class DeleteAudienceGenerationJobCommand extends $Command
  .classBuilder<
    DeleteAudienceGenerationJobCommandInput,
    DeleteAudienceGenerationJobCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "DeleteAudienceGenerationJob", {})
  .n("CleanRoomsMLClient", "DeleteAudienceGenerationJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAudienceGenerationJobCommand)
  .de(de_DeleteAudienceGenerationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAudienceGenerationJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteAudienceGenerationJobCommandInput;
      output: DeleteAudienceGenerationJobCommandOutput;
    };
  };
}

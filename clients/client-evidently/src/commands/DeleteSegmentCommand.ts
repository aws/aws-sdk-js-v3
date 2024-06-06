// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { DeleteSegmentRequest, DeleteSegmentResponse } from "../models/models_0";
import { de_DeleteSegmentCommand, se_DeleteSegmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSegmentCommand}.
 */
export interface DeleteSegmentCommandInput extends DeleteSegmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSegmentCommand}.
 */
export interface DeleteSegmentCommandOutput extends DeleteSegmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that
 *     launch or experiment is not currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, DeleteSegmentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, DeleteSegmentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // DeleteSegmentRequest
 *   segment: "STRING_VALUE", // required
 * };
 * const command = new DeleteSegmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSegmentCommandInput - {@link DeleteSegmentCommandInput}
 * @returns {@link DeleteSegmentCommandOutput}
 * @see {@link DeleteSegmentCommandInput} for command's `input` shape.
 * @see {@link DeleteSegmentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 * @public
 */
export class DeleteSegmentCommand extends $Command
  .classBuilder<
    DeleteSegmentCommandInput,
    DeleteSegmentCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "DeleteSegment", {})
  .n("EvidentlyClient", "DeleteSegmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSegmentCommand)
  .de(de_DeleteSegmentCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutActionsRequest, PutActionsRequestFilterSensitiveLog } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import { de_PutActionsCommand, se_PutActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutActionsCommand}.
 */
export interface PutActionsCommandInput extends PutActionsRequest {}
/**
 * @public
 *
 * The output of {@link PutActionsCommand}.
 */
export interface PutActionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more actions to an Actions dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-actions.html">Importing actions individually</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutActionsCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutActionsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * const client = new PersonalizeEventsClient(config);
 * const input = { // PutActionsRequest
 *   datasetArn: "STRING_VALUE", // required
 *   actions: [ // ActionList // required
 *     { // Action
 *       actionId: "STRING_VALUE", // required
 *       properties: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutActionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutActionsCommandInput - {@link PutActionsCommandInput}
 * @returns {@link PutActionsCommandOutput}
 * @see {@link PutActionsCommandInput} for command's `input` shape.
 * @see {@link PutActionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeEventsServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeEvents service.</p>
 *
 *
 * @public
 */
export class PutActionsCommand extends $Command
  .classBuilder<
    PutActionsCommandInput,
    PutActionsCommandOutput,
    PersonalizeEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalizeEvents", "PutActions", {})
  .n("PersonalizeEventsClient", "PutActionsCommand")
  .f(PutActionsRequestFilterSensitiveLog, void 0)
  .ser(se_PutActionsCommand)
  .de(de_PutActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutActionsRequest;
      output: {};
    };
    sdk: {
      input: PutActionsCommandInput;
      output: PutActionsCommandOutput;
    };
  };
}

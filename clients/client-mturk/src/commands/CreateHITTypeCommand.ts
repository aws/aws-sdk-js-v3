// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHITTypeRequest, CreateHITTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_CreateHITTypeCommand, se_CreateHITTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHITTypeCommand}.
 */
export interface CreateHITTypeCommandInput extends CreateHITTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateHITTypeCommand}.
 */
export interface CreateHITTypeCommandOutput extends CreateHITTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>CreateHITType</code> operation creates a new HIT type. This operation
 *             allows you to define a standard set of HIT properties to use when creating HITs.
 *             If you register a HIT type with values that match an existing HIT type, the HIT type
 *             ID of the existing type will be returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // CreateHITTypeRequest
 *   AutoApprovalDelayInSeconds: Number("long"),
 *   AssignmentDurationInSeconds: Number("long"), // required
 *   Reward: "STRING_VALUE", // required
 *   Title: "STRING_VALUE", // required
 *   Keywords: "STRING_VALUE",
 *   Description: "STRING_VALUE", // required
 *   QualificationRequirements: [ // QualificationRequirementList
 *     { // QualificationRequirement
 *       QualificationTypeId: "STRING_VALUE", // required
 *       Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 *       IntegerValues: [ // IntegerList
 *         Number("int"),
 *       ],
 *       LocaleValues: [ // LocaleList
 *         { // Locale
 *           Country: "STRING_VALUE", // required
 *           Subdivision: "STRING_VALUE",
 *         },
 *       ],
 *       RequiredToPreview: true || false,
 *       ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 *     },
 *   ],
 * };
 * const command = new CreateHITTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateHITTypeResponse
 * //   HITTypeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHITTypeCommandInput - {@link CreateHITTypeCommandInput}
 * @returns {@link CreateHITTypeCommandOutput}
 * @see {@link CreateHITTypeCommandInput} for command's `input` shape.
 * @see {@link CreateHITTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class CreateHITTypeCommand extends $Command
  .classBuilder<
    CreateHITTypeCommandInput,
    CreateHITTypeCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "CreateHITType", {})
  .n("MTurkClient", "CreateHITTypeCommand")
  .f(void 0, void 0)
  .ser(se_CreateHITTypeCommand)
  .de(de_CreateHITTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHITTypeRequest;
      output: CreateHITTypeResponse;
    };
    sdk: {
      input: CreateHITTypeCommandInput;
      output: CreateHITTypeCommandOutput;
    };
  };
}

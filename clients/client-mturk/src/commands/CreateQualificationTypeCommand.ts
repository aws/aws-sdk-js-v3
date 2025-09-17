// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQualificationTypeRequest, CreateQualificationTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_CreateQualificationTypeCommand, se_CreateQualificationTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQualificationTypeCommand}.
 */
export interface CreateQualificationTypeCommandInput extends CreateQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateQualificationTypeCommand}.
 */
export interface CreateQualificationTypeCommandOutput extends CreateQualificationTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>CreateQualificationType</code>
 *             operation creates a new Qualification type, which is represented by a
 *             <code>QualificationType</code>
 *             data structure.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // CreateQualificationTypeRequest
 *   Name: "STRING_VALUE", // required
 *   Keywords: "STRING_VALUE",
 *   Description: "STRING_VALUE", // required
 *   QualificationTypeStatus: "Active" || "Inactive", // required
 *   RetryDelayInSeconds: Number("long"),
 *   Test: "STRING_VALUE",
 *   AnswerKey: "STRING_VALUE",
 *   TestDurationInSeconds: Number("long"),
 *   AutoGranted: true || false,
 *   AutoGrantedValue: Number("int"),
 * };
 * const command = new CreateQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateQualificationTypeResponse
 * //   QualificationType: { // QualificationType
 * //     QualificationTypeId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Keywords: "STRING_VALUE",
 * //     QualificationTypeStatus: "Active" || "Inactive",
 * //     Test: "STRING_VALUE",
 * //     TestDurationInSeconds: Number("long"),
 * //     AnswerKey: "STRING_VALUE",
 * //     RetryDelayInSeconds: Number("long"),
 * //     IsRequestable: true || false,
 * //     AutoGranted: true || false,
 * //     AutoGrantedValue: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQualificationTypeCommandInput - {@link CreateQualificationTypeCommandInput}
 * @returns {@link CreateQualificationTypeCommandOutput}
 * @see {@link CreateQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link CreateQualificationTypeCommandOutput} for command's `response` shape.
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
export class CreateQualificationTypeCommand extends $Command
  .classBuilder<
    CreateQualificationTypeCommandInput,
    CreateQualificationTypeCommandOutput,
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
  .s("MTurkRequesterServiceV20170117", "CreateQualificationType", {})
  .n("MTurkClient", "CreateQualificationTypeCommand")
  .f(void 0, void 0)
  .ser(se_CreateQualificationTypeCommand)
  .de(de_CreateQualificationTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQualificationTypeRequest;
      output: CreateQualificationTypeResponse;
    };
    sdk: {
      input: CreateQualificationTypeCommandInput;
      output: CreateQualificationTypeCommandOutput;
    };
  };
}

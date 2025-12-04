// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateQualificationTypeRequest, UpdateQualificationTypeResponse } from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateQualificationType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQualificationTypeCommand}.
 */
export interface UpdateQualificationTypeCommandInput extends UpdateQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQualificationTypeCommand}.
 */
export interface UpdateQualificationTypeCommandOutput extends UpdateQualificationTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>UpdateQualificationType</code>
 *             operation modifies the attributes of an existing Qualification type,
 *             which is represented by a QualificationType data structure. Only the
 *             owner of a Qualification type can modify its attributes.
 *         </p>
 *         <p> Most attributes of a Qualification type can be changed after
 *             the type has been created. However, the Name and Keywords fields
 *             cannot be modified. The RetryDelayInSeconds parameter can be modified
 *             or added to change the delay or to enable retries, but
 *             RetryDelayInSeconds cannot be used to disable retries. </p>
 *         <p> You can use this operation to update the test for a
 *             Qualification type. The test is updated based on the values specified
 *             for the Test, TestDurationInSeconds and AnswerKey parameters. All
 *             three parameters specify the updated test. If you are updating the
 *             test for a type, you must specify the Test and TestDurationInSeconds
 *             parameters. The AnswerKey parameter is optional; omitting it specifies
 *             that the updated test does not have an answer key. </p>
 *         <p> If you omit the Test parameter, the test for the
 *             Qualification type is unchanged. There is no way to remove a test from
 *             a Qualification type that has one. If the type already has a test, you
 *             cannot update it to be AutoGranted. If the Qualification type does not
 *             have a test and one is provided by an update, the type will henceforth
 *             have a test. </p>
 *         <p> If you want to update the test duration or answer key for an
 *             existing test without changing the questions, you must specify a Test
 *             parameter with the original questions, along with the updated values. </p>
 *         <p> If you provide an updated Test but no AnswerKey, the new test
 *             will not have an answer key. Requests for such Qualifications must be
 *             granted manually. </p>
 *         <p> You can also update the AutoGranted and AutoGrantedValue
 *             attributes of the Qualification type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // UpdateQualificationTypeRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   QualificationTypeStatus: "Active" || "Inactive",
 *   Test: "STRING_VALUE",
 *   AnswerKey: "STRING_VALUE",
 *   TestDurationInSeconds: Number("long"),
 *   RetryDelayInSeconds: Number("long"),
 *   AutoGranted: true || false,
 *   AutoGrantedValue: Number("int"),
 * };
 * const command = new UpdateQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQualificationTypeResponse
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
 * @param UpdateQualificationTypeCommandInput - {@link UpdateQualificationTypeCommandInput}
 * @returns {@link UpdateQualificationTypeCommandOutput}
 * @see {@link UpdateQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateQualificationTypeCommandOutput} for command's `response` shape.
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
export class UpdateQualificationTypeCommand extends $Command
  .classBuilder<
    UpdateQualificationTypeCommandInput,
    UpdateQualificationTypeCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "UpdateQualificationType", {})
  .n("MTurkClient", "UpdateQualificationTypeCommand")
  .sc(UpdateQualificationType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQualificationTypeRequest;
      output: UpdateQualificationTypeResponse;
    };
    sdk: {
      input: UpdateQualificationTypeCommandInput;
      output: UpdateQualificationTypeCommandOutput;
    };
  };
}

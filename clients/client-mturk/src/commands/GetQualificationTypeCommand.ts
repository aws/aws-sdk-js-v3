// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQualificationTypeRequest, GetQualificationTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetQualificationType } from "../schemas/schemas_4_Qualification";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQualificationTypeCommand}.
 */
export interface GetQualificationTypeCommandInput extends GetQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetQualificationTypeCommand}.
 */
export interface GetQualificationTypeCommandOutput extends GetQualificationTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // GetQualificationTypeRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 * };
 * const command = new GetQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetQualificationTypeResponse
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
 * @param GetQualificationTypeCommandInput - {@link GetQualificationTypeCommandInput}
 * @returns {@link GetQualificationTypeCommandOutput}
 * @see {@link GetQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link GetQualificationTypeCommandOutput} for command's `response` shape.
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
export class GetQualificationTypeCommand extends $Command
  .classBuilder<
    GetQualificationTypeCommandInput,
    GetQualificationTypeCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "GetQualificationType", {})
  .n("MTurkClient", "GetQualificationTypeCommand")
  .sc(GetQualificationType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQualificationTypeRequest;
      output: GetQualificationTypeResponse;
    };
    sdk: {
      input: GetQualificationTypeCommandInput;
      output: GetQualificationTypeCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQualificationTypesRequest, ListQualificationTypesResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListQualificationTypesCommand, se_ListQualificationTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQualificationTypesCommand}.
 */
export interface ListQualificationTypesCommandInput extends ListQualificationTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListQualificationTypesCommand}.
 */
export interface ListQualificationTypesCommandOutput extends ListQualificationTypesResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListQualificationTypes</code>
 *             operation returns a list of Qualification types, filtered by
 *             an optional search term.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationTypesCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationTypesCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MTurkClient(config);
 * const input = { // ListQualificationTypesRequest
 *   Query: "STRING_VALUE",
 *   MustBeRequestable: true || false, // required
 *   MustBeOwnedByCaller: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQualificationTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListQualificationTypesResponse
 * //   NumResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   QualificationTypes: [ // QualificationTypeList
 * //     { // QualificationType
 * //       QualificationTypeId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Keywords: "STRING_VALUE",
 * //       QualificationTypeStatus: "Active" || "Inactive",
 * //       Test: "STRING_VALUE",
 * //       TestDurationInSeconds: Number("long"),
 * //       AnswerKey: "STRING_VALUE",
 * //       RetryDelayInSeconds: Number("long"),
 * //       IsRequestable: true || false,
 * //       AutoGranted: true || false,
 * //       AutoGrantedValue: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQualificationTypesCommandInput - {@link ListQualificationTypesCommandInput}
 * @returns {@link ListQualificationTypesCommandOutput}
 * @see {@link ListQualificationTypesCommandInput} for command's `input` shape.
 * @see {@link ListQualificationTypesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListQualificationTypesCommand extends $Command
  .classBuilder<
    ListQualificationTypesCommandInput,
    ListQualificationTypesCommandOutput,
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
  .s("MTurkRequesterServiceV20170117", "ListQualificationTypes", {})
  .n("MTurkClient", "ListQualificationTypesCommand")
  .f(void 0, void 0)
  .ser(se_ListQualificationTypesCommand)
  .de(de_ListQualificationTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQualificationTypesRequest;
      output: ListQualificationTypesResponse;
    };
    sdk: {
      input: ListQualificationTypesCommandInput;
      output: ListQualificationTypesCommandOutput;
    };
  };
}

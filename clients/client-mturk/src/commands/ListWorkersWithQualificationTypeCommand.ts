// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListWorkersWithQualificationTypeRequest,
  ListWorkersWithQualificationTypeResponse,
} from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListWorkersWithQualificationType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkersWithQualificationTypeCommand}.
 */
export interface ListWorkersWithQualificationTypeCommandInput extends ListWorkersWithQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkersWithQualificationTypeCommand}.
 */
export interface ListWorkersWithQualificationTypeCommandOutput
  extends ListWorkersWithQualificationTypeResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers
 *             that have been associated with a given Qualification type.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkersWithQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkersWithQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ListWorkersWithQualificationTypeRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   Status: "Granted" || "Revoked",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkersWithQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkersWithQualificationTypeResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   Qualifications: [ // QualificationList
 * //     { // Qualification
 * //       QualificationTypeId: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //       GrantTime: new Date("TIMESTAMP"),
 * //       IntegerValue: Number("int"),
 * //       LocaleValue: { // Locale
 * //         Country: "STRING_VALUE", // required
 * //         Subdivision: "STRING_VALUE",
 * //       },
 * //       Status: "Granted" || "Revoked",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkersWithQualificationTypeCommandInput - {@link ListWorkersWithQualificationTypeCommandInput}
 * @returns {@link ListWorkersWithQualificationTypeCommandOutput}
 * @see {@link ListWorkersWithQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListWorkersWithQualificationTypeCommandOutput} for command's `response` shape.
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
export class ListWorkersWithQualificationTypeCommand extends $Command
  .classBuilder<
    ListWorkersWithQualificationTypeCommandInput,
    ListWorkersWithQualificationTypeCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "ListWorkersWithQualificationType", {})
  .n("MTurkClient", "ListWorkersWithQualificationTypeCommand")
  .sc(ListWorkersWithQualificationType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkersWithQualificationTypeRequest;
      output: ListWorkersWithQualificationTypeResponse;
    };
    sdk: {
      input: ListWorkersWithQualificationTypeCommandInput;
      output: ListWorkersWithQualificationTypeCommandOutput;
    };
  };
}

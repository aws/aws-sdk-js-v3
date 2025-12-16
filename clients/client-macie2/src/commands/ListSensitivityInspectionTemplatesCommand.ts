// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  ListSensitivityInspectionTemplatesRequest,
  ListSensitivityInspectionTemplatesResponse,
} from "../models/models_0";
import { ListSensitivityInspectionTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSensitivityInspectionTemplatesCommand}.
 */
export interface ListSensitivityInspectionTemplatesCommandInput extends ListSensitivityInspectionTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListSensitivityInspectionTemplatesCommand}.
 */
export interface ListSensitivityInspectionTemplatesCommandOutput
  extends ListSensitivityInspectionTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListSensitivityInspectionTemplatesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListSensitivityInspectionTemplatesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListSensitivityInspectionTemplatesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSensitivityInspectionTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListSensitivityInspectionTemplatesResponse
 * //   nextToken: "STRING_VALUE",
 * //   sensitivityInspectionTemplates: [ // __listOfSensitivityInspectionTemplatesEntry
 * //     { // SensitivityInspectionTemplatesEntry
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSensitivityInspectionTemplatesCommandInput - {@link ListSensitivityInspectionTemplatesCommandInput}
 * @returns {@link ListSensitivityInspectionTemplatesCommandOutput}
 * @see {@link ListSensitivityInspectionTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListSensitivityInspectionTemplatesCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class ListSensitivityInspectionTemplatesCommand extends $Command
  .classBuilder<
    ListSensitivityInspectionTemplatesCommandInput,
    ListSensitivityInspectionTemplatesCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "ListSensitivityInspectionTemplates", {})
  .n("Macie2Client", "ListSensitivityInspectionTemplatesCommand")
  .sc(ListSensitivityInspectionTemplates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSensitivityInspectionTemplatesRequest;
      output: ListSensitivityInspectionTemplatesResponse;
    };
    sdk: {
      input: ListSensitivityInspectionTemplatesCommandInput;
      output: ListSensitivityInspectionTemplatesCommandOutput;
    };
  };
}

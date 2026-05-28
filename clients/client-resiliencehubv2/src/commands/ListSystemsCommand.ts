// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSystemsRequest, ListSystemsResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { ListSystems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSystemsCommand}.
 */
export interface ListSystemsCommandInput extends ListSystemsRequest {}
/**
 * @public
 *
 * The output of {@link ListSystemsCommand}.
 */
export interface ListSystemsCommandOutput extends ListSystemsResponse, __MetadataBearer {}

/**
 * <p>Lists systems.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListSystemsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListSystemsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListSystemsRequest
 *   ouId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSystemsCommand(input);
 * const response = await client.send(command);
 * // { // ListSystemsResponse
 * //   systemSummaries: [ // SystemSummaryList // required
 * //     { // SystemSummary
 * //       systemId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       systemArn: "STRING_VALUE",
 * //       userJourneysCount: Number("int"),
 * //       servicesCount: Number("int"),
 * //       organizationId: "STRING_VALUE",
 * //       ouId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSystemsCommandInput - {@link ListSystemsCommandInput}
 * @returns {@link ListSystemsCommandOutput}
 * @see {@link ListSystemsCommandInput} for command's `input` shape.
 * @see {@link ListSystemsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListSystemsCommand extends $Command
  .classBuilder<
    ListSystemsCommandInput,
    ListSystemsCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "ListSystems", {})
  .n("Resiliencehubv2Client", "ListSystemsCommand")
  .sc(ListSystems$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSystemsRequest;
      output: ListSystemsResponse;
    };
    sdk: {
      input: ListSystemsCommandInput;
      output: ListSystemsCommandOutput;
    };
  };
}

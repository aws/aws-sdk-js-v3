// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListExportsRequest, ListExportsResponse } from "../models/models_0";
import { ListExports$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SimpleDBv2ClientResolvedConfig } from "../SimpleDBv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportsCommand}.
 */
export interface ListExportsCommandInput extends ListExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsResponse, __MetadataBearer {}

/**
 * Lists all exports that were created. The results are paginated and can be filtered by domain name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimpleDBv2Client, ListExportsCommand } from "@aws-sdk/client-simpledbv2"; // ES Modules import
 * // const { SimpleDBv2Client, ListExportsCommand } = require("@aws-sdk/client-simpledbv2"); // CommonJS import
 * // import type { SimpleDBv2ClientConfig } from "@aws-sdk/client-simpledbv2";
 * const config = {}; // type is SimpleDBv2ClientConfig
 * const client = new SimpleDBv2Client(config);
 * const input = { // ListExportsRequest
 *   domainName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportsResponse
 * //   exportSummaries: [ // ExportSummaries // required
 * //     { // ExportSummary
 * //       exportArn: "STRING_VALUE", // required
 * //       exportStatus: "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //       requestedAt: new Date("TIMESTAMP"), // required
 * //       domainName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportsCommandInput - {@link ListExportsCommandInput}
 * @returns {@link ListExportsCommandOutput}
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link SimpleDBv2ClientResolvedConfig | config} for SimpleDBv2Client's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  The specified next token is not valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  The specified parameter value is not valid.
 *
 * @throws {@link NoSuchDomainException} (client fault)
 *  The specified domain does not exist.
 *
 * @throws {@link SimpleDBv2ServiceException}
 * <p>Base exception class for all service exceptions from SimpleDBv2 service.</p>
 *
 *
 * @example List all exports
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   exportSummaries: [
 *     {
 *       domainName: "my-domain",
 *       exportArn: "arn:aws:sdb:us-east-1:123456789012:export/abc123",
 *       exportStatus: "SUCCEEDED",
 *       requestedAt: 1234567890
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListExportsCommand extends $Command
  .classBuilder<
    ListExportsCommandInput,
    ListExportsCommandOutput,
    SimpleDBv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimpleDBv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleDBv2", "ListExports", {})
  .n("SimpleDBv2Client", "ListExportsCommand")
  .sc(ListExports$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportsRequest;
      output: ListExportsResponse;
    };
    sdk: {
      input: ListExportsCommandInput;
      output: ListExportsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListEnvironmentsRequest, ListEnvironmentsResponse } from "../models/models_0";
import { de_ListEnvironmentsCommand, se_ListEnvironmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the runtime environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListEnvironmentsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListEnvironmentsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // ListEnvironmentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   names: [ // EntityNameList
 *     "STRING_VALUE",
 *   ],
 *   engineType: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsResponse
 * //   environments: [ // EnvironmentSummaryList // required
 * //     { // EnvironmentSummary
 * //       name: "STRING_VALUE", // required
 * //       environmentArn: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       instanceType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       engineType: "STRING_VALUE", // required
 * //       engineVersion: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       networkType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 * @public
 */
export class ListEnvironmentsCommand extends $Command
  .classBuilder<
    ListEnvironmentsCommandInput,
    ListEnvironmentsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "ListEnvironments", {})
  .n("M2Client", "ListEnvironmentsCommand")
  .f(void 0, void 0)
  .ser(se_ListEnvironmentsCommand)
  .de(de_ListEnvironmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsRequest;
      output: ListEnvironmentsResponse;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfilesRequest, ListProfilesResponse } from "../models/models_0";
import { de_ListProfilesCommand, se_ListProfilesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandInput extends ListProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandOutput extends ListProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the profiles associated with your Amazon Web Services account for your current or specified region. A profile is the mechanism used to create the concept of a private network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListProfilesCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListProfilesCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // import type { B2biClientConfig } from "@aws-sdk/client-b2bi";
 * const config = {}; // type is B2biClientConfig
 * const client = new B2biClient(config);
 * const input = { // ListProfilesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilesResponse
 * //   profiles: [ // ProfileList // required
 * //     { // ProfileSummary
 * //       profileId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       businessName: "STRING_VALUE", // required
 * //       logging: "ENABLED" || "DISABLED",
 * //       logGroupName: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfilesCommandInput - {@link ListProfilesCommandInput}
 * @returns {@link ListProfilesCommandOutput}
 * @see {@link ListProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProfilesCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 *
 * @example Sample ListProfiles call
 * ```javascript
 * //
 * const input = {
 *   maxResults: 50,
 *   nextToken: "foo"
 * };
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "foo",
 *   profiles: [
 *     {
 *       businessName: "John's Trucking",
 *       createdAt: "2023-11-01T21:51:05.504Z",
 *       logGroupName: "b2bi/p-60fbc37c87f04fce9-Logs",
 *       logging: "ENABLED",
 *       name: "Shipping Profile",
 *       profileId: "p-60fbc37c87f04fce9"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProfilesCommand extends $Command
  .classBuilder<
    ListProfilesCommandInput,
    ListProfilesCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "ListProfiles", {})
  .n("B2biClient", "ListProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListProfilesCommand)
  .de(de_ListProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfilesRequest;
      output: ListProfilesResponse;
    };
    sdk: {
      input: ListProfilesCommandInput;
      output: ListProfilesCommandOutput;
    };
  };
}

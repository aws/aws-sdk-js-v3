// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSpacesInput, ListSpacesOutput, ListSpacesOutputFilterSensitiveLog } from "../models/models_0";
import { de_ListSpacesCommand, se_ListSpacesCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandInput extends ListSpacesInput {}
/**
 * @public
 *
 * The output of {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandOutput extends ListSpacesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, ListSpacesCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, ListSpacesCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // ListSpacesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListSpacesOutput
 * //   spaces: [ // SpacesList // required
 * //     { // SpaceData
 * //       spaceId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       configurationStatus: "CONFIGURED" || "UNCONFIGURED", // required
 * //       vanityDomainStatus: "PENDING" || "APPROVED" || "UNAPPROVED", // required
 * //       vanityDomain: "STRING_VALUE", // required
 * //       randomDomain: "STRING_VALUE", // required
 * //       tier: "BASIC" || "STANDARD", // required
 * //       storageLimit: Number("long"), // required
 * //       createDateTime: new Date("TIMESTAMP"), // required
 * //       deleteDateTime: new Date("TIMESTAMP"),
 * //       userKMSKey: "STRING_VALUE",
 * //       userCount: Number("int"),
 * //       contentSize: Number("long"),
 * //       supportedEmailDomains: { // SupportedEmailDomainsStatus
 * //         enabled: "ENABLED" || "DISABLED" || "NOT_ALLOWED",
 * //         allowedDomains: [ // AllowedDomainsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpacesCommandInput - {@link ListSpacesCommandInput}
 * @returns {@link ListSpacesCommandOutput}
 * @see {@link ListSpacesCommandInput} for command's `input` shape.
 * @see {@link ListSpacesCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 *
 * @public
 */
export class ListSpacesCommand extends $Command
  .classBuilder<
    ListSpacesCommandInput,
    ListSpacesCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RepostSpace", "ListSpaces", {})
  .n("RepostspaceClient", "ListSpacesCommand")
  .f(void 0, ListSpacesOutputFilterSensitiveLog)
  .ser(se_ListSpacesCommand)
  .de(de_ListSpacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpacesInput;
      output: ListSpacesOutput;
    };
    sdk: {
      input: ListSpacesCommandInput;
      output: ListSpacesCommandOutput;
    };
  };
}

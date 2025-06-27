// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTypesByAssociationRequest, ListTypesByAssociationResponse } from "../models/models_0";
import { de_ListTypesByAssociationCommand, se_ListTypesByAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTypesByAssociationCommand}.
 */
export interface ListTypesByAssociationCommandInput extends ListTypesByAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ListTypesByAssociationCommand}.
 */
export interface ListTypesByAssociationCommandOutput extends ListTypesByAssociationResponse, __MetadataBearer {}

/**
 * <p>Lists <code>Type</code> objects by the source API association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListTypesByAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListTypesByAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // ListTypesByAssociationRequest
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTypesByAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ListTypesByAssociationResponse
 * //   types: [ // TypeList
 * //     { // Type
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       definition: "STRING_VALUE",
 * //       format: "SDL" || "JSON",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypesByAssociationCommandInput - {@link ListTypesByAssociationCommandInput}
 * @returns {@link ListTypesByAssociationCommandOutput}
 * @see {@link ListTypesByAssociationCommandInput} for command's `input` shape.
 * @see {@link ListTypesByAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class ListTypesByAssociationCommand extends $Command
  .classBuilder<
    ListTypesByAssociationCommandInput,
    ListTypesByAssociationCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "ListTypesByAssociation", {})
  .n("AppSyncClient", "ListTypesByAssociationCommand")
  .f(void 0, void 0)
  .ser(se_ListTypesByAssociationCommand)
  .de(de_ListTypesByAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTypesByAssociationRequest;
      output: ListTypesByAssociationResponse;
    };
    sdk: {
      input: ListTypesByAssociationCommandInput;
      output: ListTypesByAssociationCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfileAssociationsRequest, ListProfileAssociationsResponse } from "../models/models_0";
import { de_ListProfileAssociationsCommand, se_ListProfileAssociationsCommand } from "../protocols/Aws_restJson1";
import { Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ProfilesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileAssociationsCommand}.
 */
export interface ListProfileAssociationsCommandInput extends ListProfileAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileAssociationsCommand}.
 */
export interface ListProfileAssociationsCommandOutput extends ListProfileAssociationsResponse, __MetadataBearer {}

/**
 * <p>
 *   Lists all the VPCs that the specified Route 53 Profile is associated with.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, ListProfileAssociationsCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, ListProfileAssociationsCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // ListProfileAssociationsRequest
 *   ResourceId: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileAssociationsResponse
 * //   ProfileAssociations: [ // ProfileAssociations
 * //     { // ProfileAssociation
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileAssociationsCommandInput - {@link ListProfileAssociationsCommandInput}
 * @returns {@link ListProfileAssociationsCommandOutput}
 * @see {@link ListProfileAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListProfileAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *   The current account doesn't have the IAM permissions required to perform the specified operation.
 * </p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>
 * The <code>NextToken</code> you provided isn;t valid.
 * </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>
 *   One or more parameters in this request are not valid.
 * </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *   The request was throttled. Try again in a few minutes.
 * </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *   You have provided an invalid command.
 * </p>
 *
 * @throws {@link Route53ProfilesServiceException}
 * <p>Base exception class for all service exceptions from Route53Profiles service.</p>
 *
 *
 * @public
 */
export class ListProfileAssociationsCommand extends $Command
  .classBuilder<
    ListProfileAssociationsCommandInput,
    ListProfileAssociationsCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Profiles", "ListProfileAssociations", {})
  .n("Route53ProfilesClient", "ListProfileAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListProfileAssociationsCommand)
  .de(de_ListProfileAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileAssociationsRequest;
      output: ListProfileAssociationsResponse;
    };
    sdk: {
      input: ListProfileAssociationsCommandInput;
      output: ListProfileAssociationsCommandOutput;
    };
  };
}

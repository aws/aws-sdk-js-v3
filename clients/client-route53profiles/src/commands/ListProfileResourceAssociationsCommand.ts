// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListProfileResourceAssociationsRequest,
  ListProfileResourceAssociationsResponse,
} from "../models/models_0";
import type {
  Route53ProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ProfilesClient";
import { ListProfileResourceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileResourceAssociationsCommand}.
 */
export interface ListProfileResourceAssociationsCommandInput extends ListProfileResourceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileResourceAssociationsCommand}.
 */
export interface ListProfileResourceAssociationsCommandOutput extends ListProfileResourceAssociationsResponse, __MetadataBearer {}

/**
 * <p>
 *   Lists all the resource associations for the specified Route 53 Profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, ListProfileResourceAssociationsCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, ListProfileResourceAssociationsCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // ListProfileResourceAssociationsRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListProfileResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileResourceAssociationsResponse
 * //   ProfileResourceAssociations: [ // ProfileResourceAssociations
 * //     { // ProfileResourceAssociation
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceProperties: "STRING_VALUE",
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
 * @param ListProfileResourceAssociationsCommandInput - {@link ListProfileResourceAssociationsCommandInput}
 * @returns {@link ListProfileResourceAssociationsCommandOutput}
 * @see {@link ListProfileResourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListProfileResourceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *   The current account doesn't have the IAM permissions required to perform the specified operation.
 * </p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>
 * An internal server error occured. Retry your request.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 * The resource you are associating is not found.
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
export class ListProfileResourceAssociationsCommand extends $Command
  .classBuilder<
    ListProfileResourceAssociationsCommandInput,
    ListProfileResourceAssociationsCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Profiles", "ListProfileResourceAssociations", {})
  .n("Route53ProfilesClient", "ListProfileResourceAssociationsCommand")
  .sc(ListProfileResourceAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileResourceAssociationsRequest;
      output: ListProfileResourceAssociationsResponse;
    };
    sdk: {
      input: ListProfileResourceAssociationsCommandInput;
      output: ListProfileResourceAssociationsCommandOutput;
    };
  };
}

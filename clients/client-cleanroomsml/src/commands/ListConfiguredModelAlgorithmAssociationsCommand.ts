// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListConfiguredModelAlgorithmAssociationsRequest,
  ListConfiguredModelAlgorithmAssociationsResponse,
} from "../models/models_0";
import { ListConfiguredModelAlgorithmAssociations } from "../schemas/schemas_12_ConfiguredModel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredModelAlgorithmAssociationsCommand}.
 */
export interface ListConfiguredModelAlgorithmAssociationsCommandInput
  extends ListConfiguredModelAlgorithmAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfiguredModelAlgorithmAssociationsCommand}.
 */
export interface ListConfiguredModelAlgorithmAssociationsCommandOutput
  extends ListConfiguredModelAlgorithmAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of configured model algorithm associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListConfiguredModelAlgorithmAssociationsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListConfiguredModelAlgorithmAssociationsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListConfiguredModelAlgorithmAssociationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListConfiguredModelAlgorithmAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredModelAlgorithmAssociationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationList // required
 * //     { // ConfiguredModelAlgorithmAssociationSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * //       configuredModelAlgorithmArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfiguredModelAlgorithmAssociationsCommandInput - {@link ListConfiguredModelAlgorithmAssociationsCommandInput}
 * @returns {@link ListConfiguredModelAlgorithmAssociationsCommandOutput}
 * @see {@link ListConfiguredModelAlgorithmAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredModelAlgorithmAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class ListConfiguredModelAlgorithmAssociationsCommand extends $Command
  .classBuilder<
    ListConfiguredModelAlgorithmAssociationsCommandInput,
    ListConfiguredModelAlgorithmAssociationsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListConfiguredModelAlgorithmAssociations", {})
  .n("CleanRoomsMLClient", "ListConfiguredModelAlgorithmAssociationsCommand")
  .sc(ListConfiguredModelAlgorithmAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredModelAlgorithmAssociationsRequest;
      output: ListConfiguredModelAlgorithmAssociationsResponse;
    };
    sdk: {
      input: ListConfiguredModelAlgorithmAssociationsCommandInput;
      output: ListConfiguredModelAlgorithmAssociationsCommandOutput;
    };
  };
}

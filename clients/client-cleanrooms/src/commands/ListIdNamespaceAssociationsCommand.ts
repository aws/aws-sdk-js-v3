// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdNamespaceAssociationsInput, ListIdNamespaceAssociationsOutput } from "../models/models_0";
import {
  de_ListIdNamespaceAssociationsCommand,
  se_ListIdNamespaceAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdNamespaceAssociationsCommand}.
 */
export interface ListIdNamespaceAssociationsCommandInput extends ListIdNamespaceAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListIdNamespaceAssociationsCommand}.
 */
export interface ListIdNamespaceAssociationsCommandOutput extends ListIdNamespaceAssociationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of ID namespace associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListIdNamespaceAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListIdNamespaceAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListIdNamespaceAssociationsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIdNamespaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdNamespaceAssociationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   idNamespaceAssociationSummaries: [ // IdNamespaceAssociationSummaryList // required
 * //     { // IdNamespaceAssociationSummary
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       inputReferenceConfig: { // IdNamespaceAssociationInputReferenceConfig
 * //         inputReferenceArn: "STRING_VALUE", // required
 * //         manageResourcePolicies: true || false, // required
 * //       },
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       inputReferenceProperties: { // IdNamespaceAssociationInputReferencePropertiesSummary
 * //         idNamespaceType: "SOURCE" || "TARGET", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdNamespaceAssociationsCommandInput - {@link ListIdNamespaceAssociationsCommandInput}
 * @returns {@link ListIdNamespaceAssociationsCommandOutput}
 * @see {@link ListIdNamespaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListIdNamespaceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListIdNamespaceAssociationsCommand extends $Command
  .classBuilder<
    ListIdNamespaceAssociationsCommandInput,
    ListIdNamespaceAssociationsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListIdNamespaceAssociations", {})
  .n("CleanRoomsClient", "ListIdNamespaceAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListIdNamespaceAssociationsCommand)
  .de(de_ListIdNamespaceAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdNamespaceAssociationsInput;
      output: ListIdNamespaceAssociationsOutput;
    };
    sdk: {
      input: ListIdNamespaceAssociationsCommandInput;
      output: ListIdNamespaceAssociationsCommandOutput;
    };
  };
}

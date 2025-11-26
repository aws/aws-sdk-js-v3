// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListCollaborationIdNamespaceAssociationsInput,
  ListCollaborationIdNamespaceAssociationsOutput,
} from "../models/models_0";
import { ListCollaborationIdNamespaceAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationIdNamespaceAssociationsCommand}.
 */
export interface ListCollaborationIdNamespaceAssociationsCommandInput
  extends ListCollaborationIdNamespaceAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationIdNamespaceAssociationsCommand}.
 */
export interface ListCollaborationIdNamespaceAssociationsCommandOutput
  extends ListCollaborationIdNamespaceAssociationsOutput,
    __MetadataBearer {}

/**
 * <p>Returns a list of the ID namespace associations in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationIdNamespaceAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationIdNamespaceAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationIdNamespaceAssociationsInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollaborationIdNamespaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationIdNamespaceAssociationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   collaborationIdNamespaceAssociationSummaries: [ // CollaborationIdNamespaceAssociationSummaryList // required
 * //     { // CollaborationIdNamespaceAssociationSummary
 * //       arn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
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
 * @param ListCollaborationIdNamespaceAssociationsCommandInput - {@link ListCollaborationIdNamespaceAssociationsCommandInput}
 * @returns {@link ListCollaborationIdNamespaceAssociationsCommandOutput}
 * @see {@link ListCollaborationIdNamespaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationIdNamespaceAssociationsCommandOutput} for command's `response` shape.
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
export class ListCollaborationIdNamespaceAssociationsCommand extends $Command
  .classBuilder<
    ListCollaborationIdNamespaceAssociationsCommandInput,
    ListCollaborationIdNamespaceAssociationsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListCollaborationIdNamespaceAssociations", {})
  .n("CleanRoomsClient", "ListCollaborationIdNamespaceAssociationsCommand")
  .sc(ListCollaborationIdNamespaceAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationIdNamespaceAssociationsInput;
      output: ListCollaborationIdNamespaceAssociationsOutput;
    };
    sdk: {
      input: ListCollaborationIdNamespaceAssociationsCommandInput;
      output: ListCollaborationIdNamespaceAssociationsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdNamespaceAssociationsInput, ListIdNamespaceAssociationsOutput } from "../models/models_0";
import { ListIdNamespaceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of ID namespace associations.
 *
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
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class ListIdNamespaceAssociationsCommand extends command<ListIdNamespaceAssociationsCommandInput, ListIdNamespaceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListIdNamespaceAssociations",
  ListIdNamespaceAssociations$
) {
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

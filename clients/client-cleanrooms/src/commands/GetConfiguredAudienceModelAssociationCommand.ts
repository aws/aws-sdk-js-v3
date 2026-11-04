// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetConfiguredAudienceModelAssociationInput,
  GetConfiguredAudienceModelAssociationOutput,
} from "../models/models_0";
import { GetConfiguredAudienceModelAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConfiguredAudienceModelAssociationCommand}.
 */
export interface GetConfiguredAudienceModelAssociationCommandInput extends GetConfiguredAudienceModelAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetConfiguredAudienceModelAssociationCommand}.
 */
export interface GetConfiguredAudienceModelAssociationCommandOutput extends GetConfiguredAudienceModelAssociationOutput, __MetadataBearer {}

/**
 * Returns information about a configured audience model association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetConfiguredAudienceModelAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetConfiguredAudienceModelAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetConfiguredAudienceModelAssociationInput
 *   configuredAudienceModelAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredAudienceModelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredAudienceModelAssociationOutput
 * //   configuredAudienceModelAssociation: { // ConfiguredAudienceModelAssociation
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     configuredAudienceModelArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     manageResourcePolicies: true || false, // required
 * //     description: "STRING_VALUE",
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfiguredAudienceModelAssociationCommandInput - {@link GetConfiguredAudienceModelAssociationCommandInput}
 * @returns {@link GetConfiguredAudienceModelAssociationCommandOutput}
 * @see {@link GetConfiguredAudienceModelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredAudienceModelAssociationCommandOutput} for command's `response` shape.
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
export class GetConfiguredAudienceModelAssociationCommand extends command<GetConfiguredAudienceModelAssociationCommandInput, GetConfiguredAudienceModelAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetConfiguredAudienceModelAssociation",
  GetConfiguredAudienceModelAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredAudienceModelAssociationInput;
      output: GetConfiguredAudienceModelAssociationOutput;
    };
    sdk: {
      input: GetConfiguredAudienceModelAssociationCommandInput;
      output: GetConfiguredAudienceModelAssociationCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSegmentDefinitionRequest, DeleteSegmentDefinitionResponse } from "../models/models_0";
import { DeleteSegmentDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSegmentDefinitionCommand}.
 */
export interface DeleteSegmentDefinitionCommandInput extends DeleteSegmentDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSegmentDefinitionCommand}.
 */
export interface DeleteSegmentDefinitionCommandOutput extends DeleteSegmentDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a segment definition from the domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteSegmentDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteSegmentDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteSegmentDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSegmentDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSegmentDefinitionResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSegmentDefinitionCommandInput - {@link DeleteSegmentDefinitionCommandInput}
 * @returns {@link DeleteSegmentDefinitionCommandOutput}
 * @see {@link DeleteSegmentDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteSegmentDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class DeleteSegmentDefinitionCommand extends command<DeleteSegmentDefinitionCommandInput, DeleteSegmentDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSegmentDefinition",
  DeleteSegmentDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSegmentDefinitionRequest;
      output: DeleteSegmentDefinitionResponse;
    };
    sdk: {
      input: DeleteSegmentDefinitionCommandInput;
      output: DeleteSegmentDefinitionCommandOutput;
    };
  };
}

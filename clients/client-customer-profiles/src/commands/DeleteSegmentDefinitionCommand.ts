// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSegmentDefinitionRequest, DeleteSegmentDefinitionResponse } from "../models/models_0";
import { DeleteSegmentDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a segment definition from the domain.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class DeleteSegmentDefinitionCommand extends $Command
  .classBuilder<
    DeleteSegmentDefinitionCommandInput,
    DeleteSegmentDefinitionCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteSegmentDefinition", {})
  .n("CustomerProfilesClient", "DeleteSegmentDefinitionCommand")
  .sc(DeleteSegmentDefinition)
  .build() {
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

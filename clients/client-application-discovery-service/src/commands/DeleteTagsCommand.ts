// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTagsRequest, DeleteTagsResponse } from "../models/models_0";
import { DeleteTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandInput extends DeleteTagsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandOutput extends DeleteTagsResponse, __MetadataBearer {}

/**
 * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DeleteTagsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DeleteTagsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DeleteTagsRequest
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagSet
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTagsCommandInput - {@link DeleteTagsCommandInput}
 * @returns {@link DeleteTagsCommandOutput}
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified configuration ID was not located. Verify the configuration ID and try again.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class DeleteTagsCommand extends command<DeleteTagsCommandInput, DeleteTagsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTags",
  DeleteTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTagsRequest;
      output: {};
    };
    sdk: {
      input: DeleteTagsCommandInput;
      output: DeleteTagsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationsRequest, DeleteApplicationsResponse } from "../models/models_0";
import { DeleteApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationsCommand}.
 */
export interface DeleteApplicationsCommandInput extends DeleteApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationsCommand}.
 */
export interface DeleteApplicationsCommandOutput extends DeleteApplicationsResponse, __MetadataBearer {}

/**
 * Deletes a list of applications and their associations with configuration items.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DeleteApplicationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DeleteApplicationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DeleteApplicationsRequest
 *   configurationIds: [ // ApplicationIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteApplicationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationsCommandInput - {@link DeleteApplicationsCommandInput}
 * @returns {@link DeleteApplicationsCommandOutput}
 * @see {@link DeleteApplicationsCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationsCommandOutput} for command's `response` shape.
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
export class DeleteApplicationsCommand extends command<DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplications",
  DeleteApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationsRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationsCommandInput;
      output: DeleteApplicationsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateApiRequest, AssociateApiResponse } from "../models/models_0";
import { AssociateApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateApiCommand}.
 */
export interface AssociateApiCommandInput extends AssociateApiRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApiCommand}.
 */
export interface AssociateApiCommandOutput extends AssociateApiResponse, __MetadataBearer {}

/**
 * Maps an endpoint to your custom domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, AssociateApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, AssociateApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // AssociateApiRequest
 *   domainName: "STRING_VALUE", // required
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new AssociateApiCommand(input);
 * const response = await client.send(command);
 * // { // AssociateApiResponse
 * //   apiAssociation: { // ApiAssociation
 * //     domainName: "STRING_VALUE",
 * //     apiId: "STRING_VALUE",
 * //     associationStatus: "PROCESSING" || "FAILED" || "SUCCESS",
 * //     deploymentDetail: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateApiCommandInput - {@link AssociateApiCommandInput}
 * @returns {@link AssociateApiCommandOutput}
 * @see {@link AssociateApiCommandInput} for command's `input` shape.
 * @see {@link AssociateApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class AssociateApiCommand extends command<AssociateApiCommandInput, AssociateApiCommandOutput>(
  _ep0,
  _mw0,
  "AssociateApi",
  AssociateApi$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApiRequest;
      output: AssociateApiResponse;
    };
    sdk: {
      input: AssociateApiCommandInput;
      output: AssociateApiCommandOutput;
    };
  };
}

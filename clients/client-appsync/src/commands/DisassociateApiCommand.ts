// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateApiRequest, DisassociateApiResponse } from "../models/models_0";
import { DisassociateApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateApiCommand}.
 */
export interface DisassociateApiCommandInput extends DisassociateApiRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApiCommand}.
 */
export interface DisassociateApiCommandOutput extends DisassociateApiResponse, __MetadataBearer {}

/**
 * Removes an `ApiAssociation` object from a custom domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DisassociateApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DisassociateApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // DisassociateApiRequest
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateApiCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApiCommandInput - {@link DisassociateApiCommandInput}
 * @returns {@link DisassociateApiCommandOutput}
 * @see {@link DisassociateApiCommandInput} for command's `input` shape.
 * @see {@link DisassociateApiCommandOutput} for command's `response` shape.
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
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
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
export class DisassociateApiCommand extends command<DisassociateApiCommandInput, DisassociateApiCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateApi",
  DisassociateApi$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApiRequest;
      output: {};
    };
    sdk: {
      input: DisassociateApiCommandInput;
      output: DisassociateApiCommandOutput;
    };
  };
}

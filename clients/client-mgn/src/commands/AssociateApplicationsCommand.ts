// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateApplicationsRequest, AssociateApplicationsResponse } from "../models/models_0";
import { AssociateApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateApplicationsCommand}.
 */
export interface AssociateApplicationsCommandInput extends AssociateApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationsCommand}.
 */
export interface AssociateApplicationsCommandOutput extends AssociateApplicationsResponse, __MetadataBearer {}

/**
 * Associate applications to wave.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, AssociateApplicationsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, AssociateApplicationsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // AssociateApplicationsRequest
 *   waveID: "STRING_VALUE", // required
 *   applicationIDs: [ // ApplicationIDs // required
 *     "STRING_VALUE",
 *   ],
 *   accountID: "STRING_VALUE",
 * };
 * const command = new AssociateApplicationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateApplicationsCommandInput - {@link AssociateApplicationsCommandInput}
 * @returns {@link AssociateApplicationsCommandOutput}
 * @see {@link AssociateApplicationsCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because it exceeded the service quota.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * Uninitialized account exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @public
 */
export class AssociateApplicationsCommand extends command<AssociateApplicationsCommandInput, AssociateApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateApplications",
  AssociateApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationsRequest;
      output: {};
    };
    sdk: {
      input: AssociateApplicationsCommandInput;
      output: AssociateApplicationsCommandOutput;
    };
  };
}

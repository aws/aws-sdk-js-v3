// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCollectorDataAccessAuthorizationInput,
  GetCollectorDataAccessAuthorizationOutput,
} from "../models/models_0";
import { GetCollectorDataAccessAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCollectorDataAccessAuthorizationCommand}.
 */
export interface GetCollectorDataAccessAuthorizationCommandInput extends GetCollectorDataAccessAuthorizationInput {}
/**
 * @public
 *
 * The output of {@link GetCollectorDataAccessAuthorizationCommand}.
 */
export interface GetCollectorDataAccessAuthorizationCommandOutput extends GetCollectorDataAccessAuthorizationOutput, __MetadataBearer {}

/**
 * Authorizes an Environment's access to a Collector's data. Continuum calls this
 * operation with the Environment's Collector data-access role before it reads the
 * Collector's inventory, so grant continuum:GetCollectorDataAccessAuthorization to
 * that role and, for a Collector in another account, in the Collector's resource
 * policy. The operation evaluates the action against the exact Collector ARN and
 * the Collector's current resource policy using IAM and the caller's authenticated
 * request context, with environmentArn as the continuum:EnvironmentArn condition
 * key. A successful request returns HTTP 200 with no response members. If access
 * is not granted, the operation returns AccessDeniedException without disclosing
 * Collector existence, ownership, or the policy layer that denied access. The
 * service does not reinterpret the policy using only an account ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetCollectorDataAccessAuthorizationCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetCollectorDataAccessAuthorizationCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetCollectorDataAccessAuthorizationInput
 *   accountId: "STRING_VALUE", // required
 *   collectorId: "STRING_VALUE", // required
 *   environmentArn: "STRING_VALUE",
 * };
 * const command = new GetCollectorDataAccessAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param GetCollectorDataAccessAuthorizationCommandInput - {@link GetCollectorDataAccessAuthorizationCommandInput}
 * @returns {@link GetCollectorDataAccessAuthorizationCommandOutput}
 * @see {@link GetCollectorDataAccessAuthorizationCommandInput} for command's `input` shape.
 * @see {@link GetCollectorDataAccessAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class GetCollectorDataAccessAuthorizationCommand extends command<GetCollectorDataAccessAuthorizationCommandInput, GetCollectorDataAccessAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "GetCollectorDataAccessAuthorization",
  GetCollectorDataAccessAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollectorDataAccessAuthorizationInput;
      output: {};
    };
    sdk: {
      input: GetCollectorDataAccessAuthorizationCommandInput;
      output: GetCollectorDataAccessAuthorizationCommandOutput;
    };
  };
}

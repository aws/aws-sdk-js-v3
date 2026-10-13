// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRLSPolicyRequest, CreateRLSPolicyResponse } from "../models/models_0";
import { CreateRLSPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRLSPolicyCommand}.
 */
export interface CreateRLSPolicyCommandInput extends CreateRLSPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateRLSPolicyCommand}.
 */
export interface CreateRLSPolicyCommandOutput extends CreateRLSPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a row-level security (RLS) policy. A row-level security policy defines a filter expression that Lake Formation evaluates to determine which rows of a table a principal is allowed to see. The policy is created independently of any resource, and is later associated with a resource and principal using <code>AttachRLSPolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateRLSPolicyCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateRLSPolicyCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CreateRLSPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   AttachmentColumns: [ // ColumnList // required
 *     { // Column
 *       Name: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *     },
 *   ],
 *   FilterExpression: "STRING_VALUE", // required
 * };
 * const command = new CreateRLSPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateRLSPolicyCommandInput - {@link CreateRLSPolicyCommandInput}
 * @returns {@link CreateRLSPolicyCommandOutput}
 * @see {@link CreateRLSPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateRLSPolicyCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class CreateRLSPolicyCommand extends command<CreateRLSPolicyCommandInput, CreateRLSPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateRLSPolicy",
  CreateRLSPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRLSPolicyRequest;
      output: {};
    };
    sdk: {
      input: CreateRLSPolicyCommandInput;
      output: CreateRLSPolicyCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFlowRequest, CreateFlowResponse } from "../models/models_3";
import { CreateFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandInput extends CreateFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandOutput extends CreateFlowResponse, __MetadataBearer {}

/**
 * <p>Creates a new flow in the specified Amazon Web Services account. Creates both a DRAFT and PUBLISHED (auto-published) version.</p>
 *          <p>This operation is idempotent. Supply a <code>ClientToken</code> to safely retry without creating duplicate resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateFlowCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateFlowCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateFlowRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   FlowDefinition: "DOCUMENT_VALUE", // required
 *   Permissions: [ // PermissionsList
 *     { // Permission
 *       Actions: [ // ActionsList // required
 *         "STRING_VALUE",
 *       ],
 *       Principal: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowResponse
 * //   Arn: "STRING_VALUE", // required
 * //   FlowId: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateFlowCommandInput - {@link CreateFlowCommandInput}
 * @returns {@link CreateFlowCommandOutput}
 * @see {@link CreateFlowCommandInput} for command's `input` shape.
 * @see {@link CreateFlowCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class CreateFlowCommand extends command<CreateFlowCommandInput, CreateFlowCommandOutput>(
  _ep0,
  _mw0,
  "CreateFlow",
  CreateFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFlowRequest;
      output: CreateFlowResponse;
    };
    sdk: {
      input: CreateFlowCommandInput;
      output: CreateFlowCommandOutput;
    };
  };
}

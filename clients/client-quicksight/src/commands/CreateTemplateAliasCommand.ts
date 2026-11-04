// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateAliasRequest, CreateTemplateAliasResponse } from "../models/models_3";
import { CreateTemplateAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTemplateAliasCommand}.
 */
export interface CreateTemplateAliasCommandInput extends CreateTemplateAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateTemplateAliasCommand}.
 */
export interface CreateTemplateAliasCommandOutput extends CreateTemplateAliasResponse, __MetadataBearer {}

/**
 * Creates a template alias for a template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateTemplateAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 *   TemplateVersionNumber: Number("long"), // required
 * };
 * const command = new CreateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateAliasResponse
 * //   TemplateAlias: { // TemplateAlias
 * //     AliasName: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     TemplateVersionNumber: Number("long"),
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTemplateAliasCommandInput - {@link CreateTemplateAliasCommandInput}
 * @returns {@link CreateTemplateAliasCommandOutput}
 * @see {@link CreateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class CreateTemplateAliasCommand extends command<CreateTemplateAliasCommandInput, CreateTemplateAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplateAlias",
  CreateTemplateAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateAliasRequest;
      output: CreateTemplateAliasResponse;
    };
    sdk: {
      input: CreateTemplateAliasCommandInput;
      output: CreateTemplateAliasCommandOutput;
    };
  };
}

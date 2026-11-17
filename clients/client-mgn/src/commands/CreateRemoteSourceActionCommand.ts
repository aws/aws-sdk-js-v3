// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRemoteSourceActionRequest, CreateRemoteSourceActionResponse } from "../models/models_0";
import { CreateRemoteSourceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRemoteSourceActionCommand}.
 */
export interface CreateRemoteSourceActionCommandInput extends CreateRemoteSourceActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRemoteSourceActionCommand}.
 */
export interface CreateRemoteSourceActionCommandOutput extends CreateRemoteSourceActionResponse, __MetadataBearer {}

/**
 * <p>Creates a source action, which references a script in AWS Systems Manager Parameter Store that Application Migration Service runs on source environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateRemoteSourceActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateRemoteSourceActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // CreateRemoteSourceActionRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   ssmParameterName: "STRING_VALUE", // required
 *   timeoutSeconds: Number("int"),
 *   operatingSystem: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new CreateRemoteSourceActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRemoteSourceActionResponse
 * //   remoteSourceActionID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   ssmParameterName: "STRING_VALUE",
 * //   timeoutSeconds: Number("int"),
 * //   operatingSystem: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRemoteSourceActionCommandInput - {@link CreateRemoteSourceActionCommandInput}
 * @returns {@link CreateRemoteSourceActionCommandOutput}
 * @see {@link CreateRemoteSourceActionCommandInput} for command's `input` shape.
 * @see {@link CreateRemoteSourceActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because it exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class CreateRemoteSourceActionCommand extends command<CreateRemoteSourceActionCommandInput, CreateRemoteSourceActionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRemoteSourceAction",
  CreateRemoteSourceAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRemoteSourceActionRequest;
      output: CreateRemoteSourceActionResponse;
    };
    sdk: {
      input: CreateRemoteSourceActionCommandInput;
      output: CreateRemoteSourceActionCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFrameworkInput, CreateFrameworkOutput } from "../models/models_0";
import { CreateFramework$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFrameworkCommand}.
 */
export interface CreateFrameworkCommandInput extends CreateFrameworkInput {}
/**
 * @public
 *
 * The output of {@link CreateFrameworkCommand}.
 */
export interface CreateFrameworkCommandOutput extends CreateFrameworkOutput, __MetadataBearer {}

/**
 * Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 *   FrameworkDescription: "STRING_VALUE",
 *   FrameworkControls: [ // FrameworkControls // required
 *     { // FrameworkControl
 *       ControlName: "STRING_VALUE", // required
 *       ControlInputParameters: [ // ControlInputParameters
 *         { // ControlInputParameter
 *           ParameterName: "STRING_VALUE",
 *           ParameterValue: "STRING_VALUE",
 *         },
 *       ],
 *       ControlScope: { // ControlScope
 *         ComplianceResourceIds: [ // ComplianceResourceIdList
 *           "STRING_VALUE",
 *         ],
 *         ComplianceResourceTypes: [ // ResourceTypeList
 *           "STRING_VALUE",
 *         ],
 *         Tags: { // stringMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 *   FrameworkTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateFrameworkOutput
 * //   FrameworkName: "STRING_VALUE",
 * //   FrameworkArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFrameworkCommandInput - {@link CreateFrameworkCommandInput}
 * @returns {@link CreateFrameworkCommandOutput}
 * @see {@link CreateFrameworkCommandInput} for command's `input` shape.
 * @see {@link CreateFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The required resource already exists.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class CreateFrameworkCommand extends command<CreateFrameworkCommandInput, CreateFrameworkCommandOutput>(
  _ep0,
  _mw0,
  "CreateFramework",
  CreateFramework$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFrameworkInput;
      output: CreateFrameworkOutput;
    };
    sdk: {
      input: CreateFrameworkCommandInput;
      output: CreateFrameworkCommandOutput;
    };
  };
}

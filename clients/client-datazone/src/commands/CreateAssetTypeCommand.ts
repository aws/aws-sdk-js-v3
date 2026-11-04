// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssetTypeInput, CreateAssetTypeOutput } from "../models/models_0";
import { CreateAssetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssetTypeCommand}.
 */
export interface CreateAssetTypeCommandInput extends CreateAssetTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetTypeCommand}.
 */
export interface CreateAssetTypeCommandOutput extends CreateAssetTypeOutput, __MetadataBearer {}

/**
 * Creates a custom asset type.
 *
 * Prerequisites:
 *
 * - The `formsInput` field is required, however, can be passed as empty (e.g. `-forms-input \{\})`.
 * - You must have `CreateAssetType` permissions.
 * - The domain-identifier and owning-project-identifier must be valid and active.
 * - The name of the asset type must be unique within the domain — duplicate names will cause failure.
 * - JSON input must be valid — incorrect formatting causes Invalid JSON errors.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   formsInput: { // FormsInputMap // required
 *     "<keys>": { // FormEntryInput
 *       typeIdentifier: "STRING_VALUE", // required
 *       typeRevision: "STRING_VALUE", // required
 *       required: true || false,
 *     },
 *   },
 *   owningProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetTypeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   formsOutput: { // FormsOutputMap // required
 * //     "<keys>": { // FormEntryOutput
 * //       typeName: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE", // required
 * //       required: true || false,
 * //     },
 * //   },
 * //   owningProjectId: "STRING_VALUE",
 * //   originDomainId: "STRING_VALUE",
 * //   originProjectId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAssetTypeCommandInput - {@link CreateAssetTypeCommandInput}
 * @returns {@link CreateAssetTypeCommandOutput}
 * @see {@link CreateAssetTypeCommandInput} for command's `input` shape.
 * @see {@link CreateAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class CreateAssetTypeCommand extends command<CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssetType",
  CreateAssetType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetTypeInput;
      output: CreateAssetTypeOutput;
    };
    sdk: {
      input: CreateAssetTypeCommandInput;
      output: CreateAssetTypeCommandOutput;
    };
  };
}

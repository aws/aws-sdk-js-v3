// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEnvironmentTemplateVersionInput, CreateEnvironmentTemplateVersionOutput } from "../models/models_0";
import { CreateEnvironmentTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentTemplateVersionCommand}.
 */
export interface CreateEnvironmentTemplateVersionCommandInput extends CreateEnvironmentTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentTemplateVersionCommand}.
 */
export interface CreateEnvironmentTemplateVersionCommandOutput extends CreateEnvironmentTemplateVersionOutput, __MetadataBearer {}

/**
 * Create a new major or minor version of an environment template. A major version of an environment template is a version that *isn't* backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CreateEnvironmentTemplateVersionInput
 *   clientToken: "STRING_VALUE",
 *   templateName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   majorVersion: "STRING_VALUE",
 *   source: { // TemplateVersionSourceInput Union: only one key present
 *     s3: { // S3ObjectSource
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentTemplateVersionOutput
 * //   environmentTemplateVersion: { // EnvironmentTemplateVersion
 * //     templateName: "STRING_VALUE", // required
 * //     majorVersion: "STRING_VALUE", // required
 * //     minorVersion: "STRING_VALUE", // required
 * //     recommendedMinorVersion: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusMessage: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     schema: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentTemplateVersionCommandInput - {@link CreateEnvironmentTemplateVersionCommandInput}
 * @returns {@link CreateEnvironmentTemplateVersionCommandOutput}
 * @see {@link CreateEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A quota was exceeded. For more information, see [Proton Quotas](https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html) in the *Proton User Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class CreateEnvironmentTemplateVersionCommand extends command<CreateEnvironmentTemplateVersionCommandInput, CreateEnvironmentTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnvironmentTemplateVersion",
  CreateEnvironmentTemplateVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentTemplateVersionInput;
      output: CreateEnvironmentTemplateVersionOutput;
    };
    sdk: {
      input: CreateEnvironmentTemplateVersionCommandInput;
      output: CreateEnvironmentTemplateVersionCommandOutput;
    };
  };
}

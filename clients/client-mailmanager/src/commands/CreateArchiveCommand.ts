// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateArchiveRequest, CreateArchiveResponse } from "../models/models_0";
import { CreateArchive$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateArchiveCommand}.
 */
export interface CreateArchiveCommandInput extends CreateArchiveRequest {}
/**
 * @public
 *
 * The output of {@link CreateArchiveCommand}.
 */
export interface CreateArchiveCommandOutput extends CreateArchiveResponse, __MetadataBearer {}

/**
 * Creates a new email archive resource for storing and retaining emails.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateArchiveCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateArchiveCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateArchiveRequest
 *   ClientToken: "STRING_VALUE",
 *   ArchiveName: "STRING_VALUE", // required
 *   Retention: { // ArchiveRetention Union: only one key present
 *     RetentionPeriod: "THREE_MONTHS" || "SIX_MONTHS" || "NINE_MONTHS" || "ONE_YEAR" || "EIGHTEEN_MONTHS" || "TWO_YEARS" || "THIRTY_MONTHS" || "THREE_YEARS" || "FOUR_YEARS" || "FIVE_YEARS" || "SIX_YEARS" || "SEVEN_YEARS" || "EIGHT_YEARS" || "NINE_YEARS" || "TEN_YEARS" || "PERMANENT",
 *   },
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * // { // CreateArchiveResponse
 * //   ArchiveId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateArchiveCommandInput - {@link CreateArchiveCommandInput}
 * @returns {@link CreateArchiveCommandOutput}
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Occurs when a user is denied access to a specific resource or action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Occurs when an operation exceeds a predefined service quota or limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class CreateArchiveCommand extends command<CreateArchiveCommandInput, CreateArchiveCommandOutput>(
  _ep0,
  _mw0,
  "CreateArchive",
  CreateArchive$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateArchiveRequest;
      output: CreateArchiveResponse;
    };
    sdk: {
      input: CreateArchiveCommandInput;
      output: CreateArchiveCommandOutput;
    };
  };
}

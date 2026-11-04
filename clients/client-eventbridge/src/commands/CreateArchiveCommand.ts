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
 * Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
 *
 * > **Important:**
 * >
 * > If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a customer managed key for any archives for the event bus as well.
 * >
 * > For more information, see [Encrypting archives](https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html) in the *Amazon EventBridge User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateArchiveCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateArchiveCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // CreateArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 *   EventSourceArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventPattern: "STRING_VALUE",
 *   RetentionDays: Number("int"),
 *   KmsKeyIdentifier: "STRING_VALUE",
 * };
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * // { // CreateArchiveResponse
 * //   ArchiveArn: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateArchiveCommandInput - {@link CreateArchiveCommandInput}
 * @returns {@link CreateArchiveCommandOutput}
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *
 * The event pattern is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request failed because it attempted to create resource beyond the allowed service quota.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource you are trying to create already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link EventBridgeServiceException}
 *
 * Base exception class for all service exceptions from EventBridge service.
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

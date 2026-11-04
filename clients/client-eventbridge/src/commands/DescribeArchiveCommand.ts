// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeArchiveRequest, DescribeArchiveResponse } from "../models/models_0";
import { DescribeArchive$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeArchiveCommand}.
 */
export interface DescribeArchiveCommandInput extends DescribeArchiveRequest {}
/**
 * @public
 *
 * The output of {@link DescribeArchiveCommand}.
 */
export interface DescribeArchiveCommandOutput extends DescribeArchiveResponse, __MetadataBearer {}

/**
 * Retrieves details about an archive.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeArchiveCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeArchiveCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 * };
 * const command = new DescribeArchiveCommand(input);
 * const response = await client.send(command);
 * // { // DescribeArchiveResponse
 * //   ArchiveArn: "STRING_VALUE",
 * //   ArchiveName: "STRING_VALUE",
 * //   EventSourceArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EventPattern: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * //   RetentionDays: Number("int"),
 * //   SizeBytes: Number("long"),
 * //   EventCount: Number("long"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeArchiveCommandInput - {@link DescribeArchiveCommandInput}
 * @returns {@link DescribeArchiveCommandOutput}
 * @see {@link DescribeArchiveCommandInput} for command's `input` shape.
 * @see {@link DescribeArchiveCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
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
export class DescribeArchiveCommand extends command<DescribeArchiveCommandInput, DescribeArchiveCommandOutput>(
  _ep0,
  _mw0,
  "DescribeArchive",
  DescribeArchive$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeArchiveRequest;
      output: DescribeArchiveResponse;
    };
    sdk: {
      input: DescribeArchiveCommandInput;
      output: DescribeArchiveCommandOutput;
    };
  };
}

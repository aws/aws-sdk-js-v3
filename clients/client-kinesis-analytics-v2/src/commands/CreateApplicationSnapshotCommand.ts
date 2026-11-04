// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApplicationSnapshotRequest, CreateApplicationSnapshotResponse } from "../models/models_0";
import { CreateApplicationSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApplicationSnapshotCommand}.
 */
export interface CreateApplicationSnapshotCommandInput extends CreateApplicationSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationSnapshotCommand}.
 */
export interface CreateApplicationSnapshotCommandOutput extends CreateApplicationSnapshotResponse, __MetadataBearer {}

/**
 * Creates a snapshot of the application's state data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // CreateApplicationSnapshotRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   SnapshotName: "STRING_VALUE", // required
 * };
 * const command = new CreateApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateApplicationSnapshotCommandInput - {@link CreateApplicationSnapshotCommandInput}
 * @returns {@link CreateApplicationSnapshotCommandOutput}
 * @see {@link CreateApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *
 * The user-provided application configuration is not valid.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The specified input parameter value is not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request JSON is not valid for the operation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The number of allowed resources has been exceeded.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The application is not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Specified application can't be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalyticsV2 service.
 *
 * @public
 */
export class CreateApplicationSnapshotCommand extends command<CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateApplicationSnapshot",
  CreateApplicationSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationSnapshotRequest;
      output: {};
    };
    sdk: {
      input: CreateApplicationSnapshotCommandInput;
      output: CreateApplicationSnapshotCommandOutput;
    };
  };
}

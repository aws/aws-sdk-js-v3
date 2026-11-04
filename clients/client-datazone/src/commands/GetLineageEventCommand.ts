// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLineageEventInput, GetLineageEventOutput } from "../models/models_1";
import { GetLineageEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLineageEventCommand}.
 */
export interface GetLineageEventCommandInput extends GetLineageEventInput {}
/**
 * @public
 */
export type GetLineageEventCommandOutputType = Omit<GetLineageEventOutput, "event"> & {
  event?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetLineageEventCommand}.
 */
export interface GetLineageEventCommandOutput extends GetLineageEventCommandOutputType, __MetadataBearer {}

/**
 * Describes the lineage event.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetLineageEventCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetLineageEventCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetLineageEventInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetLineageEventCommand(input);
 * const response = await client.send(command);
 * // { // GetLineageEventOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   event: new Uint8Array(),
 * //   createdBy: "STRING_VALUE",
 * //   processingStatus: "REQUESTED" || "PROCESSING" || "SUCCESS" || "FAILED",
 * //   eventTime: new Date("TIMESTAMP"),
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetLineageEventCommandInput - {@link GetLineageEventCommandInput}
 * @returns {@link GetLineageEventCommandOutput}
 * @see {@link GetLineageEventCommandInput} for command's `input` shape.
 * @see {@link GetLineageEventCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class GetLineageEventCommand extends command<GetLineageEventCommandInput, GetLineageEventCommandOutput>(
  _ep0,
  _mw0,
  "GetLineageEvent",
  GetLineageEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLineageEventInput;
      output: GetLineageEventOutput;
    };
    sdk: {
      input: GetLineageEventCommandInput;
      output: GetLineageEventCommandOutput;
    };
  };
}

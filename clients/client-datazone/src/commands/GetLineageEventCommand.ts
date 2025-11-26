// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { type GetLineageEventInput, GetLineageEventOutput } from "../models/models_1";
import { GetLineageEvent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the lineage event.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class GetLineageEventCommand extends $Command
  .classBuilder<
    GetLineageEventCommandInput,
    GetLineageEventCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetLineageEvent", {})
  .n("DataZoneClient", "GetLineageEventCommand")
  .sc(GetLineageEvent)
  .build() {
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

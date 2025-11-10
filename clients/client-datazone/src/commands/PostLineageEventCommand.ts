// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PostLineageEventInput, PostLineageEventOutput } from "../models/models_2";
import { PostLineageEvent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type PostLineageEventCommandInputType = Omit<PostLineageEventInput, "event"> & {
  event: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PostLineageEventCommand}.
 */
export interface PostLineageEventCommandInput extends PostLineageEventCommandInputType {}
/**
 * @public
 *
 * The output of {@link PostLineageEventCommand}.
 */
export interface PostLineageEventCommandOutput extends PostLineageEventOutput, __MetadataBearer {}

/**
 * <p>Posts a data lineage event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, PostLineageEventCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, PostLineageEventCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // PostLineageEventInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   event: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PostLineageEventCommand(input);
 * const response = await client.send(command);
 * // { // PostLineageEventOutput
 * //   id: "STRING_VALUE",
 * //   domainId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PostLineageEventCommandInput - {@link PostLineageEventCommandInput}
 * @returns {@link PostLineageEventCommandOutput}
 * @see {@link PostLineageEventCommandInput} for command's `input` shape.
 * @see {@link PostLineageEventCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class PostLineageEventCommand extends $Command
  .classBuilder<
    PostLineageEventCommandInput,
    PostLineageEventCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "PostLineageEvent", {})
  .n("DataZoneClient", "PostLineageEventCommand")
  .sc(PostLineageEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostLineageEventInput;
      output: PostLineageEventOutput;
    };
    sdk: {
      input: PostLineageEventCommandInput;
      output: PostLineageEventCommandOutput;
    };
  };
}

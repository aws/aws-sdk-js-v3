// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostLineageEventInput, PostLineageEventOutput } from "../models/models_2";
import { PostLineageEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Posts a data lineage event.
 *
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class PostLineageEventCommand extends command<PostLineageEventCommandInput, PostLineageEventCommandOutput>(
  _ep0,
  _mw0,
  "PostLineageEvent",
  PostLineageEvent$
) {
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

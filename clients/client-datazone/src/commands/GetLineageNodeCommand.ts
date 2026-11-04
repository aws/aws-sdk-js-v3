// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLineageNodeInput, GetLineageNodeOutput } from "../models/models_1";
import { GetLineageNode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLineageNodeCommand}.
 */
export interface GetLineageNodeCommandInput extends GetLineageNodeInput {}
/**
 * @public
 *
 * The output of {@link GetLineageNodeCommand}.
 */
export interface GetLineageNodeCommandOutput extends GetLineageNodeOutput, __MetadataBearer {}

/**
 * Gets the data lineage node.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetLineageNodeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetLineageNodeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetLineageNodeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   eventTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new GetLineageNodeCommand(input);
 * const response = await client.send(command);
 * // { // GetLineageNodeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   typeName: "STRING_VALUE", // required
 * //   typeRevision: "STRING_VALUE",
 * //   sourceIdentifier: "STRING_VALUE",
 * //   eventTimestamp: new Date("TIMESTAMP"),
 * //   formsOutput: [ // FormOutputList
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   upstreamNodes: [ // LineageNodeReferenceList
 * //     { // LineageNodeReference
 * //       id: "STRING_VALUE",
 * //       eventTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   downstreamNodes: [
 * //     {
 * //       id: "STRING_VALUE",
 * //       eventTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLineageNodeCommandInput - {@link GetLineageNodeCommandInput}
 * @returns {@link GetLineageNodeCommandOutput}
 * @see {@link GetLineageNodeCommandInput} for command's `input` shape.
 * @see {@link GetLineageNodeCommandOutput} for command's `response` shape.
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
export class GetLineageNodeCommand extends command<GetLineageNodeCommandInput, GetLineageNodeCommandOutput>(
  _ep0,
  _mw0,
  "GetLineageNode",
  GetLineageNode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLineageNodeInput;
      output: GetLineageNodeOutput;
    };
    sdk: {
      input: GetLineageNodeCommandInput;
      output: GetLineageNodeCommandOutput;
    };
  };
}

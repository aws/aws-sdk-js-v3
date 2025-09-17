// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLineageNodeInput, GetLineageNodeOutput, GetLineageNodeOutputFilterSensitiveLog } from "../models/models_1";
import { de_GetLineageNodeCommand, se_GetLineageNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the data lineage node.</p>
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
export class GetLineageNodeCommand extends $Command
  .classBuilder<
    GetLineageNodeCommandInput,
    GetLineageNodeCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "GetLineageNode", {})
  .n("DataZoneClient", "GetLineageNodeCommand")
  .f(void 0, GetLineageNodeOutputFilterSensitiveLog)
  .ser(se_GetLineageNodeCommand)
  .de(de_GetLineageNodeCommand)
  .build() {
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

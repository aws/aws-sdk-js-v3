// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDbSystemShapesInput, ListDbSystemShapesOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ListDbSystemShapes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDbSystemShapesCommand}.
 */
export interface ListDbSystemShapesCommandInput extends ListDbSystemShapesInput {}
/**
 * @public
 *
 * The output of {@link ListDbSystemShapesCommand}.
 */
export interface ListDbSystemShapesCommandOutput extends ListDbSystemShapesOutput, __MetadataBearer {}

/**
 * <p>Returns information about the shapes that are available for an Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListDbSystemShapesCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListDbSystemShapesCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListDbSystemShapesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   availabilityZone: "STRING_VALUE",
 *   availabilityZoneId: "STRING_VALUE",
 * };
 * const command = new ListDbSystemShapesCommand(input);
 * const response = await client.send(command);
 * // { // ListDbSystemShapesOutput
 * //   nextToken: "STRING_VALUE",
 * //   dbSystemShapes: [ // DbSystemShapeList // required
 * //     { // DbSystemShapeSummary
 * //       availableCoreCount: Number("int"),
 * //       availableCoreCountPerNode: Number("int"),
 * //       availableDataStorageInTBs: Number("int"),
 * //       availableDataStoragePerServerInTBs: Number("int"),
 * //       availableDbNodePerNodeInGBs: Number("int"),
 * //       availableDbNodeStorageInGBs: Number("int"),
 * //       availableMemoryInGBs: Number("int"),
 * //       availableMemoryPerNodeInGBs: Number("int"),
 * //       coreCountIncrement: Number("int"),
 * //       maxStorageCount: Number("int"),
 * //       maximumNodeCount: Number("int"),
 * //       minCoreCountPerNode: Number("int"),
 * //       minDataStorageInTBs: Number("int"),
 * //       minDbNodeStoragePerNodeInGBs: Number("int"),
 * //       minMemoryPerNodeInGBs: Number("int"),
 * //       minStorageCount: Number("int"),
 * //       minimumCoreCount: Number("int"),
 * //       minimumNodeCount: Number("int"),
 * //       runtimeMinimumCoreCount: Number("int"),
 * //       shapeFamily: "STRING_VALUE",
 * //       shapeType: "AMD" || "INTEL" || "INTEL_FLEX_X9" || "AMPERE_FLEX_A1",
 * //       name: "STRING_VALUE",
 * //       computeModel: "ECPU" || "OCPU",
 * //       areServerTypesSupported: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDbSystemShapesCommandInput - {@link ListDbSystemShapesCommandInput}
 * @returns {@link ListDbSystemShapesCommandOutput}
 * @see {@link ListDbSystemShapesCommandInput} for command's `input` shape.
 * @see {@link ListDbSystemShapesCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListDbSystemShapesCommand extends $Command
  .classBuilder<
    ListDbSystemShapesCommandInput,
    ListDbSystemShapesCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ListDbSystemShapes", {})
  .n("OdbClient", "ListDbSystemShapesCommand")
  .sc(ListDbSystemShapes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbSystemShapesInput;
      output: ListDbSystemShapesOutput;
    };
    sdk: {
      input: ListDbSystemShapesCommandInput;
      output: ListDbSystemShapesCommandOutput;
    };
  };
}

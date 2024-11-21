// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ImportSignalCatalogRequest, ImportSignalCatalogResponse } from "../models/models_0";
import { de_ImportSignalCatalogCommand, se_ImportSignalCatalogCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportSignalCatalogCommand}.
 */
export interface ImportSignalCatalogCommandInput extends ImportSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link ImportSignalCatalogCommand}.
 */
export interface ImportSignalCatalogCommandOutput extends ImportSignalCatalogResponse, __MetadataBearer {}

/**
 * <p> Creates a signal catalog using your existing VSS formatted content from your local
 *             device. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ImportSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ImportSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ImportSignalCatalogRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   vss: { // FormattedVss Union: only one key present
 *     vssJson: "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportSignalCatalogCommand(input);
 * const response = await client.send(command);
 * // { // ImportSignalCatalogResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportSignalCatalogCommandInput - {@link ImportSignalCatalogCommandInput}
 * @returns {@link ImportSignalCatalogCommandOutput}
 * @see {@link ImportSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class ImportSignalCatalogCommand extends $Command
  .classBuilder<
    ImportSignalCatalogCommandInput,
    ImportSignalCatalogCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "ImportSignalCatalog", {})
  .n("IoTFleetWiseClient", "ImportSignalCatalogCommand")
  .f(void 0, void 0)
  .ser(se_ImportSignalCatalogCommand)
  .de(de_ImportSignalCatalogCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportSignalCatalogRequest;
      output: ImportSignalCatalogResponse;
    };
    sdk: {
      input: ImportSignalCatalogCommandInput;
      output: ImportSignalCatalogCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSignalCatalogRequest, GetSignalCatalogResponse } from "../models/models_0";
import { GetSignalCatalog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSignalCatalogCommand}.
 */
export interface GetSignalCatalogCommandInput extends GetSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link GetSignalCatalogCommand}.
 */
export interface GetSignalCatalogCommandOutput extends GetSignalCatalogResponse, __MetadataBearer {}

/**
 * Retrieves information about a signal catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetSignalCatalogRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetSignalCatalogCommand(input);
 * const response = await client.send(command);
 * // { // GetSignalCatalogResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   nodeCounts: { // NodeCounts
 * //     totalNodes: Number("int"),
 * //     totalBranches: Number("int"),
 * //     totalSensors: Number("int"),
 * //     totalAttributes: Number("int"),
 * //     totalActuators: Number("int"),
 * //     totalStructs: Number("int"),
 * //     totalProperties: Number("int"),
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetSignalCatalogCommandInput - {@link GetSignalCatalogCommandInput}
 * @returns {@link GetSignalCatalogCommandOutput}
 * @see {@link GetSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link GetSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class GetSignalCatalogCommand extends command<GetSignalCatalogCommandInput, GetSignalCatalogCommandOutput>(
  _ep0,
  _mw0,
  "GetSignalCatalog",
  GetSignalCatalog$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSignalCatalogRequest;
      output: GetSignalCatalogResponse;
    };
    sdk: {
      input: GetSignalCatalogCommandInput;
      output: GetSignalCatalogCommandOutput;
    };
  };
}

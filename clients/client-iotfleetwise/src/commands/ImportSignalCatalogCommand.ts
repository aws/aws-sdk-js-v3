// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportSignalCatalogRequest, ImportSignalCatalogResponse } from "../models/models_0";
import { ImportSignalCatalog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a signal catalog using your existing VSS formatted content from your local device.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ImportSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ImportSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *
 * The request couldn't be completed because it contains signals that aren't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A service quota was exceeded.
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
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ImportSignalCatalogCommand extends command<ImportSignalCatalogCommandInput, ImportSignalCatalogCommandOutput>(
  _ep0,
  _mw0,
  "ImportSignalCatalog",
  ImportSignalCatalog$
) {
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

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchPutAttributesMetadataInput, BatchPutAttributesMetadataOutput } from "../models/models_0";
import { BatchPutAttributesMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchPutAttributesMetadataCommand}.
 */
export interface BatchPutAttributesMetadataCommandInput extends BatchPutAttributesMetadataInput {}
/**
 * @public
 *
 * The output of {@link BatchPutAttributesMetadataCommand}.
 */
export interface BatchPutAttributesMetadataCommandOutput extends BatchPutAttributesMetadataOutput, __MetadataBearer {}

/**
 * Writes the attribute metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, BatchPutAttributesMetadataCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, BatchPutAttributesMetadataCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // BatchPutAttributesMetadataInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "LISTING", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   attributes: [ // Attributes // required
 *     { // AttributeInput
 *       attributeIdentifier: "STRING_VALUE", // required
 *       forms: [ // FormInputList // required
 *         { // FormInput
 *           formName: "STRING_VALUE", // required
 *           typeIdentifier: "STRING_VALUE",
 *           typeRevision: "STRING_VALUE",
 *           content: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchPutAttributesMetadataCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutAttributesMetadataOutput
 * //   errors: [ // AttributesErrors
 * //     { // AttributeError
 * //       attributeIdentifier: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   attributes: [ // BatchPutAttributeItems
 * //     { // BatchPutAttributeOutput
 * //       attributeIdentifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutAttributesMetadataCommandInput - {@link BatchPutAttributesMetadataCommandInput}
 * @returns {@link BatchPutAttributesMetadataCommandOutput}
 * @see {@link BatchPutAttributesMetadataCommandInput} for command's `input` shape.
 * @see {@link BatchPutAttributesMetadataCommandOutput} for command's `response` shape.
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
export class BatchPutAttributesMetadataCommand extends command<BatchPutAttributesMetadataCommandInput, BatchPutAttributesMetadataCommandOutput>(
  _ep0,
  _mw0,
  "BatchPutAttributesMetadata",
  BatchPutAttributesMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutAttributesMetadataInput;
      output: BatchPutAttributesMetadataOutput;
    };
    sdk: {
      input: BatchPutAttributesMetadataCommandInput;
      output: BatchPutAttributesMetadataCommandOutput;
    };
  };
}

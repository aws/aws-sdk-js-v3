// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetAttributesMetadataInput, BatchGetAttributesMetadataOutput } from "../models/models_0";
import { BatchGetAttributesMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetAttributesMetadataCommand}.
 */
export interface BatchGetAttributesMetadataCommandInput extends BatchGetAttributesMetadataInput {}
/**
 * @public
 *
 * The output of {@link BatchGetAttributesMetadataCommand}.
 */
export interface BatchGetAttributesMetadataCommandOutput extends BatchGetAttributesMetadataOutput, __MetadataBearer {}

/**
 * Gets the attribute metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, BatchGetAttributesMetadataCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, BatchGetAttributesMetadataCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // BatchGetAttributesMetadataInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "LISTING", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityRevision: "STRING_VALUE",
 *   attributeIdentifiers: [ // AttributesList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetAttributesMetadataCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAttributesMetadataOutput
 * //   attributes: [ // BatchGetAttributeItems
 * //     { // BatchGetAttributeOutput
 * //       attributeIdentifier: "STRING_VALUE", // required
 * //       forms: [ // FormOutputList
 * //         { // FormOutput
 * //           formName: "STRING_VALUE", // required
 * //           typeName: "STRING_VALUE",
 * //           typeRevision: "STRING_VALUE",
 * //           content: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // AttributesErrors // required
 * //     { // AttributeError
 * //       attributeIdentifier: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetAttributesMetadataCommandInput - {@link BatchGetAttributesMetadataCommandInput}
 * @returns {@link BatchGetAttributesMetadataCommandOutput}
 * @see {@link BatchGetAttributesMetadataCommandInput} for command's `input` shape.
 * @see {@link BatchGetAttributesMetadataCommandOutput} for command's `response` shape.
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
export class BatchGetAttributesMetadataCommand extends command<BatchGetAttributesMetadataCommandInput, BatchGetAttributesMetadataCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetAttributesMetadata",
  BatchGetAttributesMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAttributesMetadataInput;
      output: BatchGetAttributesMetadataOutput;
    };
    sdk: {
      input: BatchGetAttributesMetadataCommandInput;
      output: BatchGetAttributesMetadataCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCollectionGroupRequest, UpdateCollectionGroupResponse } from "../models/models_0";
import { UpdateCollectionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCollectionGroupCommand}.
 */
export interface UpdateCollectionGroupCommandInput extends UpdateCollectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCollectionGroupCommand}.
 */
export interface UpdateCollectionGroupCommandOutput extends UpdateCollectionGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the description and capacity limits of a collection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateCollectionGroupCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateCollectionGroupCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateCollectionGroupRequest
 *   id: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   capacityLimits: { // CollectionGroupCapacityLimits
 *     maxIndexingCapacityInOCU: Number("float"),
 *     maxSearchCapacityInOCU: Number("float"),
 *     minIndexingCapacityInOCU: Number("float"),
 *     minSearchCapacityInOCU: Number("float"),
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateCollectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCollectionGroupResponse
 * //   updateCollectionGroupDetail: { // UpdateCollectionGroupDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     capacityLimits: { // CollectionGroupCapacityLimits
 * //       maxIndexingCapacityInOCU: Number("float"),
 * //       maxSearchCapacityInOCU: Number("float"),
 * //       minIndexingCapacityInOCU: Number("float"),
 * //       minSearchCapacityInOCU: Number("float"),
 * //     },
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //     generation: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCollectionGroupCommandInput - {@link UpdateCollectionGroupCommandInput}
 * @returns {@link UpdateCollectionGroupCommandOutput}
 * @see {@link UpdateCollectionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateCollectionGroupCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE, FAILED, or UPDATE_FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Thrown when you attempt to create more resources than the service allows based on service quotas.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class UpdateCollectionGroupCommand extends command<UpdateCollectionGroupCommandInput, UpdateCollectionGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCollectionGroup",
  UpdateCollectionGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCollectionGroupRequest;
      output: UpdateCollectionGroupResponse;
    };
    sdk: {
      input: UpdateCollectionGroupCommandInput;
      output: UpdateCollectionGroupCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { ListKxVolumesRequest, ListKxVolumesResponse } from "../models/models_0";
import { ListKxVolumes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxVolumesCommand}.
 */
export interface ListKxVolumesCommandInput extends ListKxVolumesRequest {}
/**
 * @public
 *
 * The output of {@link ListKxVolumesCommand}.
 */
export interface ListKxVolumesCommandOutput extends ListKxVolumesResponse, __MetadataBearer {}

/**
 * <p>
 * Lists all the volumes in a kdb environment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxVolumesCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxVolumesCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // ListKxVolumesRequest
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   volumeType: "NAS_1",
 * };
 * const command = new ListKxVolumesCommand(input);
 * const response = await client.send(command);
 * // { // ListKxVolumesResponse
 * //   kxVolumeSummaries: [ // KxVolumes
 * //     { // KxVolume
 * //       volumeName: "STRING_VALUE",
 * //       volumeType: "NAS_1",
 * //       status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //       description: "STRING_VALUE",
 * //       statusReason: "STRING_VALUE",
 * //       azMode: "SINGLE" || "MULTI",
 * //       availabilityZoneIds: [ // AvailabilityZoneIds
 * //         "STRING_VALUE",
 * //       ],
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxVolumesCommandInput - {@link ListKxVolumesCommandInput}
 * @returns {@link ListKxVolumesCommandOutput}
 * @see {@link ListKxVolumesCommandInput} for command's `input` shape.
 * @see {@link ListKxVolumesCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class ListKxVolumesCommand extends $Command
  .classBuilder<
    ListKxVolumesCommandInput,
    ListKxVolumesCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "ListKxVolumes", {})
  .n("FinspaceClient", "ListKxVolumesCommand")
  .sc(ListKxVolumes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxVolumesRequest;
      output: ListKxVolumesResponse;
    };
    sdk: {
      input: ListKxVolumesCommandInput;
      output: ListKxVolumesCommandOutput;
    };
  };
}

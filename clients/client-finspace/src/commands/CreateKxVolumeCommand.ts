// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { CreateKxVolumeRequest, CreateKxVolumeResponse } from "../models/models_0";
import { de_CreateKxVolumeCommand, se_CreateKxVolumeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKxVolumeCommand}.
 */
export interface CreateKxVolumeCommandInput extends CreateKxVolumeRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxVolumeCommand}.
 */
export interface CreateKxVolumeCommandOutput extends CreateKxVolumeResponse, __MetadataBearer {}

/**
 * <p>
 * Creates a new volume with a specific amount of throughput and storage capacity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxVolumeCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxVolumeCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxVolumeRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   volumeType: "NAS_1", // required
 *   volumeName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nas1Configuration: { // KxNAS1Configuration
 *     type: "SSD_1000" || "SSD_250" || "HDD_12",
 *     size: Number("int"),
 *   },
 *   azMode: "SINGLE" || "MULTI", // required
 *   availabilityZoneIds: [ // AvailabilityZoneIds // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKxVolumeCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxVolumeResponse
 * //   environmentId: "STRING_VALUE",
 * //   volumeName: "STRING_VALUE",
 * //   volumeType: "NAS_1",
 * //   volumeArn: "STRING_VALUE",
 * //   nas1Configuration: { // KxNAS1Configuration
 * //     type: "SSD_1000" || "SSD_250" || "HDD_12",
 * //     size: Number("int"),
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   statusReason: "STRING_VALUE",
 * //   azMode: "SINGLE" || "MULTI",
 * //   description: "STRING_VALUE",
 * //   availabilityZoneIds: [ // AvailabilityZoneIds
 * //     "STRING_VALUE",
 * //   ],
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateKxVolumeCommandInput - {@link CreateKxVolumeCommandInput}
 * @returns {@link CreateKxVolumeCommandOutput}
 * @see {@link CreateKxVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateKxVolumeCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource group already exists.</p>
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
 * @public
 */
export class CreateKxVolumeCommand extends $Command
  .classBuilder<
    CreateKxVolumeCommandInput,
    CreateKxVolumeCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "CreateKxVolume", {})
  .n("FinspaceClient", "CreateKxVolumeCommand")
  .f(void 0, void 0)
  .ser(se_CreateKxVolumeCommand)
  .de(de_CreateKxVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKxVolumeRequest;
      output: CreateKxVolumeResponse;
    };
    sdk: {
      input: CreateKxVolumeCommandInput;
      output: CreateKxVolumeCommandOutput;
    };
  };
}

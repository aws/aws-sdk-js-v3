// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMountTargetsRequest, ListMountTargetsResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { ListMountTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMountTargetsCommand}.
 */
export interface ListMountTargetsCommandInput extends ListMountTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListMountTargetsCommand}.
 */
export interface ListMountTargetsCommandOutput extends ListMountTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns resource information for all mount targets with optional filtering by file system, access point, and VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, ListMountTargetsCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, ListMountTargetsCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // ListMountTargetsRequest
 *   fileSystemId: "STRING_VALUE",
 *   accessPointId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMountTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListMountTargetsResponse
 * //   nextToken: "STRING_VALUE",
 * //   mountTargets: [ // MountTargets // required
 * //     { // ListMountTargetsDescription
 * //       availabilityZoneId: "STRING_VALUE",
 * //       fileSystemId: "STRING_VALUE",
 * //       ipv4Address: "STRING_VALUE",
 * //       ipv6Address: "STRING_VALUE",
 * //       status: "available" || "creating" || "deleting" || "deleted" || "error" || "updating",
 * //       statusMessage: "STRING_VALUE",
 * //       mountTargetId: "STRING_VALUE", // required
 * //       networkInterfaceId: "STRING_VALUE",
 * //       ownerId: "STRING_VALUE", // required
 * //       subnetId: "STRING_VALUE", // required
 * //       vpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMountTargetsCommandInput - {@link ListMountTargetsCommandInput}
 * @returns {@link ListMountTargetsCommandOutput}
 * @see {@link ListMountTargetsCommandInput} for command's `input` shape.
 * @see {@link ListMountTargetsCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class ListMountTargetsCommand extends $Command
  .classBuilder<
    ListMountTargetsCommandInput,
    ListMountTargetsCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "ListMountTargets", {})
  .n("S3FilesClient", "ListMountTargetsCommand")
  .sc(ListMountTargets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMountTargetsRequest;
      output: ListMountTargetsResponse;
    };
    sdk: {
      input: ListMountTargetsCommandInput;
      output: ListMountTargetsCommandOutput;
    };
  };
}

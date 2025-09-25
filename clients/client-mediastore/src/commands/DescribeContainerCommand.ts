// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DescribeContainerInput, DescribeContainerOutput } from "../models/models_0";
import { DescribeContainer } from "../schemas/schemas_1_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContainerCommand}.
 */
export interface DescribeContainerCommandInput extends DescribeContainerInput {}
/**
 * @public
 *
 * The output of {@link DescribeContainerCommand}.
 */
export interface DescribeContainerCommandOutput extends DescribeContainerOutput, __MetadataBearer {}

/**
 * <p>Retrieves the properties of the requested container. This request is commonly used to
 *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
 *          new container is created. A container's endpoint does not change after it has been
 *          assigned. The <code>DescribeContainer</code> request returns a single
 *             <code>Container</code> object based on <code>ContainerName</code>. To return all
 *             <code>Container</code> objects that are associated with a specified AWS account, use
 *             <a>ListContainers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DescribeContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DescribeContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // DescribeContainerInput
 *   ContainerName: "STRING_VALUE",
 * };
 * const command = new DescribeContainerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerOutput
 * //   Container: { // Container
 * //     Endpoint: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ARN: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "ACTIVE" || "CREATING" || "DELETING",
 * //     AccessLoggingEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContainerCommandInput - {@link DescribeContainerCommandInput}
 * @returns {@link DescribeContainerCommandOutput}
 * @see {@link DescribeContainerCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class DescribeContainerCommand extends $Command
  .classBuilder<
    DescribeContainerCommandInput,
    DescribeContainerCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaStore_20170901", "DescribeContainer", {})
  .n("MediaStoreClient", "DescribeContainerCommand")
  .sc(DescribeContainer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContainerInput;
      output: DescribeContainerOutput;
    };
    sdk: {
      input: DescribeContainerCommandInput;
      output: DescribeContainerCommandOutput;
    };
  };
}

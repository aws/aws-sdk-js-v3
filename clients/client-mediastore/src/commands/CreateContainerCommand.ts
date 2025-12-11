// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import type { CreateContainerInput, CreateContainerOutput } from "../models/models_0";
import { CreateContainer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerCommand}.
 */
export interface CreateContainerCommandInput extends CreateContainerInput {}
/**
 * @public
 *
 * The output of {@link CreateContainerCommand}.
 */
export interface CreateContainerCommandOutput extends CreateContainerOutput, __MetadataBearer {}

/**
 * <p>Creates a storage container to hold objects. A container is similar to a bucket in
 *          the Amazon S3 service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, CreateContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, CreateContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // CreateContainerInput
 *   ContainerName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateContainerCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerOutput
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
 * @param CreateContainerCommandInput - {@link CreateContainerCommandInput}
 * @returns {@link CreateContainerCommandOutput}
 * @see {@link CreateContainerCommandInput} for command's `input` shape.
 * @see {@link CreateContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit has been exceeded.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class CreateContainerCommand extends $Command
  .classBuilder<
    CreateContainerCommandInput,
    CreateContainerCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaStore_20170901", "CreateContainer", {})
  .n("MediaStoreClient", "CreateContainerCommand")
  .sc(CreateContainer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerInput;
      output: CreateContainerOutput;
    };
    sdk: {
      input: CreateContainerCommandInput;
      output: CreateContainerCommandOutput;
    };
  };
}

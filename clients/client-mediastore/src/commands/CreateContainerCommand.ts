// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { CreateContainerInput, CreateContainerOutput } from "../models/models_0";
import { de_CreateContainerCommand, se_CreateContainerCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStore_20170901", "CreateContainer", {})
  .n("MediaStoreClient", "CreateContainerCommand")
  .f(void 0, void 0)
  .ser(se_CreateContainerCommand)
  .de(de_CreateContainerCommand)
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

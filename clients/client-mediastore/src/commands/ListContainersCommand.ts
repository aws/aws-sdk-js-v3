// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContainersInput, ListContainersOutput } from "../models/models_0";
import { ListContainers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContainersCommand}.
 */
export interface ListContainersCommandInput extends ListContainersInput {}
/**
 * @public
 *
 * The output of {@link ListContainersCommand}.
 */
export interface ListContainersCommandOutput extends ListContainersOutput, __MetadataBearer {}

/**
 * Lists the properties of all containers in AWS Elemental MediaStore.
 *
 * You can query to receive all the containers in one response. Or you can include the `MaxResults` parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the `NextToken` parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive.
 *
 * See also DescribeContainer, which gets the properties of one container.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, ListContainersCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, ListContainersCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // ListContainersInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContainersCommand(input);
 * const response = await client.send(command);
 * // { // ListContainersOutput
 * //   Containers: [ // ContainerList // required
 * //     { // Container
 * //       Endpoint: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "ACTIVE" || "CREATING" || "DELETING",
 * //       AccessLoggingEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainersCommandInput - {@link ListContainersCommandInput}
 * @returns {@link ListContainersCommandOutput}
 * @see {@link ListContainersCommandInput} for command's `input` shape.
 * @see {@link ListContainersCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link MediaStoreServiceException}
 *
 * Base exception class for all service exceptions from MediaStore service.
 *
 * @public
 */
export class ListContainersCommand extends command<ListContainersCommandInput, ListContainersCommandOutput>(
  _ep0,
  _mw0,
  "ListContainers",
  ListContainers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainersInput;
      output: ListContainersOutput;
    };
    sdk: {
      input: ListContainersCommandInput;
      output: ListContainersCommandOutput;
    };
  };
}

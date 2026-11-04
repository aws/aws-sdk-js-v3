// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVirtualServiceInput, CreateVirtualServiceOutput } from "../models/models_0";
import { CreateVirtualService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVirtualServiceCommand}.
 */
export interface CreateVirtualServiceCommandInput extends CreateVirtualServiceInput {}
/**
 * @public
 *
 * The output of {@link CreateVirtualServiceCommand}.
 */
export interface CreateVirtualServiceCommandOutput extends CreateVirtualServiceOutput, __MetadataBearer {}

/**
 * Creates a virtual service within a service mesh.
 *
 * A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its `virtualServiceName`, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.
 *
 * For more information about virtual services, see [Virtual services](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // CreateVirtualServiceInput
 *   virtualServiceName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualServiceSpec
 *     provider: { // VirtualServiceProvider Union: only one key present
 *       virtualNode: { // VirtualNodeServiceProvider
 *         virtualNodeName: "STRING_VALUE", // required
 *       },
 *       virtualRouter: { // VirtualRouterServiceProvider
 *         virtualRouterName: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   tags: [ // TagList
 *     { // TagRef
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new CreateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualServiceOutput
 * //   virtualService: { // VirtualServiceData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualServiceName: "STRING_VALUE", // required
 * //     spec: { // VirtualServiceSpec
 * //       provider: { // VirtualServiceProvider Union: only one key present
 * //         virtualNode: { // VirtualNodeServiceProvider
 * //           virtualNodeName: "STRING_VALUE", // required
 * //         },
 * //         virtualRouter: { // VirtualRouterServiceProvider
 * //           virtualRouterName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // VirtualServiceStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVirtualServiceCommandInput - {@link CreateVirtualServiceCommandInput}
 * @returns {@link CreateVirtualServiceCommandOutput}
 * @see {@link CreateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request syntax was malformed. Check your request syntax and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request contains a client token that was used for a previous update resource call with different specifications. Try the request again with a new client token.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You don't have permissions to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have exceeded a service limit for your account. For more information, see [Service Limits](https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html) in the *App Mesh User Guide*.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check your request syntax and try again.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the service.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The maximum request rate permitted by the App Mesh APIs has been exceeded for your account. For best results, use an increasing or variable sleep interval between requests.
 *
 * @throws {@link AppMeshServiceException}
 *
 * Base exception class for all service exceptions from AppMesh service.
 *
 * @public
 */
export class CreateVirtualServiceCommand extends command<CreateVirtualServiceCommandInput, CreateVirtualServiceCommandOutput>(
  _ep0,
  _mw0,
  "CreateVirtualService",
  CreateVirtualService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVirtualServiceInput;
      output: CreateVirtualServiceOutput;
    };
    sdk: {
      input: CreateVirtualServiceCommandInput;
      output: CreateVirtualServiceCommandOutput;
    };
  };
}

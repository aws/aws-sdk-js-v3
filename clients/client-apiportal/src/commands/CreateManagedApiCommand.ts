// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateManagedApiRequest, CreateManagedApiResponse } from "../models/models_0";
import { CreateManagedApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateManagedApiCommand}.
 */
export interface CreateManagedApiCommandInput extends CreateManagedApiRequest {}
/**
 * @public
 *
 * The output of {@link CreateManagedApiCommand}.
 */
export interface CreateManagedApiCommandOutput extends CreateManagedApiResponse, __MetadataBearer {}

/**
 * Promote a discovered API in the API inventory into the managed API list.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, CreateManagedApiCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, CreateManagedApiCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // CreateManagedApiRequest
 *   apiSignature: { // ApiSignature
 *     resourceArn: "STRING_VALUE", // required
 *     method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 *     hostname: "STRING_VALUE", // required
 *     port: Number("int"), // required
 *     path: "STRING_VALUE", // required
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateManagedApiCommand(input);
 * const response = await client.send(command);
 * // { // CreateManagedApiResponse
 * //   managedApiId: "STRING_VALUE", // required
 * //   managedApiArn: "STRING_VALUE", // required
 * //   apiSignature: { // ApiSignature
 * //     resourceArn: "STRING_VALUE", // required
 * //     method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 * //     hostname: "STRING_VALUE", // required
 * //     port: Number("int"), // required
 * //     path: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateManagedApiCommandInput - {@link CreateManagedApiCommandInput}
 * @returns {@link CreateManagedApiCommandOutput}
 * @see {@link CreateManagedApiCommandInput} for command's `input` shape.
 * @see {@link CreateManagedApiCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource, for example because another operation on it is still in progress.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class CreateManagedApiCommand extends command<CreateManagedApiCommandInput, CreateManagedApiCommandOutput>(
  _ep0,
  _mw0,
  "CreateManagedApi",
  CreateManagedApi$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateManagedApiRequest;
      output: CreateManagedApiResponse;
    };
    sdk: {
      input: CreateManagedApiCommandInput;
      output: CreateManagedApiCommandOutput;
    };
  };
}

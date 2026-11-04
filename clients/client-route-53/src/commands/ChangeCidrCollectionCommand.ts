// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ChangeCidrCollectionRequest, ChangeCidrCollectionResponse } from "../models/models_0";
import { ChangeCidrCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ChangeCidrCollectionCommand}.
 */
export interface ChangeCidrCollectionCommandInput extends ChangeCidrCollectionRequest {}
/**
 * @public
 *
 * The output of {@link ChangeCidrCollectionCommand}.
 */
export interface ChangeCidrCollectionCommandOutput extends ChangeCidrCollectionResponse, __MetadataBearer {}

/**
 * Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative IP information mapping blocks to one or multiple locations.
 *
 * A change request can update multiple locations in a collection at a time, which is helpful if you want to move one or more CIDR blocks from one location to another in one transaction, without downtime.
 *
 * **Limits**
 *
 * The max number of CIDR blocks included in the request is 1000. As a result, big updates require multiple API calls.
 *
 * **PUT and DELETE_IF_EXISTS**
 *
 * Use `ChangeCidrCollection` to perform the following actions:
 *
 * - `PUT`: Create a CIDR block within the specified collection.
 * - `DELETE_IF_EXISTS`: Delete an existing CIDR block from the collection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeCidrCollectionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeCidrCollectionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ChangeCidrCollectionRequest
 *   Id: "STRING_VALUE", // required
 *   CollectionVersion: Number("long"),
 *   Changes: [ // CidrCollectionChanges // required
 *     { // CidrCollectionChange
 *       LocationName: "STRING_VALUE", // required
 *       Action: "PUT" || "DELETE_IF_EXISTS", // required
 *       CidrList: [ // CidrList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ChangeCidrCollectionCommand(input);
 * const response = await client.send(command);
 * // { // ChangeCidrCollectionResponse
 * //   Id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ChangeCidrCollectionCommandInput - {@link ChangeCidrCollectionCommandInput}
 * @returns {@link ChangeCidrCollectionCommandOutput}
 * @see {@link ChangeCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link ChangeCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link CidrBlockInUseException} (client fault)
 *
 * This CIDR block is already in use.
 *
 * @throws {@link CidrCollectionVersionMismatchException} (client fault)
 *
 * The CIDR collection version you provided, doesn't match the one in the `ListCidrCollections` operation.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *
 * Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link LimitsExceeded} (client fault)
 *
 * This operation can't be completed because the current account has reached the limit on the resource you are trying to create. To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *
 * The CIDR collection you specified, doesn't exist.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class ChangeCidrCollectionCommand extends command<ChangeCidrCollectionCommandInput, ChangeCidrCollectionCommandOutput>(
  _ep0,
  _mw0,
  "ChangeCidrCollection",
  ChangeCidrCollection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangeCidrCollectionRequest;
      output: ChangeCidrCollectionResponse;
    };
    sdk: {
      input: ChangeCidrCollectionCommandInput;
      output: ChangeCidrCollectionCommandOutput;
    };
  };
}

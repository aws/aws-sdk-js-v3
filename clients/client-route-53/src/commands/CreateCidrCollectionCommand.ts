// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { CreateCidrCollectionRequest, CreateCidrCollectionResponse } from "../models/models_0";
import { CreateCidrCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCidrCollectionCommand}.
 */
export interface CreateCidrCollectionCommandInput extends CreateCidrCollectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCidrCollectionCommand}.
 */
export interface CreateCidrCollectionCommandOutput extends CreateCidrCollectionResponse, __MetadataBearer {}

/**
 * Creates a CIDR collection in the current Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateCidrCollectionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateCidrCollectionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateCidrCollectionRequest
 *   Name: "STRING_VALUE", // required
 *   CallerReference: "STRING_VALUE", // required
 * };
 * const command = new CreateCidrCollectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCidrCollectionResponse
 * //   Collection: { // CidrCollection
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: Number("long"),
 * //   },
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCidrCollectionCommandInput - {@link CreateCidrCollectionCommandInput}
 * @returns {@link CreateCidrCollectionCommandOutput}
 * @see {@link CreateCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link CreateCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link CidrCollectionAlreadyExistsException} (client fault)
 *
 * A CIDR collection with this name and a different caller reference already exists in this account.
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
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class CreateCidrCollectionCommand extends command<CreateCidrCollectionCommandInput, CreateCidrCollectionCommandOutput>(
  _ep0,
  _mw2,
  "CreateCidrCollection",
  CreateCidrCollection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCidrCollectionRequest;
      output: CreateCidrCollectionResponse;
    };
    sdk: {
      input: CreateCidrCollectionCommandInput;
      output: CreateCidrCollectionCommandOutput;
    };
  };
}

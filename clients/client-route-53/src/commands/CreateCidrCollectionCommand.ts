// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCidrCollectionRequest, CreateCidrCollectionResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateCidrCollection } from "../schemas/schemas_14_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a CIDR collection in the current Amazon Web Services account.</p>
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
 *  <p>A CIDR collection with this name and a different caller reference already exists in this account.</p>
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateCidrCollectionCommand extends $Command
  .classBuilder<
    CreateCidrCollectionCommandInput,
    CreateCidrCollectionCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "CreateCidrCollection", {})
  .n("Route53Client", "CreateCidrCollectionCommand")
  .sc(CreateCidrCollection)
  .build() {
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

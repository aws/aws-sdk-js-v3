// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateResourceToProfileRequest, AssociateResourceToProfileResponse } from "../models/models_0";
import { AssociateResourceToProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateResourceToProfileCommand}.
 */
export interface AssociateResourceToProfileCommandInput extends AssociateResourceToProfileRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceToProfileCommand}.
 */
export interface AssociateResourceToProfileCommandOutput extends AssociateResourceToProfileResponse, __MetadataBearer {}

/**
 * Associates a DNS reource configuration to a Route 53 Profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, AssociateResourceToProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, AssociateResourceToProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // AssociateResourceToProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ResourceProperties: "STRING_VALUE",
 * };
 * const command = new AssociateResourceToProfileCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResourceToProfileResponse
 * //   ProfileResourceAssociation: { // ProfileResourceAssociation
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ProfileId: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE",
 * //     ResourceProperties: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModificationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateResourceToProfileCommandInput - {@link AssociateResourceToProfileCommandInput}
 * @returns {@link AssociateResourceToProfileCommandOutput}
 * @see {@link AssociateResourceToProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceToProfileCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request you submitted conflicts with an existing request.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * An internal server error occured. Retry your request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request caused one or more limits to be exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are associating is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You have provided an invalid command.
 *
 * @throws {@link Route53ProfilesServiceException}
 *
 * Base exception class for all service exceptions from Route53Profiles service.
 *
 * @public
 */
export class AssociateResourceToProfileCommand extends command<AssociateResourceToProfileCommandInput, AssociateResourceToProfileCommandOutput>(
  _ep0,
  _mw0,
  "AssociateResourceToProfile",
  AssociateResourceToProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceToProfileRequest;
      output: AssociateResourceToProfileResponse;
    };
    sdk: {
      input: AssociateResourceToProfileCommandInput;
      output: AssociateResourceToProfileCommandOutput;
    };
  };
}

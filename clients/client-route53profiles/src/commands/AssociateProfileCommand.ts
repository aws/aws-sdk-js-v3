// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateProfileRequest, AssociateProfileResponse } from "../models/models_0";
import { AssociateProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateProfileCommand}.
 */
export interface AssociateProfileCommandInput extends AssociateProfileRequest {}
/**
 * @public
 *
 * The output of {@link AssociateProfileCommand}.
 */
export interface AssociateProfileCommandOutput extends AssociateProfileResponse, __MetadataBearer {}

/**
 * <p> Associates a Route 53 Profiles profile with a VPC. A VPC can have up to two Profile associations. A Profile can be associated with up to 1,000 VPCs, and you can request a higher quota for the number of VPCs. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities-route53-profiles">Quotas on Route 53 Profiles</a>. </p> <p> Route 53 VPC Resolver evaluates the Profile associations for a VPC in priority order, starting with the lowest <code>Priority</code> value. If the VPC has no other Profile associations, you can omit <code>Priority</code>, and the association gets priority 100. When the VPC already has a Profile association, you must specify a <code>Priority</code>, and each Profile association for the VPC must have a unique priority. To change the priority of an existing association, use <code>UpdateProfileAssociation</code>. </p> <p>The request fails with a <code>ValidationException</code> in these cases:</p> <ul> <li> <p>You omit <code>Priority</code>, and the VPC already has a Profile association.</p> </li> <li> <p>Another Profile association for the VPC already uses the priority that you specify.</p> </li> <li> <p>The priority is outside the range 100–9900.</p> </li> <li> <p>The Profile is already associated with the VPC, and you specify a different <code>Name</code> or <code>Priority</code>. To change the priority, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_UpdateProfileAssociation.html">UpdateProfileAssociation</a>.</p> </li> </ul> <p> The request fails with a <code>LimitExceededException</code> if the VPC already has the maximum number of Profile associations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, AssociateProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, AssociateProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // AssociateProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Priority: Number("int"),
 * };
 * const command = new AssociateProfileCommand(input);
 * const response = await client.send(command);
 * // { // AssociateProfileResponse
 * //   ProfileAssociation: { // ProfileAssociation
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ProfileId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModificationTime: new Date("TIMESTAMP"),
 * //     Priority: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateProfileCommandInput - {@link AssociateProfileCommandInput}
 * @returns {@link AssociateProfileCommandOutput}
 * @see {@link AssociateProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateProfileCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The current account doesn't have the IAM permissions required to perform the specified operation. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request you submitted conflicts with an existing request. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p> One or more parameters in this request are not valid. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p> The request caused one or more limits to be exceeded. </p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p> The resource you are trying to associate, has already been associated. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource you are associating is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was throttled. Try again in a few minutes. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> You have provided an invalid command. </p>
 *
 * @throws {@link Route53ProfilesServiceException}
 * <p>Base exception class for all service exceptions from Route53Profiles service.</p>
 *
 *
 * @public
 */
export class AssociateProfileCommand extends command<AssociateProfileCommandInput, AssociateProfileCommandOutput>(
  _ep0,
  _mw0,
  "AssociateProfile",
  AssociateProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateProfileRequest;
      output: AssociateProfileResponse;
    };
    sdk: {
      input: AssociateProfileCommandInput;
      output: AssociateProfileCommandOutput;
    };
  };
}

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
 * Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with 1000 of VPCs (and you can request a higher quota). For more information, see [https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities).
 *
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
 *
 * The current account doesn't have the IAM permissions required to perform the specified operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request you submitted conflicts with an existing request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request caused one or more limits to be exceeded.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource you are trying to associate, has already been associated.
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

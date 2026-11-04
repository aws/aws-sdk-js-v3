// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateProfileRequest, DisassociateProfileResponse } from "../models/models_0";
import { DisassociateProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateProfileCommand}.
 */
export interface DisassociateProfileCommandInput extends DisassociateProfileRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateProfileCommand}.
 */
export interface DisassociateProfileCommandOutput extends DisassociateProfileResponse, __MetadataBearer {}

/**
 * Dissociates a specified Route 53 Profile from the specified VPC.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, DisassociateProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, DisassociateProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // DisassociateProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateProfileCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateProfileResponse
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
 * @param DisassociateProfileCommandInput - {@link DisassociateProfileCommandInput}
 * @returns {@link DisassociateProfileCommandOutput}
 * @see {@link DisassociateProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateProfileCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified operation.
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
export class DisassociateProfileCommand extends command<DisassociateProfileCommandInput, DisassociateProfileCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateProfile",
  DisassociateProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateProfileRequest;
      output: DisassociateProfileResponse;
    };
    sdk: {
      input: DisassociateProfileCommandInput;
      output: DisassociateProfileCommandOutput;
    };
  };
}

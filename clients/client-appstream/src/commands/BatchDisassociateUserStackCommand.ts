// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDisassociateUserStackRequest, BatchDisassociateUserStackResult } from "../models/models_0";
import { BatchDisassociateUserStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDisassociateUserStackCommand}.
 */
export interface BatchDisassociateUserStackCommandInput extends BatchDisassociateUserStackRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateUserStackCommand}.
 */
export interface BatchDisassociateUserStackCommandOutput extends BatchDisassociateUserStackResult, __MetadataBearer {}

/**
 * <p>Disassociates the specified users from the specified stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchDisassociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchDisassociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // BatchDisassociateUserStackRequest
 *   UserStackAssociations: [ // UserStackAssociationList // required
 *     { // UserStackAssociation
 *       StackName: "STRING_VALUE", // required
 *       UserName: "STRING_VALUE", // required
 *       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 *       SendEmailNotification: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchDisassociateUserStackCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateUserStackResult
 * //   errors: [ // UserStackAssociationErrorList
 * //     { // UserStackAssociationError
 * //       UserStackAssociation: { // UserStackAssociation
 * //         StackName: "STRING_VALUE", // required
 * //         UserName: "STRING_VALUE", // required
 * //         AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * //         SendEmailNotification: true || false,
 * //       },
 * //       ErrorCode: "STACK_NOT_FOUND" || "USER_NAME_NOT_FOUND" || "DIRECTORY_NOT_FOUND" || "INTERNAL_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateUserStackCommandInput - {@link BatchDisassociateUserStackCommandInput}
 * @returns {@link BatchDisassociateUserStackCommandOutput}
 * @see {@link BatchDisassociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class BatchDisassociateUserStackCommand extends command<BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisassociateUserStack",
  BatchDisassociateUserStack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateUserStackRequest;
      output: BatchDisassociateUserStackResult;
    };
    sdk: {
      input: BatchDisassociateUserStackCommandInput;
      output: BatchDisassociateUserStackCommandOutput;
    };
  };
}

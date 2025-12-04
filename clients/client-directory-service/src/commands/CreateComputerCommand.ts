// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateComputerRequest, CreateComputerResult } from "../models/models_0";
import { CreateComputer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateComputerCommand}.
 */
export interface CreateComputerCommandInput extends CreateComputerRequest {}
/**
 * @public
 *
 * The output of {@link CreateComputerCommand}.
 */
export interface CreateComputerCommandOutput extends CreateComputerResult, __MetadataBearer {}

/**
 * <p>Creates an Active Directory computer object in the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateComputerCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateComputerCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateComputerRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   ComputerName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   OrganizationalUnitDistinguishedName: "STRING_VALUE",
 *   ComputerAttributes: [ // Attributes
 *     { // Attribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateComputerCommand(input);
 * const response = await client.send(command);
 * // { // CreateComputerResult
 * //   Computer: { // Computer
 * //     ComputerId: "STRING_VALUE",
 * //     ComputerName: "STRING_VALUE",
 * //     ComputerAttributes: [ // Attributes
 * //       { // Attribute
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateComputerCommandInput - {@link CreateComputerCommandInput}
 * @returns {@link CreateComputerCommandOutput}
 * @see {@link CreateComputerCommandInput} for command's `input` shape.
 * @see {@link CreateComputerCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  <p>An authentication error occurred.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To create a computer account
 * ```javascript
 * // The following example creates a computer account in the specified directory, and joins the computer to the directory.
 * const input = {
 *   ComputerAttributes: [
 *     {
 *       Name: "ip",
 *       Value: "192.168.101.100"
 *     }
 *   ],
 *   ComputerName: "labcomputer",
 *   DirectoryId: "d-92654abfed",
 *   OrganizationalUnitDistinguishedName: "OU=Computers,OU=example,DC=corp,DC=example,DC=com",
 *   Password: "Str0ngP@ssw0rd"
 * };
 * const command = new CreateComputerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Computer: {
 *     ComputerAttributes: [
 *       {
 *         Name: "DistinguishedName",
 *         Value: "CN=labcomputer,OU=Computers,OU=nickcorp,DC=seattle,DC=nickcorp,DC=com"
 *       },
 *       {
 *         Name: "WindowsSamName",
 *         Value: "labcomputer$"
 *       }
 *     ],
 *     ComputerId: "S-1-5-21-1932691875-1648176379-1176097576-1124",
 *     ComputerName: "labcomputer"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateComputerCommand extends $Command
  .classBuilder<
    CreateComputerCommandInput,
    CreateComputerCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "CreateComputer", {})
  .n("DirectoryServiceClient", "CreateComputerCommand")
  .sc(CreateComputer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComputerRequest;
      output: CreateComputerResult;
    };
    sdk: {
      input: CreateComputerCommandInput;
      output: CreateComputerCommandOutput;
    };
  };
}

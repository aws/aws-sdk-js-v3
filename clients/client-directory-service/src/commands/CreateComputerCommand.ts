// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateComputerRequest, CreateComputerResult } from "../models/models_0";
import { CreateComputer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Active Directory computer object in the specified directory.
 *
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
 *
 * An authentication error occurred.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The specified entity already exists.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class CreateComputerCommand extends command<CreateComputerCommandInput, CreateComputerCommandOutput>(
  _ep0,
  _mw0,
  "CreateComputer",
  CreateComputer$
) {
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

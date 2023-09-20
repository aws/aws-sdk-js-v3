// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  DescribeDirectoryConfigsRequest,
  DescribeDirectoryConfigsResult,
  DescribeDirectoryConfigsResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDirectoryConfigsCommand, se_DescribeDirectoryConfigsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectoryConfigsCommand}.
 */
export interface DescribeDirectoryConfigsCommandInput extends DescribeDirectoryConfigsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectoryConfigsCommand}.
 */
export interface DescribeDirectoryConfigsCommandOutput extends DescribeDirectoryConfigsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *         </p>
 *          <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeDirectoryConfigsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeDirectoryConfigsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeDirectoryConfigsRequest
 *   DirectoryNames: [ // DirectoryNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectoryConfigsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectoryConfigsResult
 * //   DirectoryConfigs: [ // DirectoryConfigList
 * //     { // DirectoryConfig
 * //       DirectoryName: "STRING_VALUE", // required
 * //       OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ServiceAccountCredentials: { // ServiceAccountCredentials
 * //         AccountName: "STRING_VALUE", // required
 * //         AccountPassword: "STRING_VALUE", // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 * //         Status: "DISABLED" || "ENABLED" || "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
 * //         CertificateAuthorityArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectoryConfigsCommandInput - {@link DescribeDirectoryConfigsCommandInput}
 * @returns {@link DescribeDirectoryConfigsCommandOutput}
 * @see {@link DescribeDirectoryConfigsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoryConfigsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DescribeDirectoryConfigsCommand extends $Command<
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeDirectoryConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDirectoryConfigsCommandInput, DescribeDirectoryConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDirectoryConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeDirectoryConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeDirectoryConfigsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DescribeDirectoryConfigs",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeDirectoryConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDirectoryConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDirectoryConfigsCommandOutput> {
    return de_DescribeDirectoryConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

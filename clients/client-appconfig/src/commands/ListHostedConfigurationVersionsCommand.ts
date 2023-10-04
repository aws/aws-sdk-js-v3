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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { HostedConfigurationVersions, ListHostedConfigurationVersionsRequest } from "../models/models_0";
import {
  de_ListHostedConfigurationVersionsCommand,
  se_ListHostedConfigurationVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHostedConfigurationVersionsCommand}.
 */
export interface ListHostedConfigurationVersionsCommandInput extends ListHostedConfigurationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedConfigurationVersionsCommand}.
 */
export interface ListHostedConfigurationVersionsCommandOutput extends HostedConfigurationVersions, __MetadataBearer {}

/**
 * @public
 * <p>Lists configurations stored in the AppConfig hosted configuration store by
 *          version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListHostedConfigurationVersionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListHostedConfigurationVersionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // ListHostedConfigurationVersionsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   VersionLabel: "STRING_VALUE",
 * };
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // HostedConfigurationVersions
 * //   Items: [ // HostedConfigurationVersionSummaryList
 * //     { // HostedConfigurationVersionSummary
 * //       ApplicationId: "STRING_VALUE",
 * //       ConfigurationProfileId: "STRING_VALUE",
 * //       VersionNumber: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       ContentType: "STRING_VALUE",
 * //       VersionLabel: "STRING_VALUE",
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHostedConfigurationVersionsCommandInput - {@link ListHostedConfigurationVersionsCommandInput}
 * @returns {@link ListHostedConfigurationVersionsCommandOutput}
 * @see {@link ListHostedConfigurationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHostedConfigurationVersionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @example To list the available hosted configuration versions
 * ```javascript
 * // The following list-hosted-configuration-versions example lists the configurations versions hosted in the AWS AppConfig hosted configuration store for the specified application and configuration profile.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f"
 * };
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Items": [
 *     {
 *       "ApplicationId": "339ohji",
 *       "ConfigurationProfileId": "ur8hx2f",
 *       "ContentType": "application/json",
 *       "VersionNumber": 1
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-available-hosted-configuration-versions-1632267647667
 * ```
 *
 */
export class ListHostedConfigurationVersionsCommand extends $Command<
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: ListHostedConfigurationVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHostedConfigurationVersionsCommandInput, ListHostedConfigurationVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHostedConfigurationVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListHostedConfigurationVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "ListHostedConfigurationVersions",
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
  private serialize(
    input: ListHostedConfigurationVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListHostedConfigurationVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHostedConfigurationVersionsCommandOutput> {
    return de_ListHostedConfigurationVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

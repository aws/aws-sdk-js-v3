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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppConfigDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigDataClient";
import {
  GetLatestConfigurationRequest,
  GetLatestConfigurationResponse,
  GetLatestConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetLatestConfigurationCommand, se_GetLatestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLatestConfigurationCommand}.
 */
export interface GetLatestConfigurationCommandInput extends GetLatestConfigurationRequest {}
/**
 * @public
 */
export type GetLatestConfigurationCommandOutputType = Omit<GetLatestConfigurationResponse, "Configuration"> & {
  Configuration?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetLatestConfigurationCommand}.
 */
export interface GetLatestConfigurationCommandOutput
  extends GetLatestConfigurationCommandOutputType,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the latest deployed configuration. This API may return empty configuration
 *          data if the client already has the latest version. For more information about this API
 *          action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the
 *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
 *          <important>
 *             <p>Note the following important information.</p>
 *             <ul>
 *                <li>
 *                   <p>Each configuration token is only valid for one call to
 *                      <code>GetLatestConfiguration</code>. The <code>GetLatestConfiguration</code>
 *                   response includes a <code>NextPollConfigurationToken</code> that should always
 *                   replace the token used for the just-completed call in preparation for the next
 *                   one. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>GetLatestConfiguration</code> is a priced call. For more information, see
 *                      <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigDataClient, GetLatestConfigurationCommand } from "@aws-sdk/client-appconfigdata"; // ES Modules import
 * // const { AppConfigDataClient, GetLatestConfigurationCommand } = require("@aws-sdk/client-appconfigdata"); // CommonJS import
 * const client = new AppConfigDataClient(config);
 * const input = { // GetLatestConfigurationRequest
 *   ConfigurationToken: "STRING_VALUE", // required
 * };
 * const command = new GetLatestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLatestConfigurationResponse
 * //   NextPollConfigurationToken: "STRING_VALUE",
 * //   NextPollIntervalInSeconds: Number("int"),
 * //   ContentType: "STRING_VALUE",
 * //   Configuration: "BLOB_VALUE",
 * //   VersionLabel: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLatestConfigurationCommandInput - {@link GetLatestConfigurationCommandInput}
 * @returns {@link GetLatestConfigurationCommandOutput}
 * @see {@link GetLatestConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLatestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigDataClientResolvedConfig | config} for AppConfigDataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AppConfigDataServiceException}
 * <p>Base exception class for all service exceptions from AppConfigData service.</p>
 *
 */
export class GetLatestConfigurationCommand extends $Command<
  GetLatestConfigurationCommandInput,
  GetLatestConfigurationCommandOutput,
  AppConfigDataClientResolvedConfig
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
  constructor(readonly input: GetLatestConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLatestConfigurationCommandInput, GetLatestConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLatestConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigDataClient";
    const commandName = "GetLatestConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetLatestConfigurationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppConfigData",
        operation: "GetLatestConfiguration",
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
  private serialize(input: GetLatestConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLatestConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLatestConfigurationCommandOutput> {
    return de_GetLatestConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

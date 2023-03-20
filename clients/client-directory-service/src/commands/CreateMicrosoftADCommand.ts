// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  CreateMicrosoftADRequest,
  CreateMicrosoftADRequestFilterSensitiveLog,
  CreateMicrosoftADResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateMicrosoftADCommand,
  serializeAws_json1_1CreateMicrosoftADCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateMicrosoftADCommand}.
 */
export interface CreateMicrosoftADCommandInput extends CreateMicrosoftADRequest {}
/**
 * @public
 *
 * The output of {@link CreateMicrosoftADCommand}.
 */
export interface CreateMicrosoftADCommandOutput extends CreateMicrosoftADResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p>
 *          <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required
 *       permissions have been explicitly granted through a policy. For details about what permissions
 *       are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateMicrosoftADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateMicrosoftADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateMicrosoftADCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMicrosoftADCommandInput - {@link CreateMicrosoftADCommandInput}
 * @returns {@link CreateMicrosoftADCommandOutput}
 * @see {@link CreateMicrosoftADCommandInput} for command's `input` shape.
 * @see {@link CreateMicrosoftADCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryLimitExceededException} (client fault)
 *  <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
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
 *
 */
export class CreateMicrosoftADCommand extends $Command<
  CreateMicrosoftADCommandInput,
  CreateMicrosoftADCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: CreateMicrosoftADCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMicrosoftADCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateMicrosoftADCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMicrosoftADRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateMicrosoftADCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMicrosoftADCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMicrosoftADCommandOutput> {
    return deserializeAws_json1_1CreateMicrosoftADCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

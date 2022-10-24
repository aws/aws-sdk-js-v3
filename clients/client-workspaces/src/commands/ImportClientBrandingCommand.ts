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

import {
  ImportClientBrandingRequest,
  ImportClientBrandingRequestFilterSensitiveLog,
  ImportClientBrandingResult,
  ImportClientBrandingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportClientBrandingCommand,
  serializeAws_json1_1ImportClientBrandingCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface ImportClientBrandingCommandInput extends ImportClientBrandingRequest {}
export interface ImportClientBrandingCommandOutput extends ImportClientBrandingResult, __MetadataBearer {}

/**
 * <p>Imports client branding. Client branding allows you to customize your WorkSpace's client
 *          login portal. You can tailor your login portal company logo, the support email address,
 *          support link, link to reset password, and a custom message for users trying to sign
 *          in.</p>
 *          <p>After you import client branding, the default branding experience for the specified
 *          platform type is replaced with the imported experience</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must specify at least one platform type when importing client
 *                   branding.</p>
 *                </li>
 *                <li>
 *                   <p>You can import up to 6 MB of data with each request. If your request exceeds
 *                   this limit, you can import client branding for different platform types using
 *                   separate requests.</p>
 *                </li>
 *                <li>
 *                   <p>In each platform type, the <code>SupportEmail</code> and
 *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify
 *                   only one parameter for each platform type, but not both.</p>
 *                </li>
 *                <li>
 *                   <p>Imported data can take up to a minute to appear in the WorkSpaces
 *                   client.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ImportClientBrandingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportClientBrandingCommandInput} for command's `input` shape.
 * @see {@link ImportClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class ImportClientBrandingCommand extends $Command<
  ImportClientBrandingCommandInput,
  ImportClientBrandingCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: ImportClientBrandingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportClientBrandingCommandInput, ImportClientBrandingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportClientBrandingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ImportClientBrandingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportClientBrandingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportClientBrandingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportClientBrandingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportClientBrandingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportClientBrandingCommandOutput> {
    return deserializeAws_json1_1ImportClientBrandingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

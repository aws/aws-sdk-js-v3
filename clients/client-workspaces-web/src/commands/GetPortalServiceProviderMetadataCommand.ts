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

import { GetPortalServiceProviderMetadataRequest, GetPortalServiceProviderMetadataResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetPortalServiceProviderMetadataCommand,
  serializeAws_restJson1GetPortalServiceProviderMetadataCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 *
 * The input for {@link GetPortalServiceProviderMetadataCommand}.
 */
export interface GetPortalServiceProviderMetadataCommandInput extends GetPortalServiceProviderMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetPortalServiceProviderMetadataCommand}.
 */
export interface GetPortalServiceProviderMetadataCommandOutput
  extends GetPortalServiceProviderMetadataResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the service provider metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetPortalServiceProviderMetadataCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetPortalServiceProviderMetadataCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new GetPortalServiceProviderMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetPortalServiceProviderMetadataCommandInput - {@link GetPortalServiceProviderMetadataCommandInput}
 * @returns {@link GetPortalServiceProviderMetadataCommandOutput}
 * @see {@link GetPortalServiceProviderMetadataCommandInput} for command's `input` shape.
 * @see {@link GetPortalServiceProviderMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 *
 */
export class GetPortalServiceProviderMetadataCommand extends $Command<
  GetPortalServiceProviderMetadataCommandInput,
  GetPortalServiceProviderMetadataCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: GetPortalServiceProviderMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPortalServiceProviderMetadataCommandInput, GetPortalServiceProviderMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPortalServiceProviderMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "GetPortalServiceProviderMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: GetPortalServiceProviderMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPortalServiceProviderMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPortalServiceProviderMetadataCommandOutput> {
    return deserializeAws_restJson1GetPortalServiceProviderMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

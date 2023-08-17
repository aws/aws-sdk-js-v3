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
} from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult } from "../models/models_0";
import {
  de_UpdateNumberOfDomainControllersCommand,
  se_UpdateNumberOfDomainControllersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNumberOfDomainControllersCommand}.
 */
export interface UpdateNumberOfDomainControllersCommandInput extends UpdateNumberOfDomainControllersRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNumberOfDomainControllersCommand}.
 */
export interface UpdateNumberOfDomainControllersCommandOutput
  extends UpdateNumberOfDomainControllersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds or removes domain controllers to or from the directory. Based on the difference
 *       between current value and new value (provided through this API call), domain controllers will
 *       be added or removed. It may take up to 45 minutes for any new domain controllers to become
 *       fully active once the requested number of domain controllers is updated. During this time, you
 *       cannot make another update request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateNumberOfDomainControllersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   DesiredNumber: Number("int"), // required
 * };
 * const command = new UpdateNumberOfDomainControllersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNumberOfDomainControllersCommandInput - {@link UpdateNumberOfDomainControllersCommandInput}
 * @returns {@link UpdateNumberOfDomainControllersCommandOutput}
 * @see {@link UpdateNumberOfDomainControllersCommandInput} for command's `input` shape.
 * @see {@link UpdateNumberOfDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable or could not be found.</p>
 *
 * @throws {@link DomainControllerLimitExceededException} (client fault)
 *  <p>The maximum allowed number of domain controllers per directory was exceeded. The
 *       default limit per directory is 20 domain controllers.</p>
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
 */
export class UpdateNumberOfDomainControllersCommand extends $Command<
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
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
  constructor(readonly input: UpdateNumberOfDomainControllersCommandInput) {
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
  ): Handler<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNumberOfDomainControllersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "UpdateNumberOfDomainControllersCommand";
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
    input: UpdateNumberOfDomainControllersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateNumberOfDomainControllersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNumberOfDomainControllersCommandOutput> {
    return de_UpdateNumberOfDomainControllersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

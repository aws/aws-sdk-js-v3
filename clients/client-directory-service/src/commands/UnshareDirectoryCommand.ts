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
import { UnshareDirectoryRequest, UnshareDirectoryResult } from "../models/models_0";
import { de_UnshareDirectoryCommand, se_UnshareDirectoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnshareDirectoryCommand}.
 */
export interface UnshareDirectoryCommandInput extends UnshareDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link UnshareDirectoryCommand}.
 */
export interface UnshareDirectoryCommandOutput extends UnshareDirectoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UnshareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UnshareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UnshareDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UnshareTarget: { // UnshareTarget
 *     Id: "STRING_VALUE", // required
 *     Type: "ACCOUNT", // required
 *   },
 * };
 * const command = new UnshareDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // UnshareDirectoryResult
 * //   SharedDirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UnshareDirectoryCommandInput - {@link UnshareDirectoryCommandInput}
 * @returns {@link UnshareDirectoryCommandOutput}
 * @see {@link UnshareDirectoryCommandInput} for command's `input` shape.
 * @see {@link UnshareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryNotSharedException} (client fault)
 *  <p>The specified directory has not been shared with this Amazon Web Services account.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified shared target is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class UnshareDirectoryCommand extends $Command<
  UnshareDirectoryCommandInput,
  UnshareDirectoryCommandOutput,
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
  constructor(readonly input: UnshareDirectoryCommandInput) {
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
  ): Handler<UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnshareDirectoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "UnshareDirectoryCommand";
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
  private serialize(input: UnshareDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnshareDirectoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnshareDirectoryCommandOutput> {
    return de_UnshareDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

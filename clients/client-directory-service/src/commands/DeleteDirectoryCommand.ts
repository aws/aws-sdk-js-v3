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
import { DeleteDirectoryRequest, DeleteDirectoryResult } from "../models/models_0";
import { de_DeleteDirectoryCommand, se_DeleteDirectoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectoryCommand}.
 */
export interface DeleteDirectoryCommandInput extends DeleteDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectoryCommand}.
 */
export interface DeleteDirectoryCommandOutput extends DeleteDirectoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an Directory Service directory.</p>
 *          <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions
 *       Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDirectoryResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDirectoryCommandInput - {@link DeleteDirectoryCommandInput}
 * @returns {@link DeleteDirectoryCommandOutput}
 * @see {@link DeleteDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DeleteDirectoryCommand extends $Command<
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput,
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
  constructor(readonly input: DeleteDirectoryCommandInput) {
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
  ): Handler<DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDirectoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DeleteDirectoryCommand";
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
  private serialize(input: DeleteDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDirectoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDirectoryCommandOutput> {
    return de_DeleteDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

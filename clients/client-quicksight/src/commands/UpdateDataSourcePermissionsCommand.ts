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

import { UpdateDataSourcePermissionsRequest, UpdateDataSourcePermissionsResponse } from "../models/models_3";
import {
  deserializeAws_restJson1UpdateDataSourcePermissionsCommand,
  serializeAws_restJson1UpdateDataSourcePermissionsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link UpdateDataSourcePermissionsCommand}.
 */
export interface UpdateDataSourcePermissionsCommandInput extends UpdateDataSourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourcePermissionsCommand}.
 */
export interface UpdateDataSourcePermissionsCommandOutput
  extends UpdateDataSourcePermissionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the permissions to a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDataSourcePermissionsCommandInput - {@link UpdateDataSourcePermissionsCommandInput}
 * @returns {@link UpdateDataSourcePermissionsCommandOutput}
 * @see {@link UpdateDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 *
 */
export class UpdateDataSourcePermissionsCommand extends $Command<
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: UpdateDataSourcePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataSourcePermissionsCommandInput, UpdateDataSourcePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataSourcePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateDataSourcePermissionsCommand";
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
  private serialize(input: UpdateDataSourcePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDataSourcePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDataSourcePermissionsCommandOutput> {
    return deserializeAws_restJson1UpdateDataSourcePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

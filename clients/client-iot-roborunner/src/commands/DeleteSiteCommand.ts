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

import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { DeleteSiteRequest, DeleteSiteResponse } from "../models/models_0";
import { de_DeleteSiteCommand, se_DeleteSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSiteCommand}.
 */
export interface DeleteSiteCommandInput extends DeleteSiteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSiteCommand}.
 */
export interface DeleteSiteCommandOutput extends DeleteSiteResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to delete a site
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, DeleteSiteCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, DeleteSiteCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // DeleteSiteRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteSiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSiteCommandInput - {@link DeleteSiteCommandInput}
 * @returns {@link DeleteSiteCommandOutput}
 * @see {@link DeleteSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteSiteCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception thrown if a resource in a create request already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Exception thrown if something goes wrong within the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Exception thrown if a resource referenced in the request doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Exception thrown if the api has been called too quickly be the client.
 *
 * @throws {@link ValidationException} (client fault)
 *  Exception thrown if an invalid parameter is provided to an API.
 *
 * @throws {@link IoTRoboRunnerServiceException}
 * <p>Base exception class for all service exceptions from IoTRoboRunner service.</p>
 *
 */
export class DeleteSiteCommand extends $Command<
  DeleteSiteCommandInput,
  DeleteSiteCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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
  constructor(readonly input: DeleteSiteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSiteCommandInput, DeleteSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteSiteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "DeleteSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTRoboRunner",
        operation: "DeleteSite",
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
  private serialize(input: DeleteSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSiteCommandOutput> {
    return de_DeleteSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

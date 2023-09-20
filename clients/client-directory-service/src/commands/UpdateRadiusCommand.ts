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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateRadiusRequest, UpdateRadiusRequestFilterSensitiveLog, UpdateRadiusResult } from "../models/models_0";
import { de_UpdateRadiusCommand, se_UpdateRadiusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRadiusCommand}.
 */
export interface UpdateRadiusCommandInput extends UpdateRadiusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRadiusCommand}.
 */
export interface UpdateRadiusCommandOutput extends UpdateRadiusResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information
 *          for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateRadiusRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RadiusSettings: { // RadiusSettings
 *     RadiusServers: [ // Servers
 *       "STRING_VALUE",
 *     ],
 *     RadiusPort: Number("int"),
 *     RadiusTimeout: Number("int"),
 *     RadiusRetries: Number("int"),
 *     SharedSecret: "STRING_VALUE",
 *     AuthenticationProtocol: "PAP" || "CHAP" || "MS-CHAPv1" || "MS-CHAPv2",
 *     DisplayLabel: "STRING_VALUE",
 *     UseSameUsername: true || false,
 *   },
 * };
 * const command = new UpdateRadiusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRadiusCommandInput - {@link UpdateRadiusCommandInput}
 * @returns {@link UpdateRadiusCommandOutput}
 * @see {@link UpdateRadiusCommandInput} for command's `input` shape.
 * @see {@link UpdateRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
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
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class UpdateRadiusCommand extends $Command<
  UpdateRadiusCommandInput,
  UpdateRadiusCommandOutput,
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
  constructor(readonly input: UpdateRadiusCommandInput) {
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
  ): Handler<UpdateRadiusCommandInput, UpdateRadiusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateRadiusCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "UpdateRadiusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRadiusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "UpdateRadius",
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
  private serialize(input: UpdateRadiusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRadiusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRadiusCommandOutput> {
    return de_UpdateRadiusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

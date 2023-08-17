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
import { EnableRadiusRequest, EnableRadiusRequestFilterSensitiveLog, EnableRadiusResult } from "../models/models_0";
import { de_EnableRadiusCommand, se_EnableRadiusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableRadiusCommand}.
 */
export interface EnableRadiusCommandInput extends EnableRadiusRequest {}
/**
 * @public
 *
 * The output of {@link EnableRadiusCommand}.
 */
export interface EnableRadiusCommandOutput extends EnableRadiusResult, __MetadataBearer {}

/**
 * @public
 * <p>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User
 *          Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableRadiusRequest
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
 * const command = new EnableRadiusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableRadiusCommandInput - {@link EnableRadiusCommandInput}
 * @returns {@link EnableRadiusCommandOutput}
 * @see {@link EnableRadiusCommandInput} for command's `input` shape.
 * @see {@link EnableRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
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
export class EnableRadiusCommand extends $Command<
  EnableRadiusCommandInput,
  EnableRadiusCommandOutput,
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
  constructor(readonly input: EnableRadiusCommandInput) {
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
  ): Handler<EnableRadiusCommandInput, EnableRadiusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnableRadiusCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "EnableRadiusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableRadiusRequestFilterSensitiveLog,
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
  private serialize(input: EnableRadiusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableRadiusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableRadiusCommandOutput> {
    return de_EnableRadiusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

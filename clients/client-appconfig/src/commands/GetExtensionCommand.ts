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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { Extension, GetExtensionRequest } from "../models/models_0";
import { de_GetExtensionCommand, se_GetExtensionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetExtensionCommand}.
 */
export interface GetExtensionCommandInput extends GetExtensionRequest {}
/**
 * @public
 *
 * The output of {@link GetExtensionCommand}.
 */
export interface GetExtensionCommandOutput extends Extension, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an AppConfig extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetExtensionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetExtensionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // GetExtensionRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   VersionNumber: Number("int"),
 * };
 * const command = new GetExtensionCommand(input);
 * const response = await client.send(command);
 * // { // Extension
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionNumber: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Actions: { // ActionsMap
 * //     "<keys>": [ // ActionList
 * //       { // Action
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Uri: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Parameters: { // ParameterMap
 * //     "<keys>": { // Parameter
 * //       Description: "STRING_VALUE",
 * //       Required: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExtensionCommandInput - {@link GetExtensionCommandInput}
 * @returns {@link GetExtensionCommandOutput}
 * @see {@link GetExtensionCommandInput} for command's `input` shape.
 * @see {@link GetExtensionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 */
export class GetExtensionCommand extends $Command<
  GetExtensionCommandInput,
  GetExtensionCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: GetExtensionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExtensionCommandInput, GetExtensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetExtensionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetExtensionCommand";
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
  private serialize(input: GetExtensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetExtensionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExtensionCommandOutput> {
    return de_GetExtensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import {
  ExportServerEngineAttributeRequest,
  ExportServerEngineAttributeRequestFilterSensitiveLog,
  ExportServerEngineAttributeResponse,
  ExportServerEngineAttributeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_ExportServerEngineAttributeCommand, se_ExportServerEngineAttributeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportServerEngineAttributeCommand}.
 */
export interface ExportServerEngineAttributeCommandInput extends ExportServerEngineAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ExportServerEngineAttributeCommand}.
 */
export interface ExportServerEngineAttributeCommandOutput
  extends ExportServerEngineAttributeResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
 *       FAILED or DELETING.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, ExportServerEngineAttributeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, ExportServerEngineAttributeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // ExportServerEngineAttributeRequest
 *   ExportAttributeName: "STRING_VALUE", // required
 *   ServerName: "STRING_VALUE", // required
 *   InputAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ExportServerEngineAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ExportServerEngineAttributeResponse
 * //   EngineAttribute: { // EngineAttribute
 * //     Name: "STRING_VALUE",
 * //     Value: "STRING_VALUE",
 * //   },
 * //   ServerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportServerEngineAttributeCommandInput - {@link ExportServerEngineAttributeCommandInput}
 * @returns {@link ExportServerEngineAttributeCommandOutput}
 * @see {@link ExportServerEngineAttributeCommandInput} for command's `input` shape.
 * @see {@link ExportServerEngineAttributeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 */
export class ExportServerEngineAttributeCommand extends $Command<
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput,
  OpsWorksCMClientResolvedConfig
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
  constructor(readonly input: ExportServerEngineAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportServerEngineAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "ExportServerEngineAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportServerEngineAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportServerEngineAttributeResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorksCM_V2016_11_01",
        operation: "ExportServerEngineAttribute",
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
  private serialize(input: ExportServerEngineAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportServerEngineAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportServerEngineAttributeCommandOutput> {
    return de_ExportServerEngineAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

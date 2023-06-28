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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  StartProjectSessionRequest,
  StartProjectSessionResponse,
  StartProjectSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartProjectSessionCommand, se_StartProjectSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartProjectSessionCommand}.
 */
export interface StartProjectSessionCommandInput extends StartProjectSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartProjectSessionCommand}.
 */
export interface StartProjectSessionCommandOutput extends StartProjectSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
 *             project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartProjectSessionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartProjectSessionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // StartProjectSessionRequest
 *   Name: "STRING_VALUE", // required
 *   AssumeControl: true || false,
 * };
 * const command = new StartProjectSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartProjectSessionResponse
 * //   Name: "STRING_VALUE", // required
 * //   ClientSessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartProjectSessionCommandInput - {@link StartProjectSessionCommandInput}
 * @returns {@link StartProjectSessionCommandOutput}
 * @see {@link StartProjectSessionCommandInput} for command's `input` shape.
 * @see {@link StartProjectSessionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class StartProjectSessionCommand extends $Command<
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: StartProjectSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartProjectSessionCommandInput, StartProjectSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartProjectSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "StartProjectSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StartProjectSessionResponseFilterSensitiveLog,
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
  private serialize(input: StartProjectSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartProjectSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartProjectSessionCommandOutput> {
    return de_StartProjectSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  CreateCliTokenRequest,
  CreateCliTokenResponse,
  CreateCliTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_CreateCliTokenCommand, se_CreateCliTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCliTokenCommand}.
 */
export interface CreateCliTokenCommandInput extends CreateCliTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateCliTokenCommand}.
 */
export interface CreateCliTokenCommandOutput extends CreateCliTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateCliTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateCliTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const input = { // CreateCliTokenRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateCliTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateCliTokenResponse
 * //   CliToken: "STRING_VALUE",
 * //   WebServerHostname: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCliTokenCommandInput - {@link CreateCliTokenCommandInput}
 * @returns {@link CreateCliTokenCommandOutput}
 * @see {@link CreateCliTokenCommandInput} for command's `input` shape.
 * @see {@link CreateCliTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 */
export class CreateCliTokenCommand extends $Command<
  CreateCliTokenCommandInput,
  CreateCliTokenCommandOutput,
  MWAAClientResolvedConfig
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
  constructor(readonly input: CreateCliTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCliTokenCommandInput, CreateCliTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCliTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "CreateCliTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateCliTokenResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMWAA",
        operation: "CreateCliToken",
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
  private serialize(input: CreateCliTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCliTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCliTokenCommandOutput> {
    return de_CreateCliTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

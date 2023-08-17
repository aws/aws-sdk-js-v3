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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  CreateTestGridUrlRequest,
  CreateTestGridUrlResult,
  CreateTestGridUrlResultFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateTestGridUrlCommand, se_CreateTestGridUrlCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTestGridUrlCommand}.
 */
export interface CreateTestGridUrlCommandInput extends CreateTestGridUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestGridUrlCommand}.
 */
export interface CreateTestGridUrlCommandOutput extends CreateTestGridUrlResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
 *          constructor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridUrlCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridUrlCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateTestGridUrlRequest
 *   projectArn: "STRING_VALUE", // required
 *   expiresInSeconds: Number("int"), // required
 * };
 * const command = new CreateTestGridUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestGridUrlResult
 * //   url: "STRING_VALUE",
 * //   expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateTestGridUrlCommandInput - {@link CreateTestGridUrlCommandInput}
 * @returns {@link CreateTestGridUrlCommandOutput}
 * @see {@link CreateTestGridUrlCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridUrlCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class CreateTestGridUrlCommand extends $Command<
  CreateTestGridUrlCommandInput,
  CreateTestGridUrlCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: CreateTestGridUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTestGridUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateTestGridUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateTestGridUrlResultFilterSensitiveLog,
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
  private serialize(input: CreateTestGridUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTestGridUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTestGridUrlCommandOutput> {
    return de_CreateTestGridUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RegisterContainerImageRequest, RegisterContainerImageResult } from "../models/models_1";
import { de_RegisterContainerImageCommand, se_RegisterContainerImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterContainerImageCommand}.
 */
export interface RegisterContainerImageCommandInput extends RegisterContainerImageRequest {}
/**
 * @public
 *
 * The output of {@link RegisterContainerImageCommand}.
 */
export interface RegisterContainerImageCommandOutput extends RegisterContainerImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Registers a container image to your Amazon Lightsail container service.</p>
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Amazon Lightsail Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RegisterContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RegisterContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // RegisterContainerImageRequest
 *   serviceName: "STRING_VALUE", // required
 *   label: "STRING_VALUE", // required
 *   digest: "STRING_VALUE", // required
 * };
 * const command = new RegisterContainerImageCommand(input);
 * const response = await client.send(command);
 * // { // RegisterContainerImageResult
 * //   containerImage: { // ContainerImage
 * //     image: "STRING_VALUE",
 * //     digest: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterContainerImageCommandInput - {@link RegisterContainerImageCommandInput}
 * @returns {@link RegisterContainerImageCommandOutput}
 * @see {@link RegisterContainerImageCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class RegisterContainerImageCommand extends $Command<
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: RegisterContainerImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterContainerImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "RegisterContainerImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "RegisterContainerImage",
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
  private serialize(input: RegisterContainerImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterContainerImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterContainerImageCommandOutput> {
    return de_RegisterContainerImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

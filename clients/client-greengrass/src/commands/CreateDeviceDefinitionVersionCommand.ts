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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateDeviceDefinitionVersionCommand,
  se_CreateDeviceDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDeviceDefinitionVersionCommand}.
 */
export interface CreateDeviceDefinitionVersionCommandInput extends CreateDeviceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceDefinitionVersionCommand}.
 */
export interface CreateDeviceDefinitionVersionCommandOutput
  extends CreateDeviceDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Creates a version of a device definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateDeviceDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   DeviceDefinitionId: "STRING_VALUE", // required
 *   Devices: [ // __listOfDevice
 *     { // Device
 *       CertificateArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *       SyncShadow: true || false,
 *       ThingArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDeviceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeviceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeviceDefinitionVersionCommandInput - {@link CreateDeviceDefinitionVersionCommandInput}
 * @returns {@link CreateDeviceDefinitionVersionCommandOutput}
 * @see {@link CreateDeviceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateDeviceDefinitionVersionCommand extends $Command<
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: CreateDeviceDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeviceDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateDeviceDefinitionVersionCommand";
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
  private serialize(input: CreateDeviceDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDeviceDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDeviceDefinitionVersionCommandOutput> {
    return de_CreateDeviceDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

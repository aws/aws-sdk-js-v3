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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetConfigurationRequest, GetConfigurationResponse } from "../models/models_0";
import { de_GetConfigurationCommand, se_GetConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandInput extends GetConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandOutput extends GetConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves setting configurations for Inspector scans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = {};
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationResponse
 * //   ecrConfiguration: { // EcrConfigurationState
 * //     rescanDurationState: { // EcrRescanDurationState
 * //       rescanDuration: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigurationCommandInput - {@link GetConfigurationCommandInput}
 * @returns {@link GetConfigurationCommandOutput}
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class GetConfigurationCommand extends $Command<
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: GetConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationCommandInput, GetConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "GetConfigurationCommand";
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
  private serialize(input: GetConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigurationCommandOutput> {
    return de_GetConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

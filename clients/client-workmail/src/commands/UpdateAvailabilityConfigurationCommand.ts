// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateAvailabilityConfigurationRequest,
  UpdateAvailabilityConfigurationRequestFilterSensitiveLog,
  UpdateAvailabilityConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAvailabilityConfigurationCommand,
  serializeAws_json1_1UpdateAvailabilityConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link UpdateAvailabilityConfigurationCommand}.
 */
export interface UpdateAvailabilityConfigurationCommandInput extends UpdateAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAvailabilityConfigurationCommand}.
 */
export interface UpdateAvailabilityConfigurationCommandOutput
  extends UpdateAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail
 *          organization and domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = {
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   EwsProvider: {
 *     EwsEndpoint: "STRING_VALUE", // required
 *     EwsUsername: "STRING_VALUE", // required
 *     EwsPassword: "STRING_VALUE", // required
 *   },
 *   LambdaProvider: {
 *     LambdaArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateAvailabilityConfigurationCommandInput - {@link UpdateAvailabilityConfigurationCommandInput}
 * @returns {@link UpdateAvailabilityConfigurationCommandOutput}
 * @see {@link UpdateAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 *
 */
export class UpdateAvailabilityConfigurationCommand extends $Command<
  UpdateAvailabilityConfigurationCommandInput,
  UpdateAvailabilityConfigurationCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: UpdateAvailabilityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAvailabilityConfigurationCommandInput, UpdateAvailabilityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAvailabilityConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "UpdateAvailabilityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAvailabilityConfigurationRequestFilterSensitiveLog,
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
  private serialize(
    input: UpdateAvailabilityConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAvailabilityConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAvailabilityConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateAvailabilityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

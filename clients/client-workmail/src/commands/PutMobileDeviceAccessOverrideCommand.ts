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

import { PutMobileDeviceAccessOverrideRequest, PutMobileDeviceAccessOverrideResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutMobileDeviceAccessOverrideCommand,
  serializeAws_json1_1PutMobileDeviceAccessOverrideCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link PutMobileDeviceAccessOverrideCommand}.
 */
export interface PutMobileDeviceAccessOverrideCommandInput extends PutMobileDeviceAccessOverrideRequest {}
/**
 * @public
 *
 * The output of {@link PutMobileDeviceAccessOverrideCommand}.
 */
export interface PutMobileDeviceAccessOverrideCommandOutput
  extends PutMobileDeviceAccessOverrideResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a mobile device access override for the given WorkMail organization, user, and device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutMobileDeviceAccessOverrideCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutMobileDeviceAccessOverrideCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // PutMobileDeviceAccessOverrideRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   Effect: "ALLOW" || "DENY", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new PutMobileDeviceAccessOverrideCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutMobileDeviceAccessOverrideCommandInput - {@link PutMobileDeviceAccessOverrideCommandInput}
 * @returns {@link PutMobileDeviceAccessOverrideCommandOutput}
 * @see {@link PutMobileDeviceAccessOverrideCommandInput} for command's `input` shape.
 * @see {@link PutMobileDeviceAccessOverrideCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
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
 *
 */
export class PutMobileDeviceAccessOverrideCommand extends $Command<
  PutMobileDeviceAccessOverrideCommandInput,
  PutMobileDeviceAccessOverrideCommandOutput,
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
  constructor(readonly input: PutMobileDeviceAccessOverrideCommandInput) {
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
  ): Handler<PutMobileDeviceAccessOverrideCommandInput, PutMobileDeviceAccessOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutMobileDeviceAccessOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutMobileDeviceAccessOverrideCommand";
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
  private serialize(input: PutMobileDeviceAccessOverrideCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutMobileDeviceAccessOverrideCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutMobileDeviceAccessOverrideCommandOutput> {
    return deserializeAws_json1_1PutMobileDeviceAccessOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

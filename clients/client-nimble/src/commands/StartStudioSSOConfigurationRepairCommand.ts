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
  StartStudioSSOConfigurationRepairRequest,
  StartStudioSSOConfigurationRepairRequestFilterSensitiveLog,
  StartStudioSSOConfigurationRepairResponse,
  StartStudioSSOConfigurationRepairResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand,
  serializeAws_restJson1StartStudioSSOConfigurationRepairCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartStudioSSOConfigurationRepairCommand}.
 */
export interface StartStudioSSOConfigurationRepairCommandInput extends StartStudioSSOConfigurationRepairRequest {}
/**
 * @public
 *
 * The output of {@link StartStudioSSOConfigurationRepairCommand}.
 */
export interface StartStudioSSOConfigurationRepairCommandOutput
  extends StartStudioSSOConfigurationRepairResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Repairs the IAM Identity Center configuration for a given studio.</p>
 *         <p>If the studio has a valid IAM Identity Center configuration currently associated with
 *             it, this operation will fail with a validation error.</p>
 *         <p>If the studio does not have a valid IAM Identity Center configuration currently
 *             associated with it, then a new IAM Identity Center application is created for the studio
 *             and the studio is changed to the <code>READY</code> state.</p>
 *         <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, StartStudioSSOConfigurationRepairCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, StartStudioSSOConfigurationRepairCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new StartStudioSSOConfigurationRepairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartStudioSSOConfigurationRepairCommandInput - {@link StartStudioSSOConfigurationRepairCommandInput}
 * @returns {@link StartStudioSSOConfigurationRepairCommandOutput}
 * @see {@link StartStudioSSOConfigurationRepairCommandInput} for command's `input` shape.
 * @see {@link StartStudioSSOConfigurationRepairCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 *
 */
export class StartStudioSSOConfigurationRepairCommand extends $Command<
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: StartStudioSSOConfigurationRepairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartStudioSSOConfigurationRepairCommandInput, StartStudioSSOConfigurationRepairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStudioSSOConfigurationRepairCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "StartStudioSSOConfigurationRepairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStudioSSOConfigurationRepairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartStudioSSOConfigurationRepairResponseFilterSensitiveLog,
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
    input: StartStudioSSOConfigurationRepairCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartStudioSSOConfigurationRepairCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartStudioSSOConfigurationRepairCommandOutput> {
    return deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

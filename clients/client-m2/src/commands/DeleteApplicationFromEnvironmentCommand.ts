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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { DeleteApplicationFromEnvironmentRequest, DeleteApplicationFromEnvironmentResponse } from "../models/models_0";
import {
  de_DeleteApplicationFromEnvironmentCommand,
  se_DeleteApplicationFromEnvironmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationFromEnvironmentCommand}.
 */
export interface DeleteApplicationFromEnvironmentCommandInput extends DeleteApplicationFromEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationFromEnvironmentCommand}.
 */
export interface DeleteApplicationFromEnvironmentCommandOutput
  extends DeleteApplicationFromEnvironmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a specific application from the specific runtime environment where it was
 *          previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any
 *          application has ever been deployed to it. This API removes the association of the
 *          application with the runtime environment so you can delete the environment smoothly.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, DeleteApplicationFromEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, DeleteApplicationFromEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // DeleteApplicationFromEnvironmentRequest
 *   applicationId: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationFromEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationFromEnvironmentCommandInput - {@link DeleteApplicationFromEnvironmentCommandInput}
 * @returns {@link DeleteApplicationFromEnvironmentCommandOutput}
 * @see {@link DeleteApplicationFromEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationFromEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 */
export class DeleteApplicationFromEnvironmentCommand extends $Command<
  DeleteApplicationFromEnvironmentCommandInput,
  DeleteApplicationFromEnvironmentCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: DeleteApplicationFromEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationFromEnvironmentCommandInput, DeleteApplicationFromEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteApplicationFromEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "DeleteApplicationFromEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsSupernovaControlPlaneService",
        operation: "DeleteApplicationFromEnvironment",
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
  private serialize(
    input: DeleteApplicationFromEnvironmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteApplicationFromEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationFromEnvironmentCommandOutput> {
    return de_DeleteApplicationFromEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

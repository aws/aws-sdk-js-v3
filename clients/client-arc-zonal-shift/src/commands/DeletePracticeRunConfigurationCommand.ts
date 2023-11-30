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

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { DeletePracticeRunConfigurationRequest, DeletePracticeRunConfigurationResponse } from "../models/models_0";
import {
  de_DeletePracticeRunConfigurationCommand,
  se_DeletePracticeRunConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePracticeRunConfigurationCommand}.
 */
export interface DeletePracticeRunConfigurationCommandInput extends DeletePracticeRunConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePracticeRunConfigurationCommand}.
 */
export interface DeletePracticeRunConfigurationCommandOutput
  extends DeletePracticeRunConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the practice run configuration for a resource. Before you can delete
 * 			a practice run configuration for a resource., you must disable zonal autoshift for
 * 			the resource. Practice runs must be configured for zonal autoshift to be enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, DeletePracticeRunConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, DeletePracticeRunConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // DeletePracticeRunConfigurationRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeletePracticeRunConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeletePracticeRunConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param DeletePracticeRunConfigurationCommandInput - {@link DeletePracticeRunConfigurationCommandInput}
 * @returns {@link DeletePracticeRunConfigurationCommandOutput}
 * @see {@link DeletePracticeRunConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePracticeRunConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 */
export class DeletePracticeRunConfigurationCommand extends $Command<
  DeletePracticeRunConfigurationCommandInput,
  DeletePracticeRunConfigurationCommandOutput,
  ARCZonalShiftClientResolvedConfig
> {
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
  constructor(readonly input: DeletePracticeRunConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ARCZonalShiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePracticeRunConfigurationCommandInput, DeletePracticeRunConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePracticeRunConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "DeletePracticeRunConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "DeletePracticeRunConfiguration",
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
    input: DeletePracticeRunConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeletePracticeRunConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePracticeRunConfigurationCommandOutput> {
    return de_DeletePracticeRunConfigurationCommand(output, context);
  }
}

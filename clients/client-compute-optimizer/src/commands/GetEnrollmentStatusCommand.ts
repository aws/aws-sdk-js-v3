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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/models_0";
import { de_GetEnrollmentStatusCommand, se_GetEnrollmentStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEnrollmentStatusCommand}.
 */
export interface GetEnrollmentStatusCommandInput extends GetEnrollmentStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetEnrollmentStatusCommand}.
 */
export interface GetEnrollmentStatusCommandOutput extends GetEnrollmentStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer
 *             service.</p>
 *          <p>If the account is the management account of an organization, this action also confirms
 *             the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information
 *             about the enrollment status of member accounts of an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = {};
 * const command = new GetEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetEnrollmentStatusResponse
 * //   status: "Active" || "Inactive" || "Pending" || "Failed",
 * //   statusReason: "STRING_VALUE",
 * //   memberAccountsEnrolled: true || false,
 * //   lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //   numberOfMemberAccountsOptedIn: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetEnrollmentStatusCommandInput - {@link GetEnrollmentStatusCommandInput}
 * @returns {@link GetEnrollmentStatusCommandOutput}
 * @see {@link GetEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 */
export class GetEnrollmentStatusCommand extends $Command<
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput,
  ComputeOptimizerClientResolvedConfig
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
  constructor(readonly input: GetEnrollmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnrollmentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEnrollmentStatusCommand";
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
  private serialize(input: GetEnrollmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEnrollmentStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnrollmentStatusCommandOutput> {
    return de_GetEnrollmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

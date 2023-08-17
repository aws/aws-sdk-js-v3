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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { CancelJobRunRequest, CancelJobRunResponse } from "../models/models_0";
import { de_CancelJobRunCommand, se_CancelJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelJobRunCommand}.
 */
export interface CancelJobRunCommandInput extends CancelJobRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobRunCommand}.
 */
export interface CancelJobRunCommandOutput extends CancelJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
 *          SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CancelJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CancelJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // CancelJobRunRequest
 *   id: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 * };
 * const command = new CancelJobRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelJobRunResponse
 * //   id: "STRING_VALUE",
 * //   virtualClusterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelJobRunCommandInput - {@link CancelJobRunCommandInput}
 * @returns {@link CancelJobRunCommandOutput}
 * @see {@link CancelJobRunCommandInput} for command's `input` shape.
 * @see {@link CancelJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class CancelJobRunCommand extends $Command<
  CancelJobRunCommandInput,
  CancelJobRunCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: CancelJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelJobRunCommandInput, CancelJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelJobRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "CancelJobRunCommand";
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
  private serialize(input: CancelJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelJobRunCommandOutput> {
    return de_CancelJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

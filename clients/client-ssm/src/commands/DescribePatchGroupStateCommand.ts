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

import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1";
import { de_DescribePatchGroupStateCommand, se_DescribePatchGroupStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandInput extends DescribePatchGroupStateRequest {}
/**
 * @public
 *
 * The output of {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandOutput extends DescribePatchGroupStateResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns high-level aggregated patch compliance state information for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribePatchGroupStateRequest
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchGroupStateResult
 * //   Instances: Number("int"),
 * //   InstancesWithInstalledPatches: Number("int"),
 * //   InstancesWithInstalledOtherPatches: Number("int"),
 * //   InstancesWithInstalledPendingRebootPatches: Number("int"),
 * //   InstancesWithInstalledRejectedPatches: Number("int"),
 * //   InstancesWithMissingPatches: Number("int"),
 * //   InstancesWithFailedPatches: Number("int"),
 * //   InstancesWithNotApplicablePatches: Number("int"),
 * //   InstancesWithUnreportedNotApplicablePatches: Number("int"),
 * //   InstancesWithCriticalNonCompliantPatches: Number("int"),
 * //   InstancesWithSecurityNonCompliantPatches: Number("int"),
 * //   InstancesWithOtherNonCompliantPatches: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribePatchGroupStateCommandInput - {@link DescribePatchGroupStateCommandInput}
 * @returns {@link DescribePatchGroupStateCommandOutput}
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribePatchGroupStateCommand extends $Command<
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribePatchGroupStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePatchGroupStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribePatchGroupStateCommand";
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
  private serialize(input: DescribePatchGroupStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePatchGroupStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchGroupStateCommandOutput> {
    return de_DescribePatchGroupStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

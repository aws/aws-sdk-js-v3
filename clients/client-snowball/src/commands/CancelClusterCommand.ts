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

import { CancelClusterRequest, CancelClusterResult } from "../models/models_0";
import { de_CancelClusterCommand, se_CancelClusterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelClusterCommand}.
 */
export interface CancelClusterCommandInput extends CancelClusterRequest {}
/**
 * @public
 *
 * The output of {@link CancelClusterCommand}.
 */
export interface CancelClusterCommandOutput extends CancelClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the
 *         <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster
 *       job to cancel it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // CancelClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new CancelClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelClusterCommandInput - {@link CancelClusterCommandInput}
 * @returns {@link CancelClusterCommandOutput}
 * @see {@link CancelClusterCommandInput} for command's `input` shape.
 * @see {@link CancelClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *  <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To cancel a cluster job
 * ```javascript
 * // This operation cancels a cluster job. You can only cancel a cluster job while it's in the AwaitingQuorum status.
 * const input = {
 *   "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new CancelClusterCommand(input);
 * await client.send(command);
 * // example id: to-cancel-a-cluster-job-1482533760554
 * ```
 *
 */
export class CancelClusterCommand extends $Command<
  CancelClusterCommandInput,
  CancelClusterCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: CancelClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelClusterCommandInput, CancelClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CancelClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "CancelCluster",
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
  private serialize(input: CancelClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelClusterCommandOutput> {
    return de_CancelClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

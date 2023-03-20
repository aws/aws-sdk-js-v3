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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeUpdateRequest, DescribeUpdateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeUpdateCommand,
  serializeAws_restJson1DescribeUpdateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeUpdateCommand}.
 */
export interface DescribeUpdateCommandInput extends DescribeUpdateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUpdateCommand}.
 */
export interface DescribeUpdateCommandOutput extends DescribeUpdateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns descriptive information about an update against your Amazon EKS
 *             cluster or associated managed node group or Amazon EKS add-on.</p>
 *          <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
 *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
 *             for the failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeUpdateCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeUpdateCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeUpdateCommandInput - {@link DescribeUpdateCommandInput}
 * @returns {@link DescribeUpdateCommandOutput}
 * @see {@link DescribeUpdateCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 *
 */
export class DescribeUpdateCommand extends $Command<
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: DescribeUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUpdateCommandInput, DescribeUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeUpdateCommand";
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
  private serialize(input: DescribeUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeUpdateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUpdateCommandOutput> {
    return deserializeAws_restJson1DescribeUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

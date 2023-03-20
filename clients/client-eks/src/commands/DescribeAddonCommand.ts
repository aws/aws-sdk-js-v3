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
import { DescribeAddonRequest, DescribeAddonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAddonCommand,
  serializeAws_restJson1DescribeAddonCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeAddonCommand}.
 */
export interface DescribeAddonCommandInput extends DescribeAddonRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddonCommand}.
 */
export interface DescribeAddonCommandOutput extends DescribeAddonResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an Amazon EKS add-on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAddonCommandInput - {@link DescribeAddonCommandInput}
 * @returns {@link DescribeAddonCommandOutput}
 * @see {@link DescribeAddonCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
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
export class DescribeAddonCommand extends $Command<
  DescribeAddonCommandInput,
  DescribeAddonCommandOutput,
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
  constructor(readonly input: DescribeAddonCommandInput) {
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
  ): Handler<DescribeAddonCommandInput, DescribeAddonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAddonCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeAddonCommand";
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
  private serialize(input: DescribeAddonCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAddonCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddonCommandOutput> {
    return deserializeAws_restJson1DescribeAddonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

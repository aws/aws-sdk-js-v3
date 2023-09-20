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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { PutClusterPolicyRequest, PutClusterPolicyResponse } from "../models/models_0";
import { de_PutClusterPolicyCommand, se_PutClusterPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutClusterPolicyCommand}.
 */
export interface PutClusterPolicyCommandInput extends PutClusterPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutClusterPolicyCommand}.
 */
export interface PutClusterPolicyCommandOutput extends PutClusterPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, PutClusterPolicyCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, PutClusterPolicyCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // PutClusterPolicyRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE",
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutClusterPolicyResponse
 * //   CurrentVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutClusterPolicyCommandInput - {@link PutClusterPolicyCommandInput}
 * @returns {@link PutClusterPolicyCommandOutput}
 * @see {@link PutClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link PutClusterPolicyCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class PutClusterPolicyCommand extends $Command<
  PutClusterPolicyCommandInput,
  PutClusterPolicyCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: PutClusterPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutClusterPolicyCommandInput, PutClusterPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutClusterPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "PutClusterPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "PutClusterPolicy",
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
  private serialize(input: PutClusterPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutClusterPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutClusterPolicyCommandOutput> {
    return de_PutClusterPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

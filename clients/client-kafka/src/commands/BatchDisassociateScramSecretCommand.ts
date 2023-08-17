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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { BatchDisassociateScramSecretRequest, BatchDisassociateScramSecretResponse } from "../models/models_0";
import {
  de_BatchDisassociateScramSecretCommand,
  se_BatchDisassociateScramSecretCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateScramSecretCommand}.
 */
export interface BatchDisassociateScramSecretCommandInput extends BatchDisassociateScramSecretRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateScramSecretCommand}.
 */
export interface BatchDisassociateScramSecretCommandOutput
  extends BatchDisassociateScramSecretResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchDisassociateScramSecretCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, BatchDisassociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // BatchDisassociateScramSecretRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   SecretArnList: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisassociateScramSecretCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateScramSecretResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   UnprocessedScramSecrets: [ // __listOfUnprocessedScramSecret
 * //     { // UnprocessedScramSecret
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateScramSecretCommandInput - {@link BatchDisassociateScramSecretCommandInput}
 * @returns {@link BatchDisassociateScramSecretCommandOutput}
 * @see {@link BatchDisassociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateScramSecretCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class BatchDisassociateScramSecretCommand extends $Command<
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
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
  constructor(readonly input: BatchDisassociateScramSecretCommandInput) {
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
  ): Handler<BatchDisassociateScramSecretCommandInput, BatchDisassociateScramSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDisassociateScramSecretCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "BatchDisassociateScramSecretCommand";
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
  private serialize(input: BatchDisassociateScramSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDisassociateScramSecretCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateScramSecretCommandOutput> {
    return de_BatchDisassociateScramSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

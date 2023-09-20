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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeLimitsInput, DescribeLimitsOutput } from "../models/models_0";
import { de_DescribeLimitsCommand, se_DescribeLimitsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandInput extends DescribeLimitsInput {}
/**
 * @public
 *
 * The output of {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandOutput extends DescribeLimitsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the shard limits and usage for the account.</p>
 *          <p>If you update your account limits, the old limits might be returned for a few
 *             minutes.</p>
 *          <p>This operation has a limit of one transaction per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeLimitsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeLimitsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = {};
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLimitsOutput
 * //   ShardLimit: Number("int"), // required
 * //   OpenShardCount: Number("int"), // required
 * //   OnDemandStreamCount: Number("int"), // required
 * //   OnDemandStreamCountLimit: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param DescribeLimitsCommandInput - {@link DescribeLimitsCommandInput}
 * @returns {@link DescribeLimitsCommandOutput}
 * @see {@link DescribeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeLimitsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class DescribeLimitsCommand extends $Command<
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
  KinesisClientResolvedConfig
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
  constructor(readonly input: DescribeLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLimitsCommandInput, DescribeLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DescribeLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "DescribeLimits",
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
  private serialize(input: DescribeLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLimitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLimitsCommandOutput> {
    return de_DescribeLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

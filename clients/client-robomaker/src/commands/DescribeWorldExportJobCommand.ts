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

import { DescribeWorldExportJobRequest, DescribeWorldExportJobResponse } from "../models/models_0";
import { de_DescribeWorldExportJobCommand, se_DescribeWorldExportJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorldExportJobCommand}.
 */
export interface DescribeWorldExportJobCommandInput extends DescribeWorldExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorldExportJobCommand}.
 */
export interface DescribeWorldExportJobCommandOutput extends DescribeWorldExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeWorldExportJobRequest
 *   job: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorldExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorldExportJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   worlds: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   outputLocation: { // OutputLocation
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Prefix: "STRING_VALUE",
 * //   },
 * //   iamRole: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorldExportJobCommandInput - {@link DescribeWorldExportJobCommandInput}
 * @returns {@link DescribeWorldExportJobCommandOutput}
 * @see {@link DescribeWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class DescribeWorldExportJobCommand extends $Command<
  DescribeWorldExportJobCommandInput,
  DescribeWorldExportJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: DescribeWorldExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorldExportJobCommandInput, DescribeWorldExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorldExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeWorldExportJobCommand";
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
  private serialize(input: DescribeWorldExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorldExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorldExportJobCommandOutput> {
    return de_DescribeWorldExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

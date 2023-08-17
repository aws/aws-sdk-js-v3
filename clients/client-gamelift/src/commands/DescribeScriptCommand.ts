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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScriptInput, DescribeScriptOutput } from "../models/models_0";
import { de_DescribeScriptCommand, se_DescribeScriptCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScriptCommand}.
 */
export interface DescribeScriptCommandInput extends DescribeScriptInput {}
/**
 * @public
 *
 * The output of {@link DescribeScriptCommand}.
 */
export interface DescribeScriptCommandOutput extends DescribeScriptOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves properties for a Realtime script. </p>
 *          <p>To request a script record, specify the script ID. If successful, an object containing
 *             the script properties is returned.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeScriptInput
 *   ScriptId: "STRING_VALUE", // required
 * };
 * const command = new DescribeScriptCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScriptOutput
 * //   Script: { // Script
 * //     ScriptId: "STRING_VALUE",
 * //     ScriptArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     SizeOnDisk: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     StorageLocation: { // S3Location
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ObjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScriptCommandInput - {@link DescribeScriptCommandInput}
 * @returns {@link DescribeScriptCommandOutput}
 * @see {@link DescribeScriptCommandInput} for command's `input` shape.
 * @see {@link DescribeScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DescribeScriptCommand extends $Command<
  DescribeScriptCommandInput,
  DescribeScriptCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: DescribeScriptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScriptCommandInput, DescribeScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScriptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeScriptCommand";
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
  private serialize(input: DescribeScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScriptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScriptCommandOutput> {
    return de_DescribeScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

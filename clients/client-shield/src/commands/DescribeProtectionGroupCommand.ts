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

import { DescribeProtectionGroupRequest, DescribeProtectionGroupResponse } from "../models/models_0";
import { de_DescribeProtectionGroupCommand, se_DescribeProtectionGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProtectionGroupCommand}.
 */
export interface DescribeProtectionGroupCommandInput extends DescribeProtectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProtectionGroupCommand}.
 */
export interface DescribeProtectionGroupCommandOutput extends DescribeProtectionGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the specification for the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // DescribeProtectionGroupRequest
 *   ProtectionGroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeProtectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProtectionGroupResponse
 * //   ProtectionGroup: { // ProtectionGroup
 * //     ProtectionGroupId: "STRING_VALUE", // required
 * //     Aggregation: "SUM" || "MEAN" || "MAX", // required
 * //     Pattern: "ALL" || "ARBITRARY" || "BY_RESOURCE_TYPE", // required
 * //     ResourceType: "CLOUDFRONT_DISTRIBUTION" || "ROUTE_53_HOSTED_ZONE" || "ELASTIC_IP_ALLOCATION" || "CLASSIC_LOAD_BALANCER" || "APPLICATION_LOAD_BALANCER" || "GLOBAL_ACCELERATOR",
 * //     Members: [ // ProtectionGroupMembers // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ProtectionGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProtectionGroupCommandInput - {@link DescribeProtectionGroupCommandInput}
 * @returns {@link DescribeProtectionGroupCommandOutput}
 * @see {@link DescribeProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class DescribeProtectionGroupCommand extends $Command<
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: DescribeProtectionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProtectionGroupCommandInput, DescribeProtectionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProtectionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeProtectionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSShield_20160616",
        operation: "DescribeProtectionGroup",
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
  private serialize(input: DescribeProtectionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProtectionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProtectionGroupCommandOutput> {
    return de_DescribeProtectionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

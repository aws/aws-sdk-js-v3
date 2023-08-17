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

import { DescribeAgentVersionsRequest, DescribeAgentVersionsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeAgentVersionsCommand, se_DescribeAgentVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgentVersionsCommand}.
 */
export interface DescribeAgentVersionsCommandInput extends DescribeAgentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentVersionsCommand}.
 */
export interface DescribeAgentVersionsCommandOutput extends DescribeAgentVersionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a
 *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
 *     agent versions for the specified stack or configuration manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeAgentVersionsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeAgentVersionsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeAgentVersionsRequest
 *   StackId: "STRING_VALUE",
 *   ConfigurationManager: { // StackConfigurationManager
 *     Name: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 * };
 * const command = new DescribeAgentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentVersionsResult
 * //   AgentVersions: [ // AgentVersions
 * //     { // AgentVersion
 * //       Version: "STRING_VALUE",
 * //       ConfigurationManager: { // StackConfigurationManager
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAgentVersionsCommandInput - {@link DescribeAgentVersionsCommandInput}
 * @returns {@link DescribeAgentVersionsCommandOutput}
 * @see {@link DescribeAgentVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class DescribeAgentVersionsCommand extends $Command<
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: DescribeAgentVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAgentVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeAgentVersionsCommand";
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
  private serialize(input: DescribeAgentVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAgentVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgentVersionsCommandOutput> {
    return de_DescribeAgentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

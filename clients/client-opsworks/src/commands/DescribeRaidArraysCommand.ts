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

import { DescribeRaidArraysRequest, DescribeRaidArraysResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeRaidArraysCommand, se_DescribeRaidArraysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRaidArraysCommand}.
 */
export interface DescribeRaidArraysCommandInput extends DescribeRaidArraysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRaidArraysCommand}.
 */
export interface DescribeRaidArraysCommandOutput extends DescribeRaidArraysResult, __MetadataBearer {}

/**
 * @public
 * <p>Describe an instance's RAID arrays.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeRaidArraysCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRaidArraysCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeRaidArraysRequest
 *   InstanceId: "STRING_VALUE",
 *   StackId: "STRING_VALUE",
 *   RaidArrayIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeRaidArraysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRaidArraysResult
 * //   RaidArrays: [ // RaidArrays
 * //     { // RaidArray
 * //       RaidArrayId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RaidLevel: Number("int"),
 * //       NumberOfDisks: Number("int"),
 * //       Size: Number("int"),
 * //       Device: "STRING_VALUE",
 * //       MountPoint: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRaidArraysCommandInput - {@link DescribeRaidArraysCommandInput}
 * @returns {@link DescribeRaidArraysCommandOutput}
 * @see {@link DescribeRaidArraysCommandInput} for command's `input` shape.
 * @see {@link DescribeRaidArraysCommandOutput} for command's `response` shape.
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
export class DescribeRaidArraysCommand extends $Command<
  DescribeRaidArraysCommandInput,
  DescribeRaidArraysCommandOutput,
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
  constructor(readonly input: DescribeRaidArraysCommandInput) {
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
  ): Handler<DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRaidArraysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeRaidArraysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "DescribeRaidArrays",
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
  private serialize(input: DescribeRaidArraysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRaidArraysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRaidArraysCommandOutput> {
    return de_DescribeRaidArraysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

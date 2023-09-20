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

import { DescribeOperatingSystemsResponse } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeOperatingSystemsCommand, se_DescribeOperatingSystemsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOperatingSystemsCommand}.
 */
export interface DescribeOperatingSystemsCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeOperatingSystemsCommand}.
 */
export interface DescribeOperatingSystemsCommandOutput extends DescribeOperatingSystemsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeOperatingSystemsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeOperatingSystemsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = {};
 * const command = new DescribeOperatingSystemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOperatingSystemsResponse
 * //   OperatingSystems: [ // OperatingSystems
 * //     { // OperatingSystem
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       ConfigurationManagers: [ // OperatingSystemConfigurationManagers
 * //         { // OperatingSystemConfigurationManager
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReportedName: "STRING_VALUE",
 * //       ReportedVersion: "STRING_VALUE",
 * //       Supported: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOperatingSystemsCommandInput - {@link DescribeOperatingSystemsCommandInput}
 * @returns {@link DescribeOperatingSystemsCommandOutput}
 * @see {@link DescribeOperatingSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOperatingSystemsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class DescribeOperatingSystemsCommand extends $Command<
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
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
  constructor(readonly input: DescribeOperatingSystemsCommandInput) {
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
  ): Handler<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOperatingSystemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeOperatingSystemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "DescribeOperatingSystems",
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
  private serialize(input: DescribeOperatingSystemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOperatingSystemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOperatingSystemsCommandOutput> {
    return de_DescribeOperatingSystemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

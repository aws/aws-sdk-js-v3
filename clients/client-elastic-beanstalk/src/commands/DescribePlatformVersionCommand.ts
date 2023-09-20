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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribePlatformVersionRequest, DescribePlatformVersionResult } from "../models/models_0";
import { de_DescribePlatformVersionCommand, se_DescribePlatformVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePlatformVersionCommand}.
 */
export interface DescribePlatformVersionCommandInput extends DescribePlatformVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlatformVersionCommand}.
 */
export interface DescribePlatformVersionCommandOutput extends DescribePlatformVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of
 *       platform versions.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribePlatformVersionRequest
 *   PlatformArn: "STRING_VALUE",
 * };
 * const command = new DescribePlatformVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlatformVersionResult
 * //   PlatformDescription: { // PlatformDescription
 * //     PlatformArn: "STRING_VALUE",
 * //     PlatformOwner: "STRING_VALUE",
 * //     PlatformName: "STRING_VALUE",
 * //     PlatformVersion: "STRING_VALUE",
 * //     SolutionStackName: "STRING_VALUE",
 * //     PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     PlatformCategory: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Maintainer: "STRING_VALUE",
 * //     OperatingSystemName: "STRING_VALUE",
 * //     OperatingSystemVersion: "STRING_VALUE",
 * //     ProgrammingLanguages: [ // PlatformProgrammingLanguages
 * //       { // PlatformProgrammingLanguage
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Frameworks: [ // PlatformFrameworks
 * //       { // PlatformFramework
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CustomAmiList: [ // CustomAmiList
 * //       { // CustomAmi
 * //         VirtualizationType: "STRING_VALUE",
 * //         ImageId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedTierList: [ // SupportedTierList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedAddonList: [ // SupportedAddonList
 * //       "STRING_VALUE",
 * //     ],
 * //     PlatformLifecycleState: "STRING_VALUE",
 * //     PlatformBranchName: "STRING_VALUE",
 * //     PlatformBranchLifecycleState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePlatformVersionCommandInput - {@link DescribePlatformVersionCommandInput}
 * @returns {@link DescribePlatformVersionCommandOutput}
 * @see {@link DescribePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 */
export class DescribePlatformVersionCommand extends $Command<
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: DescribePlatformVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePlatformVersionCommandInput, DescribePlatformVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlatformVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribePlatformVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "DescribePlatformVersion",
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
  private serialize(input: DescribePlatformVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePlatformVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlatformVersionCommandOutput> {
    return de_DescribePlatformVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

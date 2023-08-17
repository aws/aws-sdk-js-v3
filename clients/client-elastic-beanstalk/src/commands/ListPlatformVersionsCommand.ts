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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/models_0";
import { de_ListPlatformVersionsCommand, se_ListPlatformVersionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPlatformVersionsCommand}.
 */
export interface ListPlatformVersionsCommandInput extends ListPlatformVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlatformVersionsCommand}.
 */
export interface ListPlatformVersionsCommandOutput extends ListPlatformVersionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists the platform versions available for your account in an AWS Region. Provides
 *       summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform
 *       version.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // ListPlatformVersionsRequest
 *   Filters: [ // PlatformFilters
 *     { // PlatformFilter
 *       Type: "STRING_VALUE",
 *       Operator: "STRING_VALUE",
 *       Values: [ // PlatformFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlatformVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlatformVersionsResult
 * //   PlatformSummaryList: [ // PlatformSummaryList
 * //     { // PlatformSummary
 * //       PlatformArn: "STRING_VALUE",
 * //       PlatformOwner: "STRING_VALUE",
 * //       PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //       PlatformCategory: "STRING_VALUE",
 * //       OperatingSystemName: "STRING_VALUE",
 * //       OperatingSystemVersion: "STRING_VALUE",
 * //       SupportedTierList: [ // SupportedTierList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedAddonList: [ // SupportedAddonList
 * //         "STRING_VALUE",
 * //       ],
 * //       PlatformLifecycleState: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       PlatformBranchName: "STRING_VALUE",
 * //       PlatformBranchLifecycleState: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlatformVersionsCommandInput - {@link ListPlatformVersionsCommandInput}
 * @returns {@link ListPlatformVersionsCommandOutput}
 * @see {@link ListPlatformVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformVersionsCommandOutput} for command's `response` shape.
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
export class ListPlatformVersionsCommand extends $Command<
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
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
  constructor(readonly input: ListPlatformVersionsCommandInput) {
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
  ): Handler<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPlatformVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ListPlatformVersionsCommand";
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
  private serialize(input: ListPlatformVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPlatformVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlatformVersionsCommandOutput> {
    return de_ListPlatformVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePrefixListsRequest, DescribePrefixListsResult } from "../models/models_4";
import { de_DescribePrefixListsCommand, se_DescribePrefixListsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePrefixListsCommand}.
 */
export interface DescribePrefixListsCommandInput extends DescribePrefixListsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePrefixListsCommand}.
 */
export interface DescribePrefixListsCommandOutput extends DescribePrefixListsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes available Amazon Web Services services in a prefix list format, which includes the prefix list
 *             name and prefix list ID of the service and the IP address range for the service.</p>
 *          <p>We recommend that you use <a>DescribeManagedPrefixLists</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePrefixListsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PrefixListIds: [ // PrefixListResourceIdStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribePrefixListsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrefixListsResult
 * //   NextToken: "STRING_VALUE",
 * //   PrefixLists: [ // PrefixListSet
 * //     { // PrefixList
 * //       Cidrs: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       PrefixListId: "STRING_VALUE",
 * //       PrefixListName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePrefixListsCommandInput - {@link DescribePrefixListsCommandInput}
 * @returns {@link DescribePrefixListsCommandOutput}
 * @see {@link DescribePrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribePrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribePrefixListsCommand extends $Command<
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribePrefixListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePrefixListsCommandInput, DescribePrefixListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePrefixListsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePrefixListsCommand";
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
  private serialize(input: DescribePrefixListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePrefixListsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePrefixListsCommandOutput> {
    return de_DescribePrefixListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

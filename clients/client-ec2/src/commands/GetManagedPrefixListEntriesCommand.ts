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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetManagedPrefixListEntriesRequest, GetManagedPrefixListEntriesResult } from "../models/models_5";
import { de_GetManagedPrefixListEntriesCommand, se_GetManagedPrefixListEntriesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetManagedPrefixListEntriesCommand}.
 */
export interface GetManagedPrefixListEntriesCommandInput extends GetManagedPrefixListEntriesRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedPrefixListEntriesCommand}.
 */
export interface GetManagedPrefixListEntriesCommandOutput extends GetManagedPrefixListEntriesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the entries for a specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetManagedPrefixListEntriesRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   TargetVersion: Number("long"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetManagedPrefixListEntriesCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedPrefixListEntriesResult
 * //   Entries: [ // PrefixListEntrySet
 * //     { // PrefixListEntry
 * //       Cidr: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetManagedPrefixListEntriesCommandInput - {@link GetManagedPrefixListEntriesCommandInput}
 * @returns {@link GetManagedPrefixListEntriesCommandOutput}
 * @see {@link GetManagedPrefixListEntriesCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetManagedPrefixListEntriesCommand extends $Command<
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
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
  constructor(readonly input: GetManagedPrefixListEntriesCommandInput) {
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
  ): Handler<GetManagedPrefixListEntriesCommandInput, GetManagedPrefixListEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetManagedPrefixListEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetManagedPrefixListEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetManagedPrefixListEntries",
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
  private serialize(input: GetManagedPrefixListEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetManagedPrefixListEntriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetManagedPrefixListEntriesCommandOutput> {
    return de_GetManagedPrefixListEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

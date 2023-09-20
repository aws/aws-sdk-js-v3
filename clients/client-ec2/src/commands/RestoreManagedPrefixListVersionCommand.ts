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
import { RestoreManagedPrefixListVersionRequest, RestoreManagedPrefixListVersionResult } from "../models/models_6";
import {
  de_RestoreManagedPrefixListVersionCommand,
  se_RestoreManagedPrefixListVersionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreManagedPrefixListVersionCommand}.
 */
export interface RestoreManagedPrefixListVersionCommandInput extends RestoreManagedPrefixListVersionRequest {}
/**
 * @public
 *
 * The output of {@link RestoreManagedPrefixListVersionCommand}.
 */
export interface RestoreManagedPrefixListVersionCommandOutput
  extends RestoreManagedPrefixListVersionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreManagedPrefixListVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreManagedPrefixListVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RestoreManagedPrefixListVersionRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   PreviousVersion: Number("long"), // required
 *   CurrentVersion: Number("long"), // required
 * };
 * const command = new RestoreManagedPrefixListVersionCommand(input);
 * const response = await client.send(command);
 * // { // RestoreManagedPrefixListVersionResult
 * //   PrefixList: { // ManagedPrefixList
 * //     PrefixListId: "STRING_VALUE",
 * //     AddressFamily: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "restore-in-progress" || "restore-complete" || "restore-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     PrefixListArn: "STRING_VALUE",
 * //     PrefixListName: "STRING_VALUE",
 * //     MaxEntries: Number("int"),
 * //     Version: Number("long"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OwnerId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreManagedPrefixListVersionCommandInput - {@link RestoreManagedPrefixListVersionCommandInput}
 * @returns {@link RestoreManagedPrefixListVersionCommandOutput}
 * @see {@link RestoreManagedPrefixListVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreManagedPrefixListVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RestoreManagedPrefixListVersionCommand extends $Command<
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
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
  constructor(readonly input: RestoreManagedPrefixListVersionCommandInput) {
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
  ): Handler<RestoreManagedPrefixListVersionCommandInput, RestoreManagedPrefixListVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreManagedPrefixListVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreManagedPrefixListVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "RestoreManagedPrefixListVersion",
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
  private serialize(
    input: RestoreManagedPrefixListVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RestoreManagedPrefixListVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreManagedPrefixListVersionCommandOutput> {
    return de_RestoreManagedPrefixListVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

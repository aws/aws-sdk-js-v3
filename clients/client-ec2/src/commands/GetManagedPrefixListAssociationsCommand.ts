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
import { GetManagedPrefixListAssociationsRequest, GetManagedPrefixListAssociationsResult } from "../models/models_5";
import {
  de_GetManagedPrefixListAssociationsCommand,
  se_GetManagedPrefixListAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetManagedPrefixListAssociationsCommand}.
 */
export interface GetManagedPrefixListAssociationsCommandInput extends GetManagedPrefixListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedPrefixListAssociationsCommand}.
 */
export interface GetManagedPrefixListAssociationsCommandOutput
  extends GetManagedPrefixListAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the resources that are associated with the specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetManagedPrefixListAssociationsRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetManagedPrefixListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedPrefixListAssociationsResult
 * //   PrefixListAssociations: [ // PrefixListAssociationSet
 * //     { // PrefixListAssociation
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetManagedPrefixListAssociationsCommandInput - {@link GetManagedPrefixListAssociationsCommandInput}
 * @returns {@link GetManagedPrefixListAssociationsCommandOutput}
 * @see {@link GetManagedPrefixListAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetManagedPrefixListAssociationsCommand extends $Command<
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput,
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
  constructor(readonly input: GetManagedPrefixListAssociationsCommandInput) {
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
  ): Handler<GetManagedPrefixListAssociationsCommandInput, GetManagedPrefixListAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetManagedPrefixListAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetManagedPrefixListAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetManagedPrefixListAssociations",
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
    input: GetManagedPrefixListAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetManagedPrefixListAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetManagedPrefixListAssociationsCommandOutput> {
    return de_GetManagedPrefixListAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

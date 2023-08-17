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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeEntitlementsRequest, DescribeEntitlementsResult } from "../models/models_0";
import { de_DescribeEntitlementsCommand, se_DescribeEntitlementsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntitlementsCommand}.
 */
export interface DescribeEntitlementsCommandInput extends DescribeEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntitlementsCommand}.
 */
export interface DescribeEntitlementsCommandOutput extends DescribeEntitlementsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one of more entitlements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeEntitlementsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeEntitlementsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeEntitlementsRequest
 *   Name: "STRING_VALUE",
 *   StackName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntitlementsResult
 * //   Entitlements: [ // EntitlementList
 * //     { // Entitlement
 * //       Name: "STRING_VALUE", // required
 * //       StackName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       AppVisibility: "ALL" || "ASSOCIATED", // required
 * //       Attributes: [ // EntitlementAttributeList // required
 * //         { // EntitlementAttribute
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEntitlementsCommandInput - {@link DescribeEntitlementsCommandInput}
 * @returns {@link DescribeEntitlementsCommandOutput}
 * @see {@link DescribeEntitlementsCommandInput} for command's `input` shape.
 * @see {@link DescribeEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *  <p>The entitlement can't be found.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DescribeEntitlementsCommand extends $Command<
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: DescribeEntitlementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEntitlementsCommandInput, DescribeEntitlementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEntitlementsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeEntitlementsCommand";
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
  private serialize(input: DescribeEntitlementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEntitlementsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEntitlementsCommandOutput> {
    return de_DescribeEntitlementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

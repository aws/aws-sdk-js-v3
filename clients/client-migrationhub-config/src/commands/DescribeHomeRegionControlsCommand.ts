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

import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient";
import { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/models_0";
import { de_DescribeHomeRegionControlsCommand, se_DescribeHomeRegionControlsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHomeRegionControlsCommand}.
 */
export interface DescribeHomeRegionControlsCommandInput extends DescribeHomeRegionControlsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHomeRegionControlsCommand}.
 */
export interface DescribeHomeRegionControlsCommandOutput extends DescribeHomeRegionControlsResult, __MetadataBearer {}

/**
 * @public
 * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
 *       fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const input = { // DescribeHomeRegionControlsRequest
 *   ControlId: "STRING_VALUE",
 *   HomeRegion: "STRING_VALUE",
 *   Target: { // Target
 *     Type: "ACCOUNT", // required
 *     Id: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeHomeRegionControlsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHomeRegionControlsResult
 * //   HomeRegionControls: [ // HomeRegionControls
 * //     { // HomeRegionControl
 * //       ControlId: "STRING_VALUE",
 * //       HomeRegion: "STRING_VALUE",
 * //       Target: { // Target
 * //         Type: "ACCOUNT", // required
 * //         Id: "STRING_VALUE",
 * //       },
 * //       RequestedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHomeRegionControlsCommandInput - {@link DescribeHomeRegionControlsCommandInput}
 * @returns {@link DescribeHomeRegionControlsCommandOutput}
 * @see {@link DescribeHomeRegionControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeHomeRegionControlsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *       encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in the
 *       wrong format or data type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when a request fails due to temporary unavailability of the
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubConfigServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubConfig service.</p>
 *
 */
export class DescribeHomeRegionControlsCommand extends $Command<
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
  MigrationHubConfigClientResolvedConfig
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
  constructor(readonly input: DescribeHomeRegionControlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHomeRegionControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "DescribeHomeRegionControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubMultiAccountService",
        operation: "DescribeHomeRegionControls",
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
  private serialize(input: DescribeHomeRegionControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHomeRegionControlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHomeRegionControlsCommandOutput> {
    return de_DescribeHomeRegionControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

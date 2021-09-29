import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { CreateSubnetGroupRequest, CreateSubnetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSubnetGroupCommand,
  serializeAws_json1_1CreateSubnetGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateSubnetGroupCommandInput extends CreateSubnetGroupRequest {}
export interface CreateSubnetGroupCommandOutput extends CreateSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.
 *
 *          When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes.
 *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateSubnetGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateSubnetGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new CreateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSubnetGroupCommand extends $Command<
  CreateSubnetGroupCommandInput,
  CreateSubnetGroupCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "CreateSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubnetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSubnetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubnetGroupCommandOutput> {
    return deserializeAws_json1_1CreateSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteDhcpOptionsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDhcpOptionsCommandInput = DeleteDhcpOptionsRequest;
export declare type DeleteDhcpOptionsCommandOutput = __MetadataBearer;
export declare class DeleteDhcpOptionsCommand extends $Command<DeleteDhcpOptionsCommandInput, DeleteDhcpOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteDhcpOptionsCommandInput;
    constructor(input: DeleteDhcpOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDhcpOptionsCommandInput, DeleteDhcpOptionsCommandOutput>;
    private serialize;
    private deserialize;
}

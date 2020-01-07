import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpnConnectionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpnConnectionCommandInput = DeleteVpnConnectionRequest;
export declare type DeleteVpnConnectionCommandOutput = __MetadataBearer;
export declare class DeleteVpnConnectionCommand extends $Command<DeleteVpnConnectionCommandInput, DeleteVpnConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpnConnectionCommandInput;
    constructor(input: DeleteVpnConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpnConnectionCommandInput, DeleteVpnConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

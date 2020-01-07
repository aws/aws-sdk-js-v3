import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteClientVpnEndpointRequest, DeleteClientVpnEndpointResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClientVpnEndpointCommandInput = DeleteClientVpnEndpointRequest;
export declare type DeleteClientVpnEndpointCommandOutput = DeleteClientVpnEndpointResult & __MetadataBearer;
export declare class DeleteClientVpnEndpointCommand extends $Command<DeleteClientVpnEndpointCommandInput, DeleteClientVpnEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteClientVpnEndpointCommandInput;
    constructor(input: DeleteClientVpnEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClientVpnEndpointCommandInput, DeleteClientVpnEndpointCommandOutput>;
    private serialize;
    private deserialize;
}

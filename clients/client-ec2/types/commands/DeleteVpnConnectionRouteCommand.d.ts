import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpnConnectionRouteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpnConnectionRouteCommandInput = DeleteVpnConnectionRouteRequest;
export declare type DeleteVpnConnectionRouteCommandOutput = __MetadataBearer;
export declare class DeleteVpnConnectionRouteCommand extends $Command<DeleteVpnConnectionRouteCommandInput, DeleteVpnConnectionRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpnConnectionRouteCommandInput;
    constructor(input: DeleteVpnConnectionRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpnConnectionRouteCommandInput, DeleteVpnConnectionRouteCommandOutput>;
    private serialize;
    private deserialize;
}

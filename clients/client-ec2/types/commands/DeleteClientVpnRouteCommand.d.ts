import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteClientVpnRouteRequest, DeleteClientVpnRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClientVpnRouteCommandInput = DeleteClientVpnRouteRequest;
export declare type DeleteClientVpnRouteCommandOutput = DeleteClientVpnRouteResult & __MetadataBearer;
export declare class DeleteClientVpnRouteCommand extends $Command<DeleteClientVpnRouteCommandInput, DeleteClientVpnRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteClientVpnRouteCommandInput;
    constructor(input: DeleteClientVpnRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClientVpnRouteCommandInput, DeleteClientVpnRouteCommandOutput>;
    private serialize;
    private deserialize;
}

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteRouteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRouteCommandInput = DeleteRouteRequest;
export declare type DeleteRouteCommandOutput = __MetadataBearer;
export declare class DeleteRouteCommand extends $Command<DeleteRouteCommandInput, DeleteRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteRouteCommandInput;
    constructor(input: DeleteRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRouteCommandInput, DeleteRouteCommandOutput>;
    private serialize;
    private deserialize;
}

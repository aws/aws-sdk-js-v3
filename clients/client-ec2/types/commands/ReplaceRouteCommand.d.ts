import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReplaceRouteCommandInput = ReplaceRouteRequest;
export declare type ReplaceRouteCommandOutput = __MetadataBearer;
export declare class ReplaceRouteCommand extends $Command<ReplaceRouteCommandInput, ReplaceRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceRouteCommandInput;
    constructor(input: ReplaceRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceRouteCommandInput, ReplaceRouteCommandOutput>;
    private serialize;
    private deserialize;
}

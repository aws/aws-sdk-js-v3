import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateRouteRequest, CreateRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRouteCommandInput = CreateRouteRequest;
export declare type CreateRouteCommandOutput = CreateRouteResult & __MetadataBearer;
export declare class CreateRouteCommand extends $Command<CreateRouteCommandInput, CreateRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateRouteCommandInput;
    constructor(input: CreateRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRouteCommandInput, CreateRouteCommandOutput>;
    private serialize;
    private deserialize;
}

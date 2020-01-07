import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateRouteTableRequest, CreateRouteTableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRouteTableCommandInput = CreateRouteTableRequest;
export declare type CreateRouteTableCommandOutput = CreateRouteTableResult & __MetadataBearer;
export declare class CreateRouteTableCommand extends $Command<CreateRouteTableCommandInput, CreateRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateRouteTableCommandInput;
    constructor(input: CreateRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRouteTableCommandInput, CreateRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}

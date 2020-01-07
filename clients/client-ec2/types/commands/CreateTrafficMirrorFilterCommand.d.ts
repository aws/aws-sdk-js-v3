import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorFilterRequest, CreateTrafficMirrorFilterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficMirrorFilterCommandInput = CreateTrafficMirrorFilterRequest;
export declare type CreateTrafficMirrorFilterCommandOutput = CreateTrafficMirrorFilterResult & __MetadataBearer;
export declare class CreateTrafficMirrorFilterCommand extends $Command<CreateTrafficMirrorFilterCommandInput, CreateTrafficMirrorFilterCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTrafficMirrorFilterCommandInput;
    constructor(input: CreateTrafficMirrorFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficMirrorFilterCommandInput, CreateTrafficMirrorFilterCommandOutput>;
    private serialize;
    private deserialize;
}

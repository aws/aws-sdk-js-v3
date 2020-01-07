import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorTargetRequest, CreateTrafficMirrorTargetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficMirrorTargetCommandInput = CreateTrafficMirrorTargetRequest;
export declare type CreateTrafficMirrorTargetCommandOutput = CreateTrafficMirrorTargetResult & __MetadataBearer;
export declare class CreateTrafficMirrorTargetCommand extends $Command<CreateTrafficMirrorTargetCommandInput, CreateTrafficMirrorTargetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTrafficMirrorTargetCommandInput;
    constructor(input: CreateTrafficMirrorTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficMirrorTargetCommandInput, CreateTrafficMirrorTargetCommandOutput>;
    private serialize;
    private deserialize;
}

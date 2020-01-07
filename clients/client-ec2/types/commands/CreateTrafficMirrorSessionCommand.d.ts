import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorSessionRequest, CreateTrafficMirrorSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficMirrorSessionCommandInput = CreateTrafficMirrorSessionRequest;
export declare type CreateTrafficMirrorSessionCommandOutput = CreateTrafficMirrorSessionResult & __MetadataBearer;
export declare class CreateTrafficMirrorSessionCommand extends $Command<CreateTrafficMirrorSessionCommandInput, CreateTrafficMirrorSessionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTrafficMirrorSessionCommandInput;
    constructor(input: CreateTrafficMirrorSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficMirrorSessionCommandInput, CreateTrafficMirrorSessionCommandOutput>;
    private serialize;
    private deserialize;
}

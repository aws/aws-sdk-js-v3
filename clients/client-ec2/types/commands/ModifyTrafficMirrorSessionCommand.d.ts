import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorSessionRequest, ModifyTrafficMirrorSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyTrafficMirrorSessionCommandInput = ModifyTrafficMirrorSessionRequest;
export declare type ModifyTrafficMirrorSessionCommandOutput = ModifyTrafficMirrorSessionResult & __MetadataBearer;
export declare class ModifyTrafficMirrorSessionCommand extends $Command<ModifyTrafficMirrorSessionCommandInput, ModifyTrafficMirrorSessionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTrafficMirrorSessionCommandInput;
    constructor(input: ModifyTrafficMirrorSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTrafficMirrorSessionCommandInput, ModifyTrafficMirrorSessionCommandOutput>;
    private serialize;
    private deserialize;
}

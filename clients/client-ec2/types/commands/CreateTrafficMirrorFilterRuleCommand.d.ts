import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficMirrorFilterRuleCommandInput = CreateTrafficMirrorFilterRuleRequest;
export declare type CreateTrafficMirrorFilterRuleCommandOutput = CreateTrafficMirrorFilterRuleResult & __MetadataBearer;
export declare class CreateTrafficMirrorFilterRuleCommand extends $Command<CreateTrafficMirrorFilterRuleCommandInput, CreateTrafficMirrorFilterRuleCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTrafficMirrorFilterRuleCommandInput;
    constructor(input: CreateTrafficMirrorFilterRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficMirrorFilterRuleCommandInput, CreateTrafficMirrorFilterRuleCommandOutput>;
    private serialize;
    private deserialize;
}

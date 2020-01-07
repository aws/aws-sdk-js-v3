import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyTrafficMirrorFilterRuleCommandInput = ModifyTrafficMirrorFilterRuleRequest;
export declare type ModifyTrafficMirrorFilterRuleCommandOutput = ModifyTrafficMirrorFilterRuleResult & __MetadataBearer;
export declare class ModifyTrafficMirrorFilterRuleCommand extends $Command<ModifyTrafficMirrorFilterRuleCommandInput, ModifyTrafficMirrorFilterRuleCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTrafficMirrorFilterRuleCommandInput;
    constructor(input: ModifyTrafficMirrorFilterRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTrafficMirrorFilterRuleCommandInput, ModifyTrafficMirrorFilterRuleCommandOutput>;
    private serialize;
    private deserialize;
}

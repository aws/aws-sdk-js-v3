import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorFilterRuleRequest, DeleteTrafficMirrorFilterRuleResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrafficMirrorFilterRuleCommandInput = DeleteTrafficMirrorFilterRuleRequest;
export declare type DeleteTrafficMirrorFilterRuleCommandOutput = DeleteTrafficMirrorFilterRuleResult & __MetadataBearer;
export declare class DeleteTrafficMirrorFilterRuleCommand extends $Command<DeleteTrafficMirrorFilterRuleCommandInput, DeleteTrafficMirrorFilterRuleCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTrafficMirrorFilterRuleCommandInput;
    constructor(input: DeleteTrafficMirrorFilterRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficMirrorFilterRuleCommandInput, DeleteTrafficMirrorFilterRuleCommandOutput>;
    private serialize;
    private deserialize;
}

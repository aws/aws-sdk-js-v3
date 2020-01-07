import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachInstancesToLoadBalancerRequest, AttachInstancesToLoadBalancerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachInstancesToLoadBalancerCommandInput = AttachInstancesToLoadBalancerRequest;
export declare type AttachInstancesToLoadBalancerCommandOutput = AttachInstancesToLoadBalancerResult & __MetadataBearer;
export declare class AttachInstancesToLoadBalancerCommand extends $Command<AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachInstancesToLoadBalancerCommandInput;
    constructor(input: AttachInstancesToLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

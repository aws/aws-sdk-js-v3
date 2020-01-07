import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AttachElasticLoadBalancerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachElasticLoadBalancerCommandInput = AttachElasticLoadBalancerRequest;
export declare type AttachElasticLoadBalancerCommandOutput = __MetadataBearer;
export declare class AttachElasticLoadBalancerCommand extends $Command<AttachElasticLoadBalancerCommandInput, AttachElasticLoadBalancerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AttachElasticLoadBalancerCommandInput;
    constructor(input: AttachElasticLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachElasticLoadBalancerCommandInput, AttachElasticLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

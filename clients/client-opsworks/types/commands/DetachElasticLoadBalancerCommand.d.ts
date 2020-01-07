import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DetachElasticLoadBalancerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachElasticLoadBalancerCommandInput = DetachElasticLoadBalancerRequest;
export declare type DetachElasticLoadBalancerCommandOutput = __MetadataBearer;
export declare class DetachElasticLoadBalancerCommand extends $Command<DetachElasticLoadBalancerCommandInput, DetachElasticLoadBalancerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DetachElasticLoadBalancerCommandInput;
    constructor(input: DetachElasticLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachElasticLoadBalancerCommandInput, DetachElasticLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

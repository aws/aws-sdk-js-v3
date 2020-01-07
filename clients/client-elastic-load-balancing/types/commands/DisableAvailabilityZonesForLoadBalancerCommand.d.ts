import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { RemoveAvailabilityZonesInput, RemoveAvailabilityZonesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableAvailabilityZonesForLoadBalancerCommandInput = RemoveAvailabilityZonesInput;
export declare type DisableAvailabilityZonesForLoadBalancerCommandOutput = RemoveAvailabilityZonesOutput & __MetadataBearer;
export declare class DisableAvailabilityZonesForLoadBalancerCommand extends $Command<DisableAvailabilityZonesForLoadBalancerCommandInput, DisableAvailabilityZonesForLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DisableAvailabilityZonesForLoadBalancerCommandInput;
    constructor(input: DisableAvailabilityZonesForLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAvailabilityZonesForLoadBalancerCommandInput, DisableAvailabilityZonesForLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

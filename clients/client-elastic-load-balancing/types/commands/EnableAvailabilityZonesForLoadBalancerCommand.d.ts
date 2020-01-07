import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { AddAvailabilityZonesInput, AddAvailabilityZonesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableAvailabilityZonesForLoadBalancerCommandInput = AddAvailabilityZonesInput;
export declare type EnableAvailabilityZonesForLoadBalancerCommandOutput = AddAvailabilityZonesOutput & __MetadataBearer;
export declare class EnableAvailabilityZonesForLoadBalancerCommand extends $Command<EnableAvailabilityZonesForLoadBalancerCommandInput, EnableAvailabilityZonesForLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: EnableAvailabilityZonesForLoadBalancerCommandInput;
    constructor(input: EnableAvailabilityZonesForLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAvailabilityZonesForLoadBalancerCommandInput, EnableAvailabilityZonesForLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

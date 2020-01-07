import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DeregisterEndPointsInput, DeregisterEndPointsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterInstancesFromLoadBalancerCommandInput = DeregisterEndPointsInput;
export declare type DeregisterInstancesFromLoadBalancerCommandOutput = DeregisterEndPointsOutput & __MetadataBearer;
export declare class DeregisterInstancesFromLoadBalancerCommand extends $Command<DeregisterInstancesFromLoadBalancerCommandInput, DeregisterInstancesFromLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DeregisterInstancesFromLoadBalancerCommandInput;
    constructor(input: DeregisterInstancesFromLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterInstancesFromLoadBalancerCommandInput, DeregisterInstancesFromLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

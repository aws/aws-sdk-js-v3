import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { RegisterEndPointsInput, RegisterEndPointsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterInstancesWithLoadBalancerCommandInput = RegisterEndPointsInput;
export declare type RegisterInstancesWithLoadBalancerCommandOutput = RegisterEndPointsOutput & __MetadataBearer;
export declare class RegisterInstancesWithLoadBalancerCommand extends $Command<RegisterInstancesWithLoadBalancerCommandInput, RegisterInstancesWithLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: RegisterInstancesWithLoadBalancerCommandInput;
    constructor(input: RegisterInstancesWithLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterInstancesWithLoadBalancerCommandInput, RegisterInstancesWithLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

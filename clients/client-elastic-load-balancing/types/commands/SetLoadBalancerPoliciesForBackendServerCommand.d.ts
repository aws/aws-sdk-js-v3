import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { SetLoadBalancerPoliciesForBackendServerInput, SetLoadBalancerPoliciesForBackendServerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetLoadBalancerPoliciesForBackendServerCommandInput = SetLoadBalancerPoliciesForBackendServerInput;
export declare type SetLoadBalancerPoliciesForBackendServerCommandOutput = SetLoadBalancerPoliciesForBackendServerOutput & __MetadataBearer;
export declare class SetLoadBalancerPoliciesForBackendServerCommand extends $Command<SetLoadBalancerPoliciesForBackendServerCommandInput, SetLoadBalancerPoliciesForBackendServerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: SetLoadBalancerPoliciesForBackendServerCommandInput;
    constructor(input: SetLoadBalancerPoliciesForBackendServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoadBalancerPoliciesForBackendServerCommandInput, SetLoadBalancerPoliciesForBackendServerCommandOutput>;
    private serialize;
    private deserialize;
}

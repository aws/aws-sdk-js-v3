import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteLoadBalancerRequest, DeleteLoadBalancerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoadBalancerCommandInput = DeleteLoadBalancerRequest;
export declare type DeleteLoadBalancerCommandOutput = DeleteLoadBalancerResult & __MetadataBearer;
export declare class DeleteLoadBalancerCommand extends $Command<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteLoadBalancerCommandInput;
    constructor(input: DeleteLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

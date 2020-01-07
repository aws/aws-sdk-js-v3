import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsCommandInput = RemoveTagsInput;
export declare type RemoveTagsCommandOutput = RemoveTagsOutput & __MetadataBearer;
export declare class RemoveTagsCommand extends $Command<RemoveTagsCommandInput, RemoveTagsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: RemoveTagsCommandInput;
    constructor(input: RemoveTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsCommandInput, RemoveTagsCommandOutput>;
    private serialize;
    private deserialize;
}

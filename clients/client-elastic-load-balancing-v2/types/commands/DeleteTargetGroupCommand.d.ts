import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DeleteTargetGroupInput, DeleteTargetGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTargetGroupCommandInput = DeleteTargetGroupInput;
export declare type DeleteTargetGroupCommandOutput = DeleteTargetGroupOutput & __MetadataBearer;
export declare class DeleteTargetGroupCommand extends $Command<DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DeleteTargetGroupCommandInput;
    constructor(input: DeleteTargetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}

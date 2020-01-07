import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAssociationExecutionTargetsRequest, DescribeAssociationExecutionTargetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAssociationExecutionTargetsCommandInput = DescribeAssociationExecutionTargetsRequest;
export declare type DescribeAssociationExecutionTargetsCommandOutput = DescribeAssociationExecutionTargetsResult & __MetadataBearer;
export declare class DescribeAssociationExecutionTargetsCommand extends $Command<DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAssociationExecutionTargetsCommandInput;
    constructor(input: DescribeAssociationExecutionTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
